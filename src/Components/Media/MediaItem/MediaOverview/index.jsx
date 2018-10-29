import React, { Fragment } from 'react';

import MediaInfo from './MediaInfo';
import MediaFiles from './MediaFiles';
import MediaSubtitles from './MediaSubtitles';
import MediaAudio from './MediaAudio';
import MediaActions from './MediaActions';

const MediaOverview = (props) => {
  const {
    mediaInfo,
    selectedFile,
    files,
    fileChange,
    playMedia,
    resumeMedia,
  } = props;

  const { type, uuid, playState } = mediaInfo;

  return (
    <Fragment>
      <MediaInfo {...mediaInfo} selectedFile={selectedFile} />
      <MediaFiles files={files} selectedFile={selectedFile} fileChange={fileChange} />
      <MediaSubtitles selectedFile={selectedFile} />
      <MediaAudio selectedFile={selectedFile} />
      <MediaActions
        type={type}
        uuid={uuid}
        playState={playState}
        playMedia={playMedia}
        resumeMedia={resumeMedia}
      />
    </Fragment>
  );
};

export default MediaOverview;
