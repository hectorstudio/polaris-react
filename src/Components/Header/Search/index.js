import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import Autosuggest from 'react-autosuggest'
import { graphql } from 'react-apollo'

import FETCH_SEARCH from 'Queries/fetchSearch'

import SearchInput from './SearchInput'
import { 
    getSuggestionValue,
    getSectionSuggestions,
    renderSuggestion,
    renderSectionTitle
} from './Dropdown'

import { updateSuggestions } from 'Helpers'

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            loading: false,
            hasFocus: false
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
        this.debouncedLoadSuggestions(value);
        this.setState({loading: true});
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
        console.log(suggestion);
    }

    render() {
        const { value, suggestions, loading } = this.state;

        const inputProps = {
            placeholder: 'Search...',
            value,
            onChange: this.onChange
        };  
        
        const renderInputComponent = inputProps => (
            <SearchInput inputProps={inputProps} loading={loading} toggleFocus={this.toggleFocus}/>
        );

        return (
            <Autosuggest
                multiSection={true}
                suggestions={suggestions}
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

export default Search = graphql(FETCH_SEARCH, {
    skip: props => (props.value.trim().length > 2 ? false : true ),
    options: (props) => ({ variables: { name: props.value } })
})(Search);


