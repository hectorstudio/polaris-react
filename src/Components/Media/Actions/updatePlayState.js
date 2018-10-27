import FETCH_EPISODE from 'Queries/fetchEpisode';
import FETCH_MOVIE from 'Queries/fetchMovie';

export const updatePlayStateEpisode = (mutate, uuid, playtime, finished) => {
  mutate({
    variables: { uuid, playtime: (!finished ? playtime : 0), finished },
    update: (store, { data: { createPlayState } }) => {
      const { playState } = createPlayState;
      const data = store.readQuery({ query: FETCH_EPISODE, variables: { uuid } });

      store.writeQuery({
        query: FETCH_EPISODE,
        variables: { uuid },
        data: {
          episode: {
            ...data.episode,
            playState: {
              ...data.episode.playState,
              finished: playState.finished,
              playtime: playState.playtime,
            },
          },
        },
      });
    },
  })
    .catch((err) => {
      console.log(err);
    });
};

export const updatePlayStateMovie = (mutate, uuid, playtime, finished) => {
  mutate({
    variables: { uuid, playtime: (!finished ? playtime : 0), finished },
    update: (store, { data: { createPlayState } }) => {
      const { playState } = createPlayState;
      const data = store.readQuery({ query: FETCH_MOVIE, variables: { uuid } });

      store.writeQuery({
        query: FETCH_MOVIE,
        variables: { uuid },
        data: {
          movies: [{
            ...data.movies[0],
            playState: {
              ...data.movies[0].playState,
              finished: playState.finished,
              playtime: playState.playtime,
            },
          }],
        },
      });
    },
  })
    .catch((err) => {
      console.log(err);
    });
};
