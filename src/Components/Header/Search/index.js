import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import Autosuggest from 'react-autosuggest'
import { graphql } from 'react-apollo'

import FETCH_SEARCH from 'Queries/fetchSearch'

import SearchInput from './SearchInput'

import { 
    getSuggestionValue, 
    renderSuggestion, 
    updateSuggestions, 
    renderSectionTitle, 
    getSectionSuggestions 
} from './Helpers'

const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
        <div {...containerProps}>
            {children}
        </div>
    );
}

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            loading: false
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

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Search...',
            value,
            onChange: this.onChange
        };
        
        const renderInputComponent = inputProps => {
            return <SearchInput inputProps={inputProps} loading={this.state.loading} />;
        };

        return (
            <Autosuggest
                multiSection={true}
                suggestions={suggestions}
                renderInputComponent={renderInputComponent}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestionsContainer={renderSuggestionsContainer}
                renderSuggestion={renderSuggestion}
                shouldRenderSuggestions={this.shouldRenderSuggestions}
                renderSectionTitle={renderSectionTitle}
                getSectionSuggestions={getSectionSuggestions}
                inputProps={inputProps}
            />
        );
    }
}

export default Search = graphql(FETCH_SEARCH, {
    skip: props => (props.value.trim().length > 2 ? false : true ),
    options: (props) => ({ variables: { name: props.value } })
})(Search);


