// const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");

const audio = new Audio();

function playAudio() {
  audio.src = "./assets/audio/01-odinokiy-pastu-01-odinokiy-pastuh.mp3";
  audio.currntTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
