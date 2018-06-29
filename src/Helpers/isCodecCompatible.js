const videoElement = document.createElement('video');

const isCodecCompatible = (codec) => {
    let response = videoElement.canPlayType("video/mp4; codecs=" + codec)
    return response === "probably"
}

export default isCodecCompatible