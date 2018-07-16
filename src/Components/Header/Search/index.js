import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import Autosuggest from 'react-autosuggest'
import { graphql } from 'react-apollo'

import FETCH_SEARCH from 'Queries/fetchSearch'

import { getSuggestionValue, renderSuggestion, updateSuggestions } from './Helpers'

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };

        this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 500);
    }

    debounce = () => {
        return 300 + Math.random() * 1000;
    }

    onChange = (event, {newValue}) => {

        this.setState({ value: newValue }, () => {
            this.props.updateSearch(this.state.value);
        });
    }

    loadSuggestions = () => {
        let suggest = (typeof this.props.data === 'undefined' ? [] : this.props.data.search);

        updateSuggestions(suggest);

        this.setState({
            suggestions: (typeof this.props.data === 'undefined' ? [] : this.props.data.search)
        });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.debouncedLoadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    shouldRenderSuggestions = () => {
        return this.state.value.trim().length > 1;
    }

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Search...',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                shouldRenderSuggestions={this.shouldRenderSuggestions}
                inputProps={inputProps}
            />
        );
    }
}

export default Search = graphql(FETCH_SEARCH, {
    skip: props => (props.value.trim().length > 2 ? false : true ),
    options: (props) => ({ variables: { name: props.value } })
})(Search);


