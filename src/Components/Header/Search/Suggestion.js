import React from 'react'
import { getBaseUrl } from 'Helpers'

import {
    Title,
    Suggestion,
    Poster,
    Name,
    Year
} from './Styles'

const getSuggestionValue = suggestion => suggestion.name;
const getSectionSuggestions = section => section.suggestions;

const renderSuggestion = suggestion => {
    let year = (suggestion.__typename === 'Movie' ? suggestion.year : suggestion.first_air_date);

    return (
        <Suggestion to="/movies">
            <Poster src={`${getBaseUrl()}/m/images/tmdb/w342/${suggestion.poster_path}`} alt={suggestion.name} />
            <Name>{suggestion.name}</Name>
            <Year>{year}</Year>
        </Suggestion>
    )
}

const renderSectionTitle = (section) => (
    <Title>{section.title}</Title>
)

export {
    getSuggestionValue,
    getSectionSuggestions,
    renderSuggestion,
    renderSectionTitle
} 