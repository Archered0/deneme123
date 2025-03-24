// Müziği Butonla Başlat
document.getElementById("playMusic").addEventListener("click", function() {
    document.getElementById("music").play();
});

// Sayfa Yavaşça Açılma Efekti
window.onload = function() {
    setTimeout(() => {
        document.getElementById("content").classList.remove("hidden");
    }, 1000);
};
