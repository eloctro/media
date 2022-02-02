// const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const togBtn = document.querySelector(".toggleBtn");

const audio = new Audio();
let isPlay = false;
audio.src = "./assets/audio/01-odinokiy-pastu-01-odinokiy-pastuh.mp3";

function playAudio() {
  if (!isPlay) {
    console.log(audio.currentTime);
    audio.currntTime = 0;
    console.log(audio.currentTime);
    audio.play();
    isPlay = true;
    togBtn.classList.add("pause");
  } else {
    pauseAudio();
    togBtn.classList.remove("pause");
  }
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  togBtn.classList.remove("pause");
}

function toggleBtn() {
  if (!isPlay) {
    console.log(audio.currentTime);
    audio.currntTime = 0;
    console.log(audio.currentTime);
    audio.play();
    isPlay = true;
    togBtn.classList.add("pause");
  } else {
    pauseAudio();
    togBtn.classList.remove("pause");
  }
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
togBtn.addEventListener("click", toggleBtn);
