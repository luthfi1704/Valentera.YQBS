// [File: script.js]
// Skrip ini hanya digunakan oleh index.html

document.addEventListener("DOMContentLoaded", function() {
    
    // Cari tombol dengan class .cta-button di index.html
    const myButton = document.querySelector(".cta-button");

    // Tambahkan event listener 'click'
    myButton.addEventListener("click", function() {
        
        // Mengarahkan pengguna ke halaman perjalanan.html
        window.location.href = "perjalanan.html";

    });

});