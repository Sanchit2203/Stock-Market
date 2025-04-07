const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

const songs = [
    {
        title: 'Lag Ja Gale',
        artist: 'Lata Mangeshkar',
        src: 'Song1.mp3'
    },
    {
        title: 'Tu Kitni Acchhi hai',
        artist: 'Lata Mangeshkar',
        src: 'song2.mp3'
    },
    {
        title: 'Tu Hai To Mujha Fir Or Kaya Chahiya',
        artist: 'Arijit Singh',
        src: 'song3.mp3'
    }
];

let songIndex = 0;

function loadSong(song) {
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgressBar() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.textContent === 'Pause';
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgressBar);

loadSong(songs[songIndex]);
