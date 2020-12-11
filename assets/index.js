import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector("video")
const playPauseButton = document.querySelector("#play_pause")
const muteUnmuteButton = document.querySelector("#mute_unmute")

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] })
playPauseButton.onclick = () => player.togglePlay();
muteUnmuteButton.onclick = () => player.toggleMute();
