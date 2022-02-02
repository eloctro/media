// const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const audio = new Audio();
let isPlay = false;

function playAudio() {
  if (!isPlay) {
    audio.src = "./assets/audio/01-odinokiy-pastu-01-odinokiy-pastuh.mp3";
    audio.currntTime = 0;
    audio.play();
    isPlay = true;
  } else {
    pauseAudio();
  }
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
