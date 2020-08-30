"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsToMinutes = secondsToMinutes;

function secondsToMinutes(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  return "".concat(("0" + minutes).slice(-2), ":").concat(("0" + seconds).slice(-2));
}