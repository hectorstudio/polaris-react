import React, { Component } from 'react'
import videojs from 'video.js'
import chromecast from '@silvermine/videojs-chromecast'

export default class Video extends Component {
    componentDidMount() {
      videojs.registerPlugin('chromecast', chromecast);
      
      this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this);
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
