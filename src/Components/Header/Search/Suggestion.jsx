import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from 'Helpers';

import {
  Suggestion,
  Poster,
  Name,
  Year,
} from './Styles';

const renderSuggestion = (suggestion) => {
  const year = (suggestion.typename === 'Movie' ? suggestion.year : suggestion.first_air_date);

  return (
    <Suggestion to="/movies">
      <Poster src={`${getBaseUrl()}/m/images/tmdb/w342/${suggestion.poster_path}`} alt={suggestion.name} />
      <Name>{suggestion.name}</Name>
      { year
        && <Year>{year}</Year>
      }
    </Suggestion>
  );
};

renderSuggestion.propTypes = {
  suggestion: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string,
    first_air_date: PropTypes.string,
  }).isRequired,
};

export default renderSuggestion;
