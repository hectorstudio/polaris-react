/**
 * Compiles All Episodes from Object of Seasons
 * @param series Array of Seasons
 * @return {array} Array with all episodes
 */

const compileEpisodes = (series) => {
  const arr = [];

  series.forEach((season, i) => {
    season.episodes.forEach((episode, i) => {
      arr.push(episode);
    });
  });

  return arr;
};

export default compileEpisodes;
