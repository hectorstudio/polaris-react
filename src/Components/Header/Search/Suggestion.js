import React from 'react'

const Suggestion = suggestion => {
    console.log(suggestion);
    
    return (
        <div>
            {suggestion.name}
        </div>
    );
}

export default Suggestion;