// script.js

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');

    const songs = [
        { title: "Song 1", artist: "Artist 1", src: "song1.mp3" },
        { title: "Song 2", artist: "Artist 2", src: "song2.mp3" },
        { title: "Song 3", artist: "Artist 3", src: "song3.mp3" }
    ];

    let currentSongIndex = 0;

    function loadSong(song) {
        title.textContent = song.title;
        artist.textContent = song.artist;
        audio.src = song.src;
    }

    function playSong() {
        audio.play();
    }

    function pauseSong() {
        audio.pause();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    // Load the first song initially
    loadSong(songs[currentSongIndex]);

    playBtn.addEventListener('click', playSong);
    pauseBtn.addEventListener('click', pauseSong);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
});
