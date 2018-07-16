import React from 'react'

const getSuggestionValue = suggestion => suggestion.name;
const getSectionSuggestions = section => section.suggestions;


const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

const renderSectionTitle = section => (
    <strong>{section.title}</strong>
);

const updateSuggestions = arr => {
    let updatedSuggestions = [
        {
            title: 'Movies',
            suggestions: []
        },
        {
            title: 'Series',
            suggestions: []
        }
    ];

    arr.forEach((sug) => {
        if (sug.__typename === 'Movie' && updatedSuggestions[0].suggestions.length <= 4) {
            updatedSuggestions[0].suggestions.push(sug);
        } else if (updatedSuggestions[1].suggestions.length <= 4) {
            updatedSuggestions[1].suggestions.push(sug);
        }
    });

    return updatedSuggestions
}

export {
    getSuggestionValue,
    getSectionSuggestions,
    renderSuggestion,
    updateSuggestions,
    renderSectionTitle
}


