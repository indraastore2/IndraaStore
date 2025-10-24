// ===================================
// FUNGSIONALITAS JAVASCRIPT POP-UP
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const promoPopup = document.getElementById('promoPopup');
    const popupCloseBtn = document.querySelector('.popup-close-btn');

    function showPopup() {
        if (promoPopup) {
            promoPopup.style.display = 'flex';
            // Memberi jeda kecil agar transisi opacity berjalan setelah display diatur
            setTimeout(() => {
                promoPopup.style.opacity = '1';
            }, 10);
        }
    }
    
    function hidePopup() {
        if (promoPopup) {
            promoPopup.style.opacity = '0';
            // Menyembunyikan elemen setelah transisi selesai (300ms)
            setTimeout(() => {
                promoPopup.style.display = 'none';
            }, 300); 
        }
    }

    // 1. Event listener untuk tombol close (X)
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', hidePopup);
    }
    
    // 2. Event listener untuk menutup pop-up ketika mengklik area luar (gelap)
    if (promoPopup) {
        promoPopup.addEventListener('click', (e) => {
            if (e.target === promoPopup) {
                hidePopup();
            }
        });
    }

    // 3. Tampilkan pop-up saat halaman selesai dimuat (jeda 1 detik)
    setTimeout(showPopup, 1000);
});