const musicContainer = document.querySelector(".music-container")
const playBtn = document.querySelector("#play")
const audio = document.querySelector("#audio")

const songs = ['samuel']

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
    audio.src = `music/${song}.mp3`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

// event listeners:
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})