import videojs from 'video.js';

import React from 'react';
import ReactDOM from 'react-dom'

import BoxMaker from './box.js';
import MediaPropertiesItem from './media-properties-item.js';

import 'videojs-overlay'

const Box = BoxMaker(MediaPropertiesItem);

const  MediaProperties = [
  {
    name: "error",
    updater: "error"
  }, {
    name: "src"
  }, {
    name: "currentSrc"
  }, {
    name: "crossOrigin",
    getter(player) {
      return player.tech_.el_.crossorigin;
    }
  }, {
    name: "networkState",
    updater: ""
  }, {
    name: "preload"
  }, {
    name: "buffered",
    updater: "progress"
  }, {
    name: "readyState",
    updater: ""
  }, {
    name: "seeking",
    updater: ""
  }, {
    name: "currentTime",
    updater: "timeupdate"
  }, {
    name: "duration",
    updater: "durationchange"
  }, {
    name: "paused",
    updater: ["pause", "play", "playing"]
  }, {
    name: "defaultPlaybackRate",
    getter(player) {
      return player.tech_.el_.defaultPlaybackRate;
    }
  }, {
    name: "playbackRate",
    updater: "ratechange"
  }, {
    name: "played",
    getter(player) {
      return player.tech_.el_.played;
    },
    updater: "timeupdate"
  }, {
    name: "seekable",
    updater: "progress"
  }, {
    name: "ended",
    updater: ["ended", "play"]
  }, {
    name: "autoplay"
  }, {
    name: "loop"
  }, {
    name: "controls"
  }, {
    name: "volume",
    updater: "volumechange"
  }, {
    name: "muted",
    updater: "volumechange"
  }, {
    name: "audioTracks",
    getter(player) {
      const at = player.audioTracks && player.audioTracks();
      return {length: at ? at.length : 0};
    }
  }, {
    name: "videoTracks",
    getter(player) {
      const vt = player.videoTracks && player.videoTracks();
      return {length: vt ? vt.length : 0};
    }
  }, {
    name: "textTracks",
    getter(player) {
      const tt = player.textTracks();
      return {length: tt ? tt.length : 0};
    }
  }, {
    name: "width",
    updater: "resize"
  }, {
    name: "height",
    updater: "resize"
  }, {
  }, {
    name: "currentWidth",
    updater: "resize"
  }, {
    name: "currentHeight",
    updater: "resize"
  }, {
    name: "videoWidth",
    updater: "progress",
  }, {
    name: "videoHeight",
    updater: "progress",
  }, {
    name: "poster",
  }, {
    name: "readyState",
    updater: "loadeddaata"
  }
];

const VjsButton = videojs.getComponent('Button');

class ShowDebugOverlayButton extends VjsButton {
  constructor(player, options = {}) {
    super(player, options);

    this.controlText("Debug");
    this.showingDebugOverlay_ = false;
  }

  createEl() {
    let el = super.createEl();
    el.appendChild(document.createTextNode("DEBUG"));
    return el;
  }

  handleClick() {
    if (this.showingDebugOverlay_) {
      this.disposeDebugOverlay();
    } else {
      this.showDebugOverlay();
    }

    this.showingDebugOverlay_ = !this.showingDebugOverlay_;
  }

  disposeDebugOverlay() {
    this.player_.overlay();
  }

  showDebugOverlay() {
    let fragment = document.createDocumentFragment();
    ReactDOM.render(
      <Box name="Property" value="Current Value" data={MediaProperties} player={this.player_}/>,
      fragment);
    this.player_.overlay({
      content: fragment
    });
    // NOTE: This is an ugly hack because otherwise the overlay will only show after firing
    // the next play event, i.e. after a pause-play cycle.
    this.player_.overlays_.forEach(o => o.show());
  }
}
videojs.registerComponent('ShowDebugOverlayButton', ShowDebugOverlayButton)

const debugOverlayPlugin = function(options) {
  this.ready(() => {
    this.controlBar.addChild('ShowDebugOverlayButton');
  })
};

videojs.registerPlugin('debugOverlay', debugOverlayPlugin);

export default debugOverlayPlugin