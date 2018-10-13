import React from 'react';
import gql from 'graphql-tag';
import Slider from 'react-slick';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

const RECENTLY_ADDED = gql`
  {
    recentlyAdded {
      ...on Movie {
        type: __typename
        uuid
        name
        posterPath
        playState {
          finished
          playtime
        }
      }
      ...on Episode {
        type: __typename
        uuid
        name
        airDate
        season {
          series {
            posterPath
          }
        }
        
        playState {
          finished
          playtime
        }
      }
    }
  }
`;

const RecentlyAddedSeriesSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Query
      query={RECENTLY_ADDED}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error.message}`;

        const RecentlyAdded = data.recentlyAdded.map((ra) => {
          const posterPath = ra.posterPath || ra.season.series.posterPath;
          return <MediaCard key={ra.uuid} {...ra} posterPath={posterPath} />;
        });

        return (
          <Slider {...sliderSettings}>
            { RecentlyAdded }
          </Slider>
        );
      }}
    </Query>
  );
};

export default RecentlyAddedSeriesSlider;
