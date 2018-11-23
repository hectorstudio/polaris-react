const videoElement = document.createElement('video');

const canPlayCodec = (codec) => {
  // Chrome says it can play MP3 but it doesn't actually seem to work. Transcoding audio is cheap,
  // so just do that.
  // TODO(Leon Handreke): Debug this in more detail and find/file a bug, because really this should
  //  work.
  if (codec === 'mp3') { return false; }

  const response = videoElement.canPlayType(`video/mp4; codecs=${codec}`);
  return response === 'probably';
};

export default canPlayCodec;
