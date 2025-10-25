// Menunggu sampai semua konten halaman (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Pilih elemen yang dibutuhkan
    const searchBar = document.getElementById('searchBar');
    const allCards = document.querySelectorAll('.profile-card');

    // 2. Tambahkan 'event listener' ke kolom pencarian
    // 'keyup' berarti fungsi akan berjalan setiap kali pengguna melepas tombol keyboard
    searchBar.addEventListener('keyup', (e) => {

        // 3. Ambil apa yang diketik pengguna, ubah jadi huruf kecil
        const searchTerm = e.target.value.toLowerCase();

        // 4. Loop (ulangi) untuk setiap kartu profil
        allCards.forEach(card => {

            // 5. Ambil semua teks di dalam satu kartu, ubah jadi huruf kecil
            const cardText = card.textContent.toLowerCase();

            // 6. Logika pencarian:
            // Jika teks di kartu 'mengandung' teks yang dicari...
            if (cardText.includes(searchTerm)) {
                // ...maka tampilkan kartu itu
                card.style.display = 'flex'; // 'flex' karena CSS kita pakai 'display: flex'
            } else {
                // ...jika tidak, sembunyikan kartu itu
                card.style.display = 'none';
            }
        });
    });

});