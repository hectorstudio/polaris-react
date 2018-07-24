const updateSuggestions = arr => {
    if (arr === undefined || arr.length === 0) return arr

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

    // Remove Uneeded Object(s)
    if (updatedSuggestions[0].suggestions.length === 0) updatedSuggestions.shift();
    if (updatedSuggestions[1].suggestions.length === 0) updatedSuggestions.pop();

    return updatedSuggestions
}

export default updateSuggestions