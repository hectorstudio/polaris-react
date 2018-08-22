import React, { Component } from 'react'
import videojs from 'video.js'
require('@silvermine/videojs-chromecast')(videojs);

export default class Video extends Component {
    componentDidMount() {
      this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        this.chromecast()
      });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video-js"></video>
                </div>
            </div>
        )
    }
}
