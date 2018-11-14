import React from 'react';

import ContentWrap from 'Containers/ContentWrap';
import RenderRecentMovies from './RenderRecentMovies';
import RenderRecentEpisodes from './RenderRecentEpisodes';
import RenderUpNext from './RenderUpNext';

import { DashboardWrap, CarouselWrap } from './Styles';


const Dashboard = () => (
  <ContentWrap>
    <DashboardWrap>
      <CarouselWrap>
        <h4>Continue Watching</h4>
        <RenderUpNext />
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
  </ContentWrap>
);

export default Dashboard;
