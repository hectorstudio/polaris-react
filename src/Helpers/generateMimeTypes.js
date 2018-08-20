const videoElement = document.createElement('video');

const isCodecCompatible = (codec) => {
  const response = videoElement.canPlayType(`video/mp4; codecs=${codec}`);
  return response === 'probably';
};

/**
 * Generates a list of codec query parameters required to send
 * to the stream server to allow playback
 * @param {Array} streams List of streams
 * @return {String} Query Parameters to append to stream url
 */
const generateMimeTypes = (streams) => {
  const static_codecs = ['mp4a.40.2', 'avc1.64001e', 'avc1.64001f', 'avc1.640028'];


  const server_codecs = [];

  streams.forEach((s) => {
    if (s.stream_type === 'subtitle') return;
    server_codecs.push(s.codec_mime);
  });

  const codecs = [...static_codecs, ...server_codecs];
  const playableCodecs = codecs.filter(isCodecCompatible);
  const queryParams = playableCodecs
    .map(c => `playableCodecs=${encodeURIComponent(c)}`)
    .join('&');

  return queryParams;
};

export default generateMimeTypes;
