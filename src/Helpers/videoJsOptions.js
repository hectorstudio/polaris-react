let videoJsOptions = (source, title) => {
    return {
        autoplay: true,
        controls: true,
        enableLowInitialPlaylist: true,
        
        sources: [{
            src: source,
            type: 'application/x-mpegURL',
            name: title,
            overrideNative: true,
            withCredentials: true
        }]
    }
}

export default videoJsOptions