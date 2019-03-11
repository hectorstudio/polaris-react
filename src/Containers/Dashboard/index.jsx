import React from 'react';

import RenderRecentMovies from './RenderRecentMovies';
import RenderRecentEpisodes from './RenderRecentEpisodes';
import RenderContinueWatching from './RenderContinueWatching';

import { DashboardWrap, CarouselWrap } from './Styles';


const Dashboard = () => (
  <DashboardWrap>
    <CarouselWrap>
      <h4>Continue Watching</h4>
      <RenderContinueWatching />
    </CarouselWrap>
    <CarouselWrap>
      <h4>Recently Added Movies</h4>
      <RenderRecentMovies />
    </CarouselWrap>
    <CarouselWrap>
      <h4>Recently Added TV Series</h4>
      <RenderRecentEpisodes />
    </CarouselWrap>
  </DashboardWrap>
);

export default Dashboard;
