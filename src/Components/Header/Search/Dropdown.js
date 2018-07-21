import React from 'react'
import { getBaseUrl } from 'Helpers'

import {
    DropdownWrap,
    ErrorAlert,
    Results,
    Title,
    Suggestion,
    SuggestionPoster
} from './Styles'

const getSuggestionValue = suggestion => suggestion.name;
const getSectionSuggestions = section => section.suggestions;

const Dropdown = ({ containerProps, children, value, results, loading, hasFocus }) => {
    return (
        <DropdownWrap {...containerProps} hasSearch={value.length > 2}>
            {!loading && hasFocus &&
                <Results>
                {!results && <ErrorAlert hasResults={!results}>No Results For: {value}</ErrorAlert>}
                    {children}
                </Results>
            }
        </DropdownWrap>
    );
}

const renderSuggestion = suggestion => {
    let year = (suggestion.__typename === 'Movie' ? suggestion.year : suggestion.first_air_date);
    console.log(suggestion);
    return (
        <Suggestion>
            <SuggestionPoster src={`${getBaseUrl()}/m/images/tmdb/w342/${suggestion.poster_path}`} alt={suggestion.name} />
            { suggestion.name }
            { year }
        </Suggestion>
    )
}

const renderSectionTitle = section => (
    <Title>{section.title}</Title>
);


export {
    Dropdown,
    getSuggestionValue,
    getSectionSuggestions,
    renderSuggestion,
    renderSectionTitle
} 