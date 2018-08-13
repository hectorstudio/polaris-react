import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import Autosuggest from 'react-autosuggest'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom';

import FETCH_SUGGESTIONS from 'Queries/fetchSuggestions'

import SearchInput from './SearchInput'
import { 
    getSuggestionValue,
    getSectionSuggestions,
    renderSuggestion,
    renderSectionTitle
} from './Suggestion'

import { updateSuggestions, generateMediaUrl } from 'Helpers'

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            loading: false,
            hasFocus: false,
            isUnmounting: false
        };

        this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 500);
    }

    onChange = (event, {newValue}) => {
        this.setState({ value: newValue }, () => {
            this.props.updateSearch(this.state.value);
        });
    }

    toggleFocus = (hasFocus) => {
        this.setState({ hasFocus });
    }

    loadSuggestions = () => {
        let suggest = (typeof this.props.data === 'undefined' ? [] : this.props.data.search);

        this.setState({ 
            suggestions: (typeof this.props.data === 'undefined' ? [] : updateSuggestions(suggest)),
            loading: false
        });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        if(!this.state.isUnmounting) {
            this.debouncedLoadSuggestions(value);
            this.setState({loading: true});
        }
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    shouldRenderSuggestions = () => {
        return this.state.value.trim().length > 1;
    }
    
    onSuggestionSelected = (event, {suggestion}) => {
        this.props.history.push(generateMediaUrl(suggestion.__typename, suggestion.uuid, suggestion.name));
    }

    unmountComponent = () => {
        this.setState({
            isUnmounting: true
        })
    }

    render() {
        const { value, suggestions, loading } = this.state;
        let checkSuggestions = (typeof suggestions === 'undefined' ? [] : suggestions);

        const inputProps = {
            placeholder: 'Search...',
            value,
            onChange: this.onChange
        };  

        const renderInputComponent = inputProps => (
            <SearchInput 
                inputProps={inputProps} 
                loading={loading} 
                toggleFocus={this.toggleFocus}
                hasSuggestions={(suggestions.length > 0)}
                value={value}
                unmount={this.unmountComponent}
            />
        );

        return (
            <Autosuggest
                multiSection={true}
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

export default Search = withRouter(graphql(FETCH_SUGGESTIONS, {
    skip: props => (props.value.trim().length > 2 ? false : true ),
    options: (props) => ({ variables: { name: props.value } })
})(Search));
