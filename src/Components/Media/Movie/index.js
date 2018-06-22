import React, { Component } from 'react'

import Video from './Video'

class Movie extends Component {
    render() {
        const { title } = this.props;

        let url = 'http://d31r5.bysh.me:9090/s/local',
            file = '/movies/Mad.Max.Fury.Road.(2015).1080p.BluRay.DD5.1.x264-VietHD/Mad.Max.Fury.Road.(2015).1080p.BluRay.DD5.1.x264-VietHD.mkv',
            manifest = "/hls-manifest.m3u8?playableCodecs=avc1.640029&playableCodecs=mp4a.40.2&playableCodecs=avc1.64001e&playableCodecs=avc1.64001f&playableCodecs=avc1.640028";

        const videoJsOptions = {
            autoplay: true,
            controls: true,
            enableLowInitialPlaylist: true,

            sources: [{
                src: url+file+manifest,
                type: 'application/x-mpegURL',
                name: title
            }]
        }

        return (
            <article>
                <h1>{title}</h1>
                <Video {...videoJsOptions} />
            </article>
        )
    }
}

export default Movie