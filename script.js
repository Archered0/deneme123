// 🎵 Müziği Butonla Başlat
document.getElementById("playMusic").addEventListener("click", function() {
    var music = document.getElementById("music");
    
    if (music.paused) {
        music.play();
        this.textContent = "Müziği Durdur ⏸";
    } else {
        music.pause();
        this.textContent = "Müziği Başlat 🎶";
    }
});
