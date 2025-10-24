document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Elemen dan Data Pop-up ---
    const promoPopup = document.getElementById('promoPopup');
    const promoContent = promoPopup.querySelector('.promo-popup-content');
    
    // DATA GAMBAR PROMO - PASTIKAN NAMA FILE SUDAH SESUAI
    const promoImages = [
        { src: "PROMO DRACO EVENT.jpg", alt: "Promo Draco Event Blox Fruits" },
        { src: "PROMO V4.jpg", alt: "Promo V4 Blox Fruits" }
    ];
    
    // Ambil tombol tutup dari markup awal
    const closeBtnHTML = promoContent.querySelector('.popup-close-btn').outerHTML;

    // Membuat HTML untuk kedua gambar dalam satu tampilan (menggunakan class 'promo-item')
    let imagesHTML = promoImages.map(img => 
        `<div class="promo-item"><img src="${img.src}" alt="${img.alt}"></div>`
    ).join('');
    
    // Membangun ulang konten pop-up dengan container 'promo-grid'
    promoContent.innerHTML = `
        ${closeBtnHTML}
        <div class="promo-grid">${imagesHTML}</div>
    `;

    // Ambil ulang elemen tombol tutup yang baru
    const newCloseBtn = promoContent.querySelector('.popup-close-btn');

    // --- 2. Fungsi Pop-up (Instan, Tanpa Transisi) ---

    function openPopup() {
        // TAMPIL MENDADAK
        promoPopup.style.display = 'block'; 
        promoPopup.classList.add('active'); 
    }

    function closePopup() {
        // HILANG MENDADAK
        promoPopup.classList.remove('active'); 
        promoPopup.style.display = 'none';
    }

    // --- 3. Event Listeners ---

    // Pemicu Pop-up Otomatis setelah 3 detik
    setTimeout(openPopup, 3000); 

    // Tombol Tutup dan Overlay
    newCloseBtn.addEventListener('click', closePopup);
    promoPopup.addEventListener('click', function(event) {
        // Tutup jika mengklik area gelap di luar konten
        if (event.target === promoPopup) {
            closePopup();
        }
    });
});