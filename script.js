const playMusicBtn = document.getElementById('playMusicBtn');
const themeSong = document.getElementById('themeSong');

playMusicBtn.addEventListener('click', () => {
    if (themeSong.paused) {
        themeSong.play();
        playMusicBtn.innerHTML = "&#9208; Music";
    } else {
        themeSong.pause();
        playMusicBtn.innerHTML = "&#9654; Music";
    }
});