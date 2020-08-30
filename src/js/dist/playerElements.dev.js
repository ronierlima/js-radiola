"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils.js");

var _default = {
  get: function get() {
    this.cover = document.querySelector(".card-image");
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
    this.playPause = document.querySelector("#play-pause");
    this.nextTrack = document.querySelector("#next-track");
    this.previousTrack = document.querySelector("#previous-track");
    this.volume = document.querySelector("#volume-icon");
    this.volumeControl = document.querySelector("#volume-control");
    this.seekbar = document.querySelector("#seekbar");
    this.currentDuration = document.querySelector("#current-duration");
    this.totalDuration = document.querySelector("#total-duration");
  },
  createAudioElement: function createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions: function actions() {
    var _this = this;

    this.playPause.onclick = function () {
      return _this.togglePlayPause();
    };

    this.audio.onended = function () {
      return _this.next();
    };

    this.volume.onclick = function () {
      return _this.toggleMute();
    };

    this.volumeControl.oninput = function () {
      return _this.setVolume(_this.volumeControl.value);
    };

    this.volumeControl.onchange = function () {
      return _this.setVolume(_this.volumeControl.value);
    };

    this.seekbar.oninput = function () {
      return _this.setSeekbar(_this.seekbar.value);
    };

    this.seekbar.onchange = function () {
      return _this.setSeekbar(_this.seekbar.value);
    };

    this.seekbar.max = this.audio.duration;
    this.totalDuration.innerText = (0, _utils.secondsToMinutes)(this.audio.duration);

    this.audio.ontimeupdate = function () {
      return _this.timeUpdate();
    };

    this.nextTrack.onclick = function () {
      return _this.next();
    };

    this.previousTrack.onclick = function () {
      return _this.back();
    };
  }
};
exports["default"] = _default;