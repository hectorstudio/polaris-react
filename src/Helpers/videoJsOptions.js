let videoJsOptions = (source, title) => {
    return {
        autoplay: true,
        controls: true,
        enableLowInitialPlaylist: true,

        sources: [{
            src: source,
            type: 'application/x-mpegURL',
            name: title
        }]
    }
}

export default videoJsOptions