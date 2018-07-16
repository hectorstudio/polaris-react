import React from 'react'

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
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
        if(sug.__typename === 'Movie') {
            updatedSuggestions[0].suggestions.push(sug);
        } else {
            updatedSuggestions[1].suggestions.push(sug);
        }
    });

    return updatedSuggestions
}

export {
    getSuggestionValue,
    renderSuggestion,
    updateSuggestions
}


