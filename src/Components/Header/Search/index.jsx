import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import debounce from 'lodash/debounce';
import Autosuggest from 'react-autosuggest';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import FETCH_SUGGESTIONS from 'Queries/fetchSuggestions';
import { updateSuggestions, generateMediaUrl } from 'Helpers';
import renderSuggestion from './Suggestion';
import renderSectionTitle from './SectionTitle';
import SearchInput from './SearchInput';

const getSuggestionValue = suggestion => suggestion.name;
const getSectionSuggestions = section => section.suggestions;

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      loading: false,
      hasFocus: false,
      isUnmounting: false,
    };

    this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 500);
  }

  onChange = (e, { newValue }) => {
    const { updateSearch } = this.props;

    this.setState({ value: newValue }, () => {
      updateSearch(newValue);
    });
  }

  toggleFocus = (hasFocus) => {
    this.setState({ hasFocus });
  }

  loadSuggestions = () => {
    const { data } = this.props;
    const suggest = (typeof data === 'undefined' ? [] : data.search);

    this.setState({
      suggestions: (typeof data === 'undefined' ? [] : updateSuggestions(suggest)),
      loading: false,
    });
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { isUnmounting } = this.state;

    if (!isUnmounting) {
      this.debouncedLoadSuggestions(value);
      this.setState({ loading: true });
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  shouldRenderSuggestions = val => val.trim().length > 3

  onSuggestionSelected = (e, { suggestion }) => {
    const { history } = this.props;

    history.push(generateMediaUrl(suggestion.type, suggestion.uuid));
  }

  unmountComponent = () => {
    this.setState({
      isUnmounting: true,
    });
  }

  render() {
    const {
      value,
      suggestions,
      loading,
      hasFocus,
    } = this.state;

    const checkSuggestions = (typeof suggestions === 'undefined' ? [] : suggestions);

    const inputProps = {
      placeholder: 'Search...',
      value,
      onChange: this.onChange,
    };

    const renderInputComponent = props => (
      <SearchInput
        inputProps={props}
        loading={loading}
        toggleFocus={this.toggleFocus}
        hasSuggestions={(suggestions.length > 0)}
        value={value}
        unmount={this.unmountComponent}
        hasFocus={hasFocus}
      />
    );

    return (
      <Autosuggest
        multiSection
        suggestions={checkSuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  data: PropTypes.shape({
    search: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      poster_path: PropTypes.string,
      uuid: PropTypes.string,
    })),
    variables: PropTypes.object,
  }),
};

Search.defaultProps = {
  data: {},
};

export default Search = withRouter(graphql(FETCH_SUGGESTIONS, {
  skip: props => (!(props.value.trim().length > 3)),
  options: props => ({ variables: { name: props.value } }),
})(Search));
