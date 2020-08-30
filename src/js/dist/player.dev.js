"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("./data.js"));

var _utils = require("./utils.js");

var _playerElements = _interopRequireDefault(require("./playerElements.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  audioData: _data["default"],
  currentAudio: {},
  currentPlaying: 0,
  isPlaying: false,
  start: function start() {
    _playerElements["default"].get.call(this);

    this.update();
    this.volumeControl.value = 100;
  },
  play: function play() {
    this.isPlaying = true;
    this.audio.play();
    this.playPause.innerText = "pause";
  },
  pause: function pause() {
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.innerText = "play_arrow";
  },
  togglePlayPause: function togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  next: function next() {
    ++this.currentPlaying;

    if (this.currentPlaying === this.audioData.length) {
      this.currentPlaying = 0;
    }

    this.pause();
    this.update();
    this.play();
  },
  back: function back() {
    --this.currentPlaying;

    if (this.currentPlaying === -1) {
      this.currentPlaying = this.audioData.length - 1;
    }

    this.pause();
    this.update();
    this.play();
  },
  toggleMute: function toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.volume.innerHTML = this.audio.muted ? "volume_mute" : "volume_up";
  },
  setVolume: function setVolume(value) {
    this.audio.volume = value / 100;
  },
  setSeekbar: function setSeekbar(value) {
    this.audio.currentTime = value;
  },
  timeUpdate: function timeUpdate() {
    this.currentDuration.innerText = (0, _utils.secondsToMinutes)(this.audio.currentTime);
    this.seekbar.value = this.audio.currentTime;
  },
  update: function update() {
    var _this = this;

    this.currentAudio = this.audioData[this.currentPlaying];
    this.cover.style.background = "url('".concat(this.currentAudio.cover, "') no-repeat center center / cover");
    this.title.innerHTML = this.currentAudio.title;
    this.artist.innerHTML = this.currentAudio.artist;

    _playerElements["default"].createAudioElement.call(this, this.currentAudio.file);

    this.audio.onloadeddata = function () {
      _playerElements["default"].actions.call(_this);
    };
  }
};
exports["default"] = _default;