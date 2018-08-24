import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

import { faSearch, faSpinner } from '@fortawesome/pro-regular-svg-icons';

import {
  InputWrap,
  LoadingIcon,
  SearchIcon,
  NoResultsError,
} from './Styles';

class SearchInput extends Component {
  constructor() {
    super();

    this.state = {
      hasFocus: false,
      value: '',
    };
  }

  setFocus = (e, hasFocus) => {
    const { toggleFocus, inputProps } = this.props;

    this.setState({ hasFocus }, () => {
      toggleFocus(hasFocus);
      if (hasFocus) {
        inputProps.onFocus(e);
      } else {
        inputProps.onBlur(e);
      }
    });
  }

  setSearch = (e) => {
    const { inputProps } = this.props;

    this.setState({ value: e.target.value });
    inputProps.onChange(e);
  }

  checkKey = (e) => {
    const { location, history, unmount } = this.props;
    const { value } = this.state;

    const splitloc = location.pathname.split('/');
    const currentLocation = splitloc.pop() || splitloc.pop();

    if (e.key === 'Enter' && value.replace(/\s*$/, '') !== currentLocation.replace(/\s*$/, '')) {
      unmount();

      setTimeout(() => {
        history.push(`/search/${value}`);
      }, 500);
    }
  }

  render() {
    const { hasFocus } = this.state;
    const {
      loading,
      hasSuggestions,
      value,
      inputProps,
    } = this.props;

    const searchColor = (hasFocus ? '#120E18' : 'rgba(255,255,255, .1)');
    const noResults = (!hasSuggestions && hasFocus && !loading && value.length > 2);

    return (
      <InputWrap hasFocus={hasFocus}>
        {loading && <LoadingIcon icon={faSpinner} spin />}
        <SearchIcon icon={faSearch} color={searchColor} />
        <input
          {...inputProps}
          onFocus={(e) => { this.setFocus(e, true); }}
          onBlur={(e) => { this.setFocus(e, false); }}
          onChange={(e) => { this.setSearch(e); }}
          onKeyPress={(e) => { this.checkKey(e); }}
        />

        {noResults && <NoResultsError>No Results Found</NoResultsError>}
      </InputWrap>
    );
  }
}

SearchInput.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  hasSuggestions: PropTypes.bool.isRequired,
  value: PropTypes.string,
};

SearchInput.defaultProps = {
  value: '',
};

export default withRouter(SearchInput);
