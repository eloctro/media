// const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const togBtn = document.querySelector(".toggle-Btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let playNum = 0;
const playList = [
  "./assets/audio/Rammstein - Du hast.mp3",
  "./assets/audio/Scatman John – Scatman (Ski-Ba-Bop-Ba-Dop-Bop).mp3",
  "./assets/audio/01-odinokiy-pastu-01-odinokiy-pastuh.mp3",
];

const audio = new Audio();
let isPlay = false;
audio.src = playList[playNum];

function playAudio() {
  if (!isPlay) {
    audio.currntTime = 0;
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
    audio.currntTime = 0;
    audio.play();
    isPlay = true;
    togBtn.classList.add("pause");
  } else {
    pauseAudio();
    togBtn.classList.remove("pause");
  }
}

function playNext() {
  playNum++;
  if (playNum > playList.length - 1) {
    playNum = 0;
  }
  audio.src = playList[playNum];
  audio.currntTime = 0;
  pauseAudio();
  playAudio();
}

function playPrev() {
  playNum--;
  if (playNum < 0) {
    playNum = playList.length - 1;
  }
  audio.src = playList[playNum];
  audio.currntTime = 0;
  pauseAudio();
  playAudio();
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
togBtn.addEventListener("click", toggleBtn);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);
