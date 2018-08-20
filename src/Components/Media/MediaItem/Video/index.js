import React from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

const Video = props => (
  <Player>
    <HLSSource
      isVideoChild
      src={props.source}
    />
  </Player>
);

export default Video;
