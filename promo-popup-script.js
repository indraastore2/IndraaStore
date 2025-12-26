document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Elemen dan Data Pop-up ---
    const promoPopup = document.getElementById('promoPopup');
    const promoContent = promoPopup.querySelector('.promo-popup-content');
    
    // DATA GAMBAR PROMO
    const promoImages = [
        { src: "PROMO DRACO EVENT.jpg", alt: "Promo Draco Event Blox Fruits" },
        { src: "PROMO V4.jpg", alt: "Promo V4 Blox Fruits" }
    ];
    
    // Simpan tombol tutup asli
    const closeBtnHTML = `<span class="popup-close-btn" onclick="closePromoPopup()">&times;</span>`;

    // Membuat HTML untuk gambar
    let imagesHTML = promoImages.map(img => 
        `<div class="promo-item"><img src="${img.src}" alt="${img.alt}"></div>`
    ).join('');
    
    // STRUKTUR BARU: Gambar + Jam Hitung Mundur (Disatukan agar tidak terhapus)
    promoContent.innerHTML = `
        ${closeBtnHTML}
        <div class="promo-grid">${imagesHTML}</div>
        <div class="timer-container-new">
            <p class="timer-title">🔥 PROMO BERAKHIR DALAM 🔥</p>
            <div id="countdown-display">
                <span id="days-val">00</span>d : 
                <span id="hours-val">00</span>h : 
                <span id="mins-val">00</span>m : 
                <span id="secs-val">00</span>s
            </div>
        </div>
    `;

    // --- 2. Logika Hitung Mundur ---
    function startTimer() {
        // Tentukan tanggal berakhir (Tahun, Bulan-1, Tanggal, Jam, Menit)
        // Contoh: 31 Desember 2025 jam 23:59
        const targetDate = new Date("December 31, 2025 23:59:59").getTime();

        const updateInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const d = Math.floor(distance / (1000 * 60 * 60 * 24));
                const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("days-val").innerText = d.toString().padStart(2, '0');
                document.getElementById("hours-val").innerText = h.toString().padStart(2, '0');
                document.getElementById("mins-val").innerText = m.toString().padStart(2, '0');
                document.getElementById("secs-val").innerText = s.toString().padStart(2, '0');
            } else {
                clearInterval(updateInterval);
                document.querySelector(".timer-container-new").innerHTML = "PROMO BERAKHIR";
            }
        }, 1000);
    }

    // --- 3. Fungsi Kontrol Pop-up ---
    window.closePromoPopup = function() {
        promoPopup.classList.remove('active');
        promoPopup.style.display = 'none';
    };

    function openPopup() {
        promoPopup.style.display = 'block'; 
        promoPopup.classList.add('active');
        startTimer(); // Mulai timer hanya saat pop-up muncul
    }

    // Munculkan otomatis setelah 3 detik
    setTimeout(openPopup, 3000); 
});