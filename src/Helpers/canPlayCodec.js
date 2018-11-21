const videoElement = document.createElement('video');

const canPlayCodec = (codec) => {
  const response = videoElement.canPlayType(`video/mp4; codecs=${codec}`);
  return response === 'probably';
};

export default canPlayCodec;
