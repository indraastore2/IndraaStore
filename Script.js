<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INDRAA STORE - Pop Up Promo</title>
    
    <style>
        .store-header {
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 15px 0;
            text-align: center;
            font-family: 'Arial', sans-serif;
            font-size: 2.2em;
            font-weight: bold;
            letter-spacing: 2px;
            border-bottom: 5px solid #e74c3c;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            text-transform: uppercase;
            position: relative;
        }

        .store-header .icon {
            color: #f1c40f;
            margin-right: 10px;
        }

        /* --- CSS Tambahan --- */
        
        /* Gaya untuk Menu Toggle (Pojok Kanan Atas) */
        #menuToggle {
            position: fixed; 
            top: 20px; 
            right: 20px; 
            z-index: 1000;
            background-color: #e74c3c;
            color: white; 
            padding: 10px 15px;
            text-decoration: none;
            font-size: 1.5em;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }
        
        #menuToggle:hover {
            background-color: #c0392b;
            transform: scale(1.05);
        }

        /* Gaya untuk Menu Dropdown */
        #menuDropdown {
            display: none; /* SEMBUNYIKAN SECARA DEFAULT */
            position: fixed;
            top: 75px; 
            right: 20px;
            background-color: #34495e;
            min-width: 200px;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
            z-index: 999;
            border-radius: 5px;
            overflow: hidden;
        }

        #menuDropdown button {
            color: #ecf0f1;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
            transition: background-color 0.2s;
            font-size: 1em;
        }

        #menuDropdown button:hover {
            background-color: #2c3e50;
        }
        
        /* Gaya untuk Navigasi Utama (Pemisah Joki) */
        .main-category-nav {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 25px;
            padding: 10px;
            border-bottom: 3px solid #f1c40f;
        }
        
        .main-category-nav button {
            background-color: #e74c3c;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.2em;
            font-weight: bold;
            transition: background-color 0.3s, transform 0.3s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
            min-width: 250px;
        }
        
        .main-category-nav button:hover {
            background-color: #c0392b;
            transform: translateY(-2px);
        }

        .main-category-nav button.active {
            background-color: #2ecc71;
            border: 3px solid #27ae60;
        }
        
        /* Gaya untuk Navigasi Detail (Kategori Kecil) */
        #detailNav {
            display: none; /* SEMBUNYIKAN SECARA DEFAULT */
            text-align: center;
            padding: 10px 0;
            border-bottom: 2px solid #2ecc71;
            margin-bottom: 20px;
            display: flex; /* Gunakan flex untuk tata letak tombol */
            flex-wrap: wrap; 
            justify-content: center;
        }

        #detailNav button {
            background-color: #2c3e50;
            color: #ecf0f1;
            border: 1px solid #3498db;
            padding: 8px 15px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-size: 0.9em;
        }

        #detailNav button:hover {
            background-color: #3498db;
        }
        
        /* --- CSS Untuk Background Music --- */
        #youtube-bg-player {
            position: absolute;
            top: -9999px; /* Pindahkan jauh dari layar */
            left: -9999px;
            opacity: 0;
            visibility: hidden;
        }

        #musicToggle {
            position: fixed; 
            bottom: 20px; 
            left: 20px; 
            z-index: 2000; 
            padding: 10px; 
            background-color: #f1c40f; 
            border: none; 
            border-radius: 50%; 
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            cursor: pointer;
            font-size: 1.5em;
            transition: transform 0.2s;
        }

        #musicToggle:hover {
            transform: scale(1.1);
        }
        
        /* ======================================= */
        /* --- STYLE MANUAL UNTUK BLOXFRUIT (BIRU) --- */
        /* ======================================= */
        .blox-block {
            margin-bottom: 30px;
            padding: 15px;
            border: 2px solid #3498db; /* Border Biru */
            border-radius: 10px;
            background-color: #f0f8ff; /* Background Biru Muda */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .blox-title {
            font-size: 1.6em;
            font-weight: bold;
            color: #2980b9; /* Judul Biru Tua */
            margin-bottom: 15px;
            border-bottom: 3px solid #3498db;
            padding-bottom: 5px;
        }

        .blox-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 10px;
        }

        .blox-item-btn {
            background-color: #3498db; /* Tombol Biru */
            color: white; 
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .blox-item-btn:hover {
            background-color: #2980b9; /* Biru Lebih Tua saat hover */
            transform: translateY(-1px);
        }

        .blox-price {
            font-weight: bold;
            color: #ffeaa7; /* Harga Kuning Pucat */
            min-width: 80px; 
            text-align: right;
            border-left: 1px solid rgba(255, 255, 255, 0.3);
            padding-left: 10px;
        }

        /* ==================================================== */
        /* --- STYLE MANUAL UNTUK FISH IT & JOKI GAG (HIJAU) --- */
        /* ==================================================== */
        .fishit-block {
            margin-bottom: 30px;
            padding: 15px;
            border: 2px solid #27ae60; /* Border Hijau Tua */
            border-radius: 10px;
            background-color: #e8f5e9; /* Background Hijau Muda */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .fishit-title {
            font-size: 1.6em;
            font-weight: bold;
            color: #2ecc71; /* Judul Hijau */
            margin-bottom: 15px;
            border-bottom: 3px solid #27ae60;
            padding-bottom: 5px;
        }

        .fishit-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 10px;
        }

        .fishit-item-btn {
            background-color: #2ecc71; /* Tombol Hijau */
            color: white; 
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .fishit-item-btn:hover {
            background-color: #27ae60; /* Hijau Lebih Tua saat hover */
            transform: translateY(-1px);
        }
        
        .fishit-item-price-style { 
            font-weight: bold;
            color: yellow; 
            min-width: 80px; 
            text-align: right;
            border-left: 1px solid rgba(255, 255, 255, 0.3);
            padding-left: 10px;
        }
        
        /* ======================================= */
        /* --- STYLE MANUAL UNTUK STOCK BUAH (BARU) --- */
        /* ======================================= */
        .stock-fruit-block {
            margin: 20px 0;
            padding: 20px;
            border: 3px solid #3498db; /* Border Lebih Tebal */
            border-radius: 12px;
            background-color: #ffffff; /* Background Putih */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .stock-fruit-header {
            font-size: 2em; /* Ukuran Lebih Besar */
            font-weight: 900;
            color: #e74c3c; /* Warna Merah Menyala */
            margin-bottom: 15px;
            border-bottom: 4px solid #f1c40f; /* Garis Kuning Tebal */
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .stock-fruit-header .icon {
            margin: 0 10px;
            color: #f1c40f; 
            font-size: 1.2em;
        }

        .stock-fruit-note {
            font-size: 1em;
            color: #34495e;
            text-align: center;
            margin-bottom: 20px;
            background-color: #ecf0f1;
            padding: 10px;
            border-radius: 6px;
        }

        .stock-table {
            width: 100%;
            border-collapse: collapse;
            overflow: hidden;
            border-radius: 8px;
        }

        .stock-table th, .stock-table td {
            padding: 14px 20px; /* Padding Lebih Besar */
            text-align: left;
            border: none;
        }

        .stock-table th {
            background-color: #3498db;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 1.1em;
            border-bottom: 3px solid #f1c40f;
        }
        
        /* Baris ganjil/genap untuk keterbacaan */
        .stock-table tr:nth-child(even) {
            background-color: #f8f8f8;
        }

        .stock-table tr:hover {
            background-color: #e6f7ff; /* Hover Biru Muda */
            cursor: default;
        }

        .stock-name {
            font-weight: 600;
            color: #2c3e50;
        }

        .stock-value {
            font-weight: bold;
            color: #2ecc71; /* Warna hijau untuk stok tersedia */
            text-align: center;
        }

        .stock-price {
            font-weight: bold;
            color: #e74c3c; /* Warna merah untuk harga */
            text-align: right;
        }

        /* Gaya khusus untuk stok 0 (Habis) */
        .stock-table .zero-stock {
            color: #95a5a6 !important; /* Abu-abu */
            text-decoration: line-through;
            font-style: italic;
        }
        
        /* --- CSS Pop-Up Khusus Keranjang Dikosongkan --- */
        /* Anda mungkin memiliki CSS yang lebih kompleks di promo-popup-style.css, 
           namun ini adalah dasar untuk memastikan pop-up bawaan Anda berfungsi */
        .promo-popup-container {
            display: none; /* Default state: hidden */
            position: fixed;
            z-index: 3000; /* Pastikan di atas semua yang lain */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.6); /* Latar belakang gelap */
        }

        .promo-popup-content {
            background-color: #fff;
            margin: 15% auto; /* Jarak dari atas dan tengah horizontal */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; 
            max-width: 400px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: fadeIn 0.3s;
        }

        .popup-close-btn {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .popup-close-btn:hover,
        .popup-close-btn:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
        
        @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
        }
        
        /* --- CSS BARU UNTUK GAMBAR QRIS DI MODAL --- */
        .qris-image {
            width: 100%; /* Lebar penuh modal */
            max-width: 300px; /* Batasan maksimum ukuran QRIS */
            height: auto;
            display: block;
            margin: 15px auto; /* Pusatkan gambar */
            border: 2px solid #ccc;
            border-radius: 5px;
        }
        
        /* --- CSS UNTUK DROPDOWN COMMUNITY (Tambahkan Z-Index Tinggi di sini) --- */
        .dropdown {
            position: relative;
            display: inline-block;
            z-index: 100; /* PENTING: Untuk memastikan tombol dapat diklik */
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #34495e; 
            min-width: 220px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.6);
            z-index: 1001; /* PENTING: Lebih tinggi dari tombol lain dan konten */
            border-radius: 5px;
            overflow: hidden;
            left: 0; 
            top: 100%; 
            margin-top: 5px;
        }

        .dropdown.show .dropdown-content {
            display: block;
        }
    </style>
    
    <link rel="Stylesheet" href="Style.css">
    <link rel="Stylesheet" href="promo-popup-style.css"> 
</head>
<body>
    
    <div id="promoPopup" class="promo-popup-container">
        <div class="promo-popup-content">
            <span class="popup-close-btn" onclick="closePromoPopup()">&times;</span>
            <div id="promoPopupContent">
                </div>
        </div>
    </div>
    
    <header class="store-header">
        <span class="icon">💣</span>INDRAA STORE<span class="icon">💣</span>
    </header>

    <nav class="top-nav">

        <div id="communityMenu" class="dropdown">
            <button class="nav-button" aria-expanded="false" aria-controls="dropdownContent">
                <span class="icon">👥</span> COMMUNITY
            </button>
            <div id="dropdownContent" class="dropdown-content">
                <a href="https://chat.whatsapp.com/L0DOkfoFK8YEdfPMZbZeQK" target="_blank" class="whatsapp-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" style="width: 20px; height: 20px; margin-right: 10px;">
                    WhatsApp Group
                </a>
                <a href="https://discord.gg/3yM2jPgq" target="_blank" class="discord-link">
                    <img src="discord.png" alt="Discord Logo" style="width: 20px; height: 20px; margin-right: 10px;">
                    Discord Server
                </a>
            </div>
        </div>
        <a href="live_stock.html" id="btnLiveStock" class="nav-button">
        <span class="icon">💎</span> BLOXFRUIT LIVE STOCK
        </a>
    </button>
    </nav>
    <section>
       <main class="main-content">


</main> 
    <script src="promo-popup-script.js"></script> 
    
    <script>
        // FUNGSI DASAR POP-UP (MENGGANTIKAN BAGIAN DARI promo-popup-script.js jika hilang)
        const promoPopup = document.getElementById('promoPopup');
        const promoPopupContentDiv = document.getElementById('promoPopupContent');
        const popupCloseBtn = document.querySelector('.popup-close-btn');

        function closePromoPopup() {
            promoPopup.style.display = "none";
        }

        // Listener untuk menutup pop-up ketika mengklik luar area pop-up
        window.onclick = function(event) {
            if (event.target === promoPopup) {
                closePromoPopup();
            }
        }
        // END FUNGSI DASAR POP-UP
    </script>

    </section>

        <section id="BloxFruit_Stock" class="content-section" style="display: none;">
            <h2><span class="icon">💎</span> Blox Fruit Live Stock (Langsung dari Sumber)</h2>
            
            <div class="iframe-container">
                <iframe 
                    src="https://fruityblox.com/stock" 
                    title="Blox Fruit Live Stock Iframe"
                    style="width: 100%; height: 100%; border: 2px solid #e74c3c; border-radius: 10px;"
                    allowfullscreen>
                    Browser Anda tidak mendukung embedding (iframe). Silakan kunjungi <a href="https://fruityblox.com/stock" target="_blank">halaman sumber secara langsung</a>.
                </iframe>
            </div>

            <p class="source-info" style="text-align: center; margin-top: 15px;">
                Halaman ini menampilkan konten langsung dari: <a href="https://fruityblox.com/stock" target="_blank" style="color: #3498db;">fruityblox.com/stock</a>
            </p>
        </section>
    
    <div class="welcome-text">
        <h2>Selamat Datang di Toko Indraa Store</h2>
        <p>Jasa Joki Cepat, Aman & Terpercaya 💪🔥</p>
    </div>

    <div class="main-category-nav">
    <button id="btnBloxFruit" onclick="showCategory('BloxFruit_All')">
        JOKI BLOXFRUIT
    </button>
    <button id="btnStockBuah" onclick="showCategory('BloxFruit_Stock')">
        STOCK FRUIT BF
    </button>
    <button id="btnFishIt" onclick="showCategory('JOKI FISH IT')">
        JOKI FISH IT
    </button>
    <button id="btnJokiGag" onclick="showCategory('JOKI GAG')">
        JOKI GAG
    </button>
</div>
    <nav id="detailNav" style="display: flex;">
        <div class="detail-row">
            <button onclick="showCategory('BloxFruit_All')">Semua BloxFruit</button>
            <button onclick="showCategory('Level')">Level</button>
            <button onclick="showCategory('Mastery')">Mastery</button>
            <button onclick="showCategory('PAKET LEVEL MURAH')">Paket Level Murah</button>
            <button onclick="showCategory('Currency')">Currency</button>
            <button onclick="showCategory('Instinct')">Instinct</button>
            <button onclick="showCategory('Fighting Style')">Fighting Style</button>
            <button onclick="showCategory('Sword')">Sword</button>
            <button onclick="showCategory('Gun')">Gun</button>
            <button onclick="showCategory('Haki Resep')">Haki Resep</button>
            <button onclick="showCategory('Raid')">Raid</button>
            <button onclick="showCategory('Boss Raid')">Boss Raid</button>
            <button onclick="showCategory('Material')">Material</button>
            <button onclick="showCategory('Race')">Race</button>
            <button onclick="showCategory('V4')">V4</button>
            <button onclick="showCategory('Sea Event')">Sea Event</button>
        </div>
        
        <div class="detail-row">
            <button onclick="showCategory('Kitsune Event')">Kitsune Event</button>
            <button onclick="showCategory('Dragon Event')">Dragon Event</button>
            <button onclick="showCategory('Accessories')">Accessories</button>
            <button onclick="showCategory('Promo')">Promo</button>
        </div>
    </nav>
    <div class="main-content">
        <div class="container" id="container">
            <input type="text" id="searchInput" placeholder="🔍 Cari List Joki...">
            <div id="productList"></div>
        </div>

        <div class="cart">
    <h3>🛒 Keranjang Belanja</h3>
    <ul id="cartList"></ul>
    <p id="totalPrice">Total: Rp0</p>

    <div class="payment-methods">
        <button class="payment-btn dana" onclick="showPaymentInfo('DANA')">DANA</button>
        <button class="payment-btn qris" onclick="showPaymentInfo('QRIS')">QRIS</button>
        <button class="payment-btn gopay" onclick="showPaymentInfo('GOPAY')">GOPAY</button>
        <button class="payment-btn seabank" onclick="showPaymentInfo('SEABANK')">SEABANK</button>
    </div>
    <button class="clear" onclick="clearCart()">Kosongkan Keranjang</button>
    
    <button class="clear" onclick="showHistoryPopup()" style="background-color: #2980b9; margin-top: 10px; color: #ecf0f1;">
        📜 Riwayat Pesanan

    </button>

    <a id="waChat" class="whatsapp" href="#" onclick="return handleWaChat(event);" target="_blank">💬Chat via WhatsApp</a>
    
    <p id="cartNote" class="cart-note">Terima kasih sudah berbelanja — Silakan cek detail pesanan dan tekan Chat WhatsApp untuk konfirmasi Admin.</p>
    
    <h2 id="termsTitle">Syarat & Ketentuan</h2>
    <div id="termsContent">
        <p>
            1️⃣ Pesanan yang sudah dibeli tidak dapat dikembalikan kecuali terjadi kesalahan dari pihak toko.<br><br>
            2️⃣ Proses transaksi dilakukan langsung melalui chat WhatsApp Admin Indraa.<br><br>
            3️⃣ Pastikan data pesanan sudah benar sebelum mengonfirmasi.<br><br>
            4️⃣ Harga dapat berubah sewaktu-waktu tanpa pemberitahuan.<br><br>
            5️⃣ INDRAA STORE tidak bertanggung jawab atas kesalahan input pembeli.
        </p>
    </div>
</div>

<div id="paymentModal" class="modal">
    <div class="modal-content">
        <span class="close-btn" onclick="closePaymentModal()">&times;</span>
        <h2 id="paymentTitle"></h2>
        <p>Silakan transfer total pembayaran ke:</p>
        <p id="paymentDetails"></p>
        <p>Setelah transfer, harap konfirmasi via WhatsApp Admin & Kirim Bukti Transfer !!</p>
    </div>
</div>

<div id="historyModal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="close-btn" onclick="closeHistoryPopup()">&times;</span>
        <h2>📜 Riwayat Pesanan</h2>
        <div id="historyContent" style="max-height: 400px; overflow-y: auto; padding: 10px 0;">
            <p id="historyEmpty" style="text-align: center; color: #000000;">Belum ada pesanan yang di order.</p>
            <ul id="historyList" style="list-style-type: none; padding: 0;">
                </ul>
        </div>
    </div>
</div>
<button id="musicToggle" aria-label="Toggle Music">🔇</button> 

<div id="youtube-bg-player" style="position: fixed; bottom: 0; right: 0; z-index: -1;">
    <iframe id="youtube-iframe" width="0" height="0" 
        src="https://www.youtube.com/embed/PTF5xgT-pm8?autoplay=1&loop=1&playlist=PTF5xgT-pm8&controls=0&mute=1&disablekb=1&rel=0" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
</div>
    <script>
        const products = [
            { id: 1, name: "100 Level Sea 1", price: 5000, category: "Level" },
            { id: 2, name: "100 Level Sea 2", price: 10000, category: "Level" },
            { id: 3, name: "100 Level Sea 3", price: 15000, category: "Level" },
            { id: 4, name: "1 - 700", price: 10000, category: "PAKET LEVEL MURAH" },
            { id: 5, name: "700 - 1500", price: 20000, category: "PAKET LEVEL MURAH" },
            { id: 6, name: "1500 - 2800", price: 35000, category: "PAKET LEVEL MURAH" },
            { id: 7, name: "150 Mastery Melee/Sword (0 - 300)", price: 3000, category: "Mastery" },
            { id: 8, name: "100 Mastery Fruit/Gun (0 - 300)", price: 5000, category: "Mastery" },
            { id: 9, name: "150 Mastery Melle/Sword (300 - 600)", price: 5000, category: "Mastery"},
            { id: 10,name: "100 Mastery Fruit/Gun (300 - 600)", price: 10000, category: "Mastery"},
            { id: 11,name: "1M Belly", price: 5000, category: "Currency"},
            { id: 12,name: "1K Fragment (Buah Buyer)", price: 1000, category: "Currency"},
            { id: 13,name: "1K Fragment (Buah Penjoki)", price: 2000, category: "Currency"},
            { id: 14,name: "100M Belly", price: 150000, category: "Currency"},
            { id: 15,name: "100K Fragment", price: 180000, category: "Currency"},
            { id: 16,name: "1000 Instinct", price: 15000, category: "Instinct"},
            { id: 17,name: "Instinct V2", price: 10000, category: "Instinct"},
            { id: 18,name: "Superhuman", price: 25000, category: "Fighting Style"},
            { id: 19,name: "Electric Claw", price: 5000, category: "Fighting Style"},
            { id: 20,name: "Death Step", price: 10000, category: "Fighting Style"},
            { id: 21,name: "Sharkman Karate", price: 10000, category: "Fighting Style"},
            { id: 22,name: "Dragontalon", price: 20000, category: "Fighting Style"},
            { id: 23,name: "God Human", price: 15000, category: "Fighting Style"},
            { id: 24,name: "Sanguine Art", price: 60000, category: "Fighting Style"},
            { id: 25,name: "Dark Dagger", price: 80000, category: "Sword"},
            { id: 26,name: "Hallow Scythe", price: 40000, category: "Sword"},
            { id: 27,name: "V2 Dark Blade", price: 5000, category: "Sword"},
            { id: 28,name: "V3 Dark Blade (Wajib V3 Race Human, Angel, Shark, Rabbit)", price: 50000, category: "Sword"},
            { id: 29,name: "TTK (Wajib Memiliki 2M Belly, Wando, Shisui, Saddi)", price: 20000, category: "Sword"},
            { id: 30,name: "CDK (Wajib Level 2200 Keatas + 10K Jika Yama Dan Tushita Belum 350 Mastery)", price: 20000, category: "Sword"},
            { id: 31,name: "Yama", price: 15000, category: "Sword"},
            { id: 32,name: "Tushita (Wajib Level 2000 Keatas)", price: 15000, category: "Sword"},
            { id: 33,name: "Oroshi (Wajib Memiliki 2M Belly)↘", price: 4000, category: "Sword"},
            { id: 34,name: "Shizu (Wajib Memiliki 2M Belly) --> 10K (Wajib Memiliki 6M Belly)", price: 4000, category: "Sword"},
            { id: 35,name: "Saishi (Wajib Memiliki 2M Belly)↗", price: 4000, category: "Sword"},
            { id: 36,name: "Trident Spikey", price: 20000, category: "Sword"},
            { id: 37,name: "Kabucha", price: 5000, category: "Gun"},
            { id: 38,name: "Acidum Rifle", price: 20000, category: "Gun"},
            { id: 39,name: "Skull Guitar (Wajib Level 2300 Keatas + 15K Jika Material Belum Ada)", price: 15000, category: "Gun"},
            { id: 40,name: "Normal ", price: 2000, category: "Haki Resep"},
            { id: 41,name: "Legend", price: 5000, category: "Haki Resep"},
            { id: 42,name: "Normal Raid 1X (BUAH BUYER)", price: 1000, category: "Raid"},
            { id: 43,name: "Normal Raid + Fruit (FRUIT PENJOKI)", price: 2000, category: "Raid"},
            { id: 44,name: "Advanced Raid 1X (BUAH BUYER)", price: 5000, category: "Raid"},
            { id: 45,name: "Advanced Raid 1X (BUAH PENJOKI)", price: 8000, category: "Raid"},
            { id: 46,name: "Law Raid 1X", price: 5000, category: "Raid"},
            { id: 47,name: "Pirate Raid", price: 10000, category: "Raid"},
            { id: 48,name: "Dough King", price: 20000, category: "Boss Raid"},
            { id: 49,name: "Soul Reaper", price: 15000, category: "Boss Raid"},
            { id: 50,name: "Rip_Indra", price: 15000, category: "Boss Raid"},
            { id: 51,name: "DarkBeard", price: 15000, category: "Boss Raid"},
            { id: 52,name: "Tyrant", price: 10000, category: "Boss Raid"},
            { id: 53,name: "Counjured Cocoa (x2)", price: 1000, category: "Material"},
            { id: 54,name: "Shark Tooth (x2)", price: 1000, category: "Material"},
            { id: 55,name: "Moonstone (x10)", price: 10000, category: "Material"},
            { id: 56,name: "Fire Feather (x10)", price: 10000, category: "Material"},
            { id: 57,name: "Mystic Droplet (x2)", price: 1000, category: "Material"},
            { id: 58,name: "Electric Wing (x2)", price: 1000, category: "Material"},
            { id: 59,name: "Fools Gold (x3)", price: 2000, category: "Material"},
            { id: 60,name: "Blaze Ember (x3)", price: 2000, category: "Material"},
            { id: 61,name: "Volt Capsule (x3)", price: 2000, category: "Material"},
            { id: 62,name: "Mutant Tooth (x1)", price: 3000, category: "Material"},
            { id: 63,name: "Bones (x1000)", price: 10000, category: "Material"},
            { id: 64,name: "Vampire Fang (x10)", price: 10000, category: "Material"},
            { id: 65,name: "Scrap Metal (x10)", price: 10000, category: "Material"},
            { id: 66,name: "Mini Tusk (x10)", price: 10000, category: "Material"},
            { id: 67,name: "Ectoplasm (x100)", price: 3000, category: "Material"},
            { id: 68,name: "Dragon Scale (x5)", price: 5000, category: "Material"},
            { id: 69,name: "Terror Eye (x1)", price: 5000, category: "Material"},
            { id: 70,name: "Leviathan Scales (x10)", price: 30000, category: "Material"},
            { id: 71,name: "Leviathan Heart (x1)", price: 30000, category: "Material"},
            { id: 72,name: "Legend Scroll", price: 30000, category: "Material"},
            { id: 73,name: "Mythical Scroll", price:80000, category: "Material"},
            { id: 74,name: "V2 All Race (Belly Sendiri)", price:3000, category: "Race"},
            { id: 75,name: "V3 Race Not Ghoul (Belly Sendiri)", price:5000, category: "Race"},
            { id: 76,name: "V3 Race Ghoul (Belly Sendiri)", price:15000, category: "Race"},
            { id: 77,name: "Unlock Ghoul", price:15000, category: "Race"},
            { id: 78,name: "Insert FOD Cyborg", price:10000, category: "Race"},
            { id: 79,name: "Unlock Cyborg (Fragment Sendiri + Wajib sudah insert FOD)", price:10000, category: "Race"},
            { id: 80,name: "Pull Lever/Bluegear (Wajib Memiliki Mirror Fractal + Valkyrie Helm)", price:10000, category: "V4"},
            { id: 81,name: "1x Trial (Via Login)", price:7000, category: "V4"},
            { id: 82,name: "1x Trial (Via Gendong)", price:10000, category: "V4"},
            { id: 82,name: "1x Train (Khusus T1-T2)", price:3000, category: "V4"},
            { id: 83,name: "FullGear T5 (9,250 Fragment + Fragment Sendiri)", price:40000, category: "V4"},
            { id: 84,name: "FullGear T10 / TrueGear (26,750 Fragment + Fragment Sendiri)", price:50000, category: "V4"},
            { id: 85,name: "Train T3 -> T5 (6,750 Fragment + Fragment Sendiri)", price:10000, category: "V4"},
            { id: 86,name: "Train T5 -> T10 (17,500 Fragment + Fragment Sendiri)", price:15000, category: "V4"},
            { id: 87,name: "Shark Necklace", price:10000, category: "Sea Event"},
            { id: 88,name: "Terror Jaw", price:10000, category: "Sea Event"},
            { id: 89,name: "Monster Magnet (Wajib Memiliki Shark Necklace & Terror Jaw)", price:20000, category: "Sea Event"},
            { id: 90,name: "Shark Anchor (Wajib Memiliki Monster Magnet)", price:20000, category: "Sea Event"},
            { id: 91,name: "Leviathan Crown", price:70000, category: "Sea Event"},
            { id: 92,name: "Beast Hunter", price:70000, category: "Sea Event"},
            { id: 93,name: "Leviathan Shield", price:80000, category: "Sea Event"},
            { id: 94,name: "Remove CD Bribe", price:5000, category: "Sea Event"},
            { id: 96, name: "Fox Lamp + Bonus", price:40000, category: "Kitsune Event"},
            { id: 97, name: "Azure Ember x25", price:10000, category: "Kitsune Event"},
            { id: 98, name: "1 Belt", price:5000, category: "Dragon Event"},
            { id: 99, name: "6 Belt", price:30000, category: "Dragon Event"},
            { id: 100, name: "Red Belt", price:15000, category: "Dragon Event"},
            { id: 101, name: "Black Belt", price:25000, category: "Dragon Event"},
            { id: 102, name: "Volcano Magnet", price:10000, category: "Dragon Event"},
            { id: 103, name: "1 Dragon Egg", price:20000, category: "Dragon Event"},
            { id: 104, name: "Draco Race", price:100000, category: "Dragon Event"},
            { id: 105, name: "Fire Flower X1", price:5000, category: "Dragon Event"},
            { id: 106, name: "V2 Draco", price:20000, category: "Dragon Event"},
            { id: 107, name: "V3 Draco", price:10000, category: "Dragon Event"},
            { id: 108, name: "DragonHeart Sword", price:30000, category: "Dragon Event"},
            { id: 109, name: "DragonStorm Gun", price:50000, category: "Dragon Event"},
            { id: 110, name: "Freezing Hydra", price:30000, category: "Dragon Event"},
            { id: 111, name: "1X Trial Draco (Tanpa Magnet)", price:25000, category: "Dragon Event"},
            { id: 112, name: "1X Trial Draco (Ada Magnet)", price:20000, category: "Dragon Event"},
            { id: 113, name: "Darkcoat (10X Lawan Darkbeard)", price:100000, category: "Accessories"},
            { id: 114, name: "Pale Scraf (Wajib Sea 3)", price:10000, category: "Accessories"},
            { id: 115, name: "Muskeeter Hat (Wajib Level 1800+)", price:10000, category: "Accessories"},
            { id: 116, name: "Pilot Helmet (Wajib Sea 3)", price:5000, category: "Accessories"},
            { id: 117, name: "1 Dragon Egg", price:10000, category: "Promo"},
            { id: 118, name: "6 Dinosaur Bones ", price:10000, category: "Promo"},
            { id: 119, name: "Black Belt", price:15000, category: "Promo"},
            { id: 120, name: "20 Scrap Metal", price:10000, category: "Promo"},
            { id: 121, name: "30 Blaze Ember", price:10000, category: "Promo"},
            { id: 122, name: "1X Trial Draco (Ada Magnet)", price:15000, category: "Promo"},
            { id: 123, name: "1X Trial Draco (Tanpa Magnet)", price:20000, category: "Promo"},
            { id: 124, name: "Bluegear", price:8000, category: "Promo"},
            { id: 125, name: "Mirror Fractal", price:15000, category: "Promo"},
            { id: 126, name: "Valkyrie Helm", price:10000, category: "Promo"},
            { id: 127, name: "Full Gear T5", price:30000, category: "Promo"},
            { id: 128, name: "Full Gear T10", price:40000, category: "Promo"},
            { id: 129, name: "1X Trial", price: 5000, category: "Promo"},
            // Produk Fish It
            { id: 130, name: "1 Jam", price: 3000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"}, 
            { id: 131, name: "1 Hari", price: 15000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 132, name: "2 Hari", price: 30000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 133, name: "3 Hari", price: 35000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 134, name: "7 Hari", price: 45000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 135, name: "15 Hari", price: 55000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 136, name: "1M", price: 20000, category: "JOKI FISH IT", subCategory: "Jasa Joki Coin"},
            { id: 137, name: "2M", price: 40000, category: "JOKI FISH IT", subCategory: "Jasa Joki Coin"},
            { id: 138, name: "3M", price: 55000, category: "JOKI FISH IT", subCategory: "Jasa Joki Coin"},
            { id: 139, name: "Ghostfin Rod", price: 60000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 140, name: "Angler Rod", price: 45000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 141, name: "Ares Rod", price: 30000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 142, name: "Astral Rod", price: 10000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 143, name: "Bamboo Rod", price: 55000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 144, name: "Element Rod", price: 100000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 145, name: "Aether", price: 25000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 146, name: "Corupt", price: 15000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 147, name: "Dark Matter", price: 10000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 148, name: "Chroma", price: 5000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 150, name: "10 Batu", price: 1000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 151, name: "55 Batu", price: 5000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 152, name: "100 Batu", price: 10000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 153, name: "150 Batu", price: 15000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 154, name: "220 Batu", price: 20000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 155, name: "280 Batu", price: 25000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 156, name: "340 Batu", price: 30000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 157, name: "400 Batu", price: 35000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 158, name: "1 Batu", price: 5000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 159, name: "5 Batu", price: 15000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 160, name: "15 Batu", price: 60000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 161, name: "25 Batu", price: 100000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 162, name: "Artefak Tample", price: 35000, category: "JOKI FISH IT", subCategory: "Jasa Joki Artefak Tample"},
            // Produk Joki GAG
            { id: 163, name: "1 JAM", price: 3000, category: "JOKI GAG", subCategory: "Jasa Joki AFK"},
            { id: 164, name: "2 JAM", price: 5000, category: "JOKI GAG", subCategory: "Jasa Joki AFK"},
            { id: 165, name: "5 JAM", price: 10000, category: "JOKI GAG", subCategory: "Jasa Joki AFK"},
            { id: 166, name: "8 JAM", price: 15000, category: "JOKI GAG", subCategory: "Jasa Joki AFK"},
            { id: 167, name: "12 JAM", price: 25000, category: "JOKI GAG", subCategory: "Jasa Joki AFK"},
            { id: 168, name: "24 JAM", price: 35000, category: "JOKI GAG", subCategory: "Jasa Joki AFK"},
        ]; 

        // --- DATA STOK BUAH BLOX FRUIT (DIPERBARUI) --- 
        const fruitStocks = [
            { name: "Kitsune", stock: 1, price: 45000 },
            { name: "Dragon", stock: 0, price: 130000 },
            { name: "Yeti", stock: 2, price: 30000 },
            { name: "Gas", stock: 2, price: 15000 },
            { name: "Leopard", stock: 0, price: 30000 },
            { name: "Dough", stock: 2, price: 10000 },
            { name: "T-Rex", stock: 3, price: 7000 },
            { name: "Mammoth", stock: 4, price: 5000 },
            { name: "Spirit", stock: 4, price: 5000 },
            { name: "Control", stock: 4, price: 7000 },
            { name: "Shadow", stock: 4, price: 4000 },
            { name: "Venom", stock: 4, price: 5000 },
            { name: "Gravity", stock: 4, price: 10000 },
            { name: "Blizzard", stock: 3, price: 3000 },
            { name: "Pain", stock: 3, price: 15000 },
            { name: "Lightning", stock: 0, price: 12000 }, // Contoh stok habis
            { name: "Portal", stock: 1, price: 5000 },
            { name: "Buddha", stock: 1, price: 5000 },
            { name: "Sound", stock: 5, price: 3000 },
            { name: "Phoenix", stock: 4, price: 1000 },
            { name: "Magma", stock: 4, price: 3000 }
        ];

        let cart = [];
        let currentCategory = 'BloxFruit_All';
        const productList = document.getElementById("productList");
        const cartList = document.getElementById("cartList");
        const totalPrice = document.getElementById("totalPrice");
        const searchInput = document.getElementById("searchInput");
        const waChat = document.getElementById("waChat");
        const container = document.getElementById("container");
        const detailNav = document.getElementById("detailNav");
        const menuDropdown = document.getElementById('menuDropdown'); 
        const paymentModal = document.getElementById('paymentModal');
        const paymentTitle = document.getElementById('paymentTitle');
        const paymentDetails = document.getElementById('paymentDetails');
        const promoPopupContent = document.getElementById('promoPopupContent'); // Ambil div konten pop-up

        // --- DEKLARASI RIWAYAT PESANAN BARU ---
        let orderHistory = [];
        const historyModal = document.getElementById('historyModal');
        // --- END DEKLARASI RIWAYAT PESANAN BARU ---
        
        // --- FUNGSI RIWAYAT PESANAN BARU ---
        
        // Inisialisasi Riwayat dari localStorage saat dimuat
        function loadHistory() {
            const storedHistory = localStorage.getItem('indraa_store_history');
            if (storedHistory) {
                orderHistory = JSON.parse(storedHistory);
            }
        }

        // Simpan Riwayat ke localStorage
        function saveHistory() {
            localStorage.setItem('indraa_store_history', JSON.stringify(orderHistory));
        }

        // Fungsi untuk merender daftar Riwayat Pesanan (untuk Modal)
        function renderHistory() {
            const historyList = document.getElementById('historyList');
            const historyEmpty = document.getElementById('historyEmpty');
            historyList.innerHTML = "";
            
            if (orderHistory.length === 0) {
                historyEmpty.style.display = 'block';
            } else {
                historyEmpty.style.display = 'none';
                
                orderHistory.forEach((historyItem, index) => {
                    const total = historyItem.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
                    
                    const listItem = document.createElement("li");
                    listItem.style.borderBottom = '1px dashed #ddd';
                    listItem.style.padding = '10px 0';
                    listItem.innerHTML = `
                        <div style="font-weight: bold; color: #2c3e50; display: flex; justify-content: space-between; align-items: center;">
                            <span>Pesanan #${orderHistory.length - index} (${historyItem.date})</span>
                            <button onclick="deleteHistoryItem(${index})" style="background-color: #c0392b; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 0.8em;">Hapus</button>
                        </div>
                        <div style="font-size: 0.9em; margin-left: 10px; margin-top: 5px;">
                            ${historyItem.items.map(item => 
                                `<span>${item.name} (x${item.quantity}) - Rp${(item.price * item.quantity).toLocaleString()}</span><br>`
                            ).join('')}
                        </div>
                        <div style="font-weight: bold; color: #e74c3c; margin-top: 5px;">Total: Rp${total.toLocaleString()}</div>
                    `;
                    historyList.appendChild(listItem);
                });
            }
        }

        // FUNGSI BARU: Tampilkan Pop-up Riwayat
        function showHistoryPopup() {
            loadHistory(); // Pastikan data terbaru dimuat sebelum ditampilkan
            renderHistory(); // Render konten di dalam modal
            historyModal.style.display = 'block';
        }

        // FUNGSI BARU: Tutup Pop-up Riwayat
        function closeHistoryPopup() {
            historyModal.style.display = 'none';
        }

        // Fungsi untuk menghapus item dari riwayat
        function deleteHistoryItem(index) {
            const confirmed = confirm("Apakah Anda yakin ingin menghapus pesanan ini dari riwayat?");
            if (confirmed) {
                orderHistory.splice(index, 1);
                saveHistory();
                renderHistory(); // Render ulang setelah dihapus
                alert("Pesanan berhasil dihapus dari riwayat.");
            }
        }

        // Fungsi untuk menyimpan keranjang ke riwayat
        function saveCartToHistory() {
            if (cart.length === 0) {
                return "Keranjang belanja kosong. Tidak ada yang disimpan ke riwayat.";
            }
            
            // Mengelompokkan item yang sama
            const groupedCart = cart.reduce((acc, item) => {
                const key = item.id;
                if (!acc[key]) {
                    acc[key] = { ...item, quantity: 0 };
                }
                acc[key].quantity++;
                return acc;
            }, {});
            
            const groupedItems = Object.values(groupedCart).map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }));
            
            const now = new Date();
            const dateString = now.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

            const newHistoryItem = {
                items: groupedItems,
                date: dateString
            };

            orderHistory.unshift(newHistoryItem); 
            saveHistory();
            
            return `Pesanan dengan ${groupedItems.length} jenis item berhasil disimpan ke Riwayat!`;
        }
        
        // --- END FUNGSI RIWAYAT PESANAN BARU ---
        
        // --- FUNGSI UNTUK MEMBUAT PESAN WHATSAPP (Diambil dari updateCart lama) ---
        function generateWhatsAppMessage() {
            let whatsappMessage = "Halo Admin, saya ingin memesan jasa joki. Mohon direspon!\n\n";
            let total = 0;
            let itemCounter = 1;

            // Mengelompokkan item yang sama dan menghitung jumlahnya
            const groupedCart = cart.reduce((acc, item) => {
                const key = item.id;
                if (!acc[key]) {
                    acc[key] = { ...item, quantity: 0, price: item.price, name: item.name };
                }
                acc[key].quantity++;
                return acc;
            }, {});

            const sortedGroupedCart = Object.values(groupedCart).sort((a, b) => a.id - b.id);

            sortedGroupedCart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                whatsappMessage += `${itemCounter}. ${item.name} (x${item.quantity}) - Rp${itemTotal.toLocaleString()}\n`;
                itemCounter++;
            });
            
            const totalText = `Rp${total.toLocaleString()}`;
            whatsappMessage += `\nTotal Pembayaran: ${totalText}\n\nTerima kasih!`;
            
            return { message: whatsappMessage, totalText: totalText };
        }

        // FUNGSI UTAMA UNTUK MENGUPDATE KERANJANG
        function updateCart() {
            cartList.innerHTML = "";
            let total = 0;
            
            // Mengelompokkan item yang sama dan menghitung jumlahnya
            const groupedCart = cart.reduce((acc, item) => {
                const key = item.id;
                if (!acc[key]) {
                    acc[key] = { ...item, quantity: 0 };
                }
                acc[key].quantity++;
                return acc;
            }, {});

            const totalPriceElement = document.getElementById('totalPrice');
            const sortedGroupedCart = Object.values(groupedCart).sort((a, b) => a.id - b.id);

            sortedGroupedCart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    ${item.name} (${item.quantity}x) - Rp${itemTotal.toLocaleString()}
                    <button onclick="removeFromCart(${item.id})" style="float: right; background-color: #e74c3c; color: white; border: none; border-radius: 4px; padding: 2px 6px; cursor: pointer;">Hapus</button>
                `;
                cartList.appendChild(listItem);
            });
            
            const { message, totalText } = generateWhatsAppMessage();
            
            totalPriceElement.textContent = `Total: ${totalText}`;
            // NOTE: Nomor WA Anda adalah 0895321940805
            waChat.href = `https://wa.me/62895321940805?text=${encodeURIComponent(message)}`;
        }

        // --- FUNGSI BARU UNTUK MENGHANDLE KLIK TOMBOL WA ---
        function handleWaChat(event) {
            if (cart.length === 0) {
                alert("Keranjang belanja kosong. Silakan tambahkan item terlebih dahulu.");
                event.preventDefault(); 
                return false;
            }

            // Simpan pesanan ke riwayat sebelum melanjutkan ke WhatsApp
            const saveMessage = saveCartToHistory();
            
            // Perbarui link WhatsApp untuk memastikan pesan ter-update
            updateCart(); 

            alert(saveMessage); 
            // Izinkan navigasi ke link WA
            return true;
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCart();
                alert(`"${product.name}" berhasil ditambahkan ke keranjang!`);
            }
        }

        function removeFromCart(productId) {
            // Hapus hanya satu instance dari item dengan ID ini
            const indexToRemove = cart.findIndex(item => item.id === productId);
            if (indexToRemove !== -1) {
                cart.splice(indexToRemove, 1);
                updateCart();
            }
        }

        function clearCart() {
            // Menampilkan pop-up konfirmasi
            const confirmed = confirm("Apakah Anda yakin ingin mengosongkan keranjang belanja?");
            if (confirmed) {
                cart = [];
                updateCart();
                alert("Keranjang belanja telah dikosongkan.");
                closeHistoryPopup(); // Tutup modal riwayat
            }
        }

        // --- FUNGSI BARU: MERENDER STOK BUAH (Menggantikan List Joki) ---
        function renderFruitStocks() {
            productList.innerHTML = ""; // Kosongkan list produk joki
            
            // Header dan Struktur Tabel
            const stockBlock = document.createElement("div");
            stockBlock.className = "stock-fruit-block";
            stockBlock.innerHTML = `
                <div class="stock-fruit-header">
                    <span class="icon">🛒</span> STOCK BUAH BLOX FRUIT <span class="icon">💎</span>
                </div>
                <p class="stock-fruit-note">
                    Klik tombol WhatsApp di keranjang untuk pemesanan buah. Stok dapat berubah sewaktu-waktu.
                </p>
                <table class="stock-table">
                    <thead>
                        <tr>
                            <th>Nama Buah</th>
                            <th style="text-align: center;">Stok</th>
                            <th style="text-align: right;">Harga (Rp)</th>
                        </tr>
                    </thead>
                    <tbody id="fruitStockBody">
                    </tbody>
                </table>
            `;
            productList.appendChild(stockBlock);

            const stockBody = document.getElementById('fruitStockBody');

            // Isi Tabel
            fruitStocks.forEach(fruit => {
                const row = document.createElement('tr');
                const isZeroStock = fruit.stock === 0;

                row.innerHTML = `
                    <td class="stock-name ${isZeroStock ? 'zero-stock' : ''}">${fruit.name}</td>
                    <td class="stock-value ${isZeroStock ? 'zero-stock' : ''}" style="text-align: center;">${isZeroStock ? 'HABIS' : fruit.stock}</td>
                    <td class="stock-price ${isZeroStock ? 'zero-stock' : ''}" style="text-align: right;">Rp${fruit.price.toLocaleString()}</td>
                `;
                // Buat baris tidak bisa di-klik jika stok habis, jika tidak biarkan default
                if (!isZeroStock) {
                    row.style.cursor = 'pointer';
                    row.setAttribute('title', `Klik untuk pesan ${fruit.name}`);
                    // Catatan: Tidak ada fungsi addToCart untuk stok buah di sini, pemesanan via WA.
                }

                stockBody.appendChild(row);
            });
        }


        // FUNGSI UNTUK MERENDER LIST JOKI
        function renderProducts(filteredProducts) {
            productList.innerHTML = "";
            let groupedProducts = {};

            filteredProducts.forEach(p => {
                let groupTitle;
                if (p.category === 'JOKI FISH IT' || p.category === 'JOKI GAG') {
                    // Gunakan subCategory untuk pengelompokan Joki Lain
                    groupTitle = p.subCategory;
                } else {
                    // Gunakan Kategori untuk BloxFruit
                    if (p.category === 'Level') { groupTitle = "Jasa Joki Level 🚀"; }
                    else if (p.category === 'Mastery') { groupTitle = "Jasa Joki Mastery ⚔️"; }
                    else if (p.category === 'PAKET LEVEL MURAH') { groupTitle = "PAKET LEVEL MURAH 📦"; }
                    else if (p.category === 'Fighting Style') { groupTitle = "Jasa Joki Fighting Style 👊"; }
                    else if (p.category === 'Sword') { groupTitle = "Jasa Joki Sword 🔪"; }
                    else if (p.category === 'V4') { groupTitle = "Jasa Joki V4 (Race Awakening) 🔥"; }
                    else { groupTitle = "Jasa Joki " + p.category; }
                }

                if (!groupedProducts[groupTitle]) {
                    groupedProducts[groupTitle] = [];
                }
                groupedProducts[groupTitle].push(p);
            });

            // Mapping Icon untuk BloxFruit
            const bloxFruitIconMap = {
                "Level": "📈", "PAKET LEVEL MURAH": "📦", "Mastery": "⚔️", "Currency": "💰", "Instinct": "👁️",
                "Fighting Style": "👊", "Sword": "🔪", "Gun": "🔫", "Haki Resep": "🌈", "Raid": "🌋",
                "Boss Raid": "💀", "Material": "🧱", "Race": "🧬", "V4": "🔥", "Sea Event": "🌊",
                "Kitsune Event": "🦊", "Dragon Event": "🐉", "Accessories": "👑", "Promo": "🎁"
            };

            // Mapping Icon untuk Joki Lain
            const otherIconMap = {
                "Jasa Joki Rod": "🎣", "Jasa Joki Bobber": "🎈", "Jasa Joki Koin": "🪙", "Jasa Joki AFK": "💤",
                "Batu Enchant Esoteric": "✨", "Jasa Joki Fishing": "🎣", "Jasa Joki Lain": "✨"
            };

            for (const title in groupedProducts) {
                const blockDiv = document.createElement("div");
                const firstProductCategory = groupedProducts[title][0].category;

                // Tentukan Icon berdasarkan Judul Grup/Kategori
                let icon = '';
                if (firstProductCategory === 'JOKI FISH IT' || firstProductCategory === 'JOKI GAG') {
                    icon = otherIconMap[title] || '⭐';
                } else {
                    // Ini adalah Joki BloxFruit
                    const categoryKey = groupedProducts[title][0].category;
                    icon = bloxFruitIconMap[categoryKey] || '⭐';
                }

                const blockTitle = title.replace("Jasa Joki ", "").toUpperCase();

                if (firstProductCategory !== 'JOKI FISH IT' && firstProductCategory !== 'JOKI GAG') {
                    // --- STYLE MANUAL UNTUK BLOXFRUIT (Tema Biru) ---
                    blockDiv.className = "blox-block";
                    blockDiv.innerHTML = `<div class="blox-title">${icon} ${blockTitle}</div><div class="blox-options"></div>`;

                    const optionsContainer = blockDiv.querySelector('.blox-options');
                    groupedProducts[title].forEach(p => {
                        const button = document.createElement("button");
                        button.className = "blox-item-btn";
                        button.setAttribute('onclick', `addToCart(${p.id})`);
                        button.innerHTML = `
                            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                                <span class="blox-name">${p.name}</span>
                                <span class="blox-price">Rp${p.price.toLocaleString()}</span>
                            </div>
                        `;
                        optionsContainer.appendChild(button);
                    });
                } else {
                    // --- STYLE MANUAL UNTUK JOKI FISH IT & JOKI GAG (Tema Hijau/Kuning) ---
                    blockDiv.className = "fishit-block";
                    blockDiv.innerHTML = `<div class="fishit-title">${icon} ${blockTitle}</div><div class="fishit-options"></div>`;
                    
                    const optionsContainer = blockDiv.querySelector('.fishit-options');
                    groupedProducts[title].forEach(p => {
                        const button = document.createElement("button");
                        button.className = "fishit-item-btn";
                        button.setAttribute('onclick', `addToCart(${p.id})`);
                        button.innerHTML = `
                            <div style="display: flex; justify-content: space-between; width: 100%;">
                                <span>${p.name}</span>
                                <span class="fishit-item-price-style">Rp${p.price.toLocaleString()}</span>
                            </div>
                        `;
                        optionsContainer.appendChild(button);
                    });
                }

                productList.appendChild(blockDiv);
            }
        }

        function filterProducts() {
            const query = searchInput.value.toLowerCase();
            // Cek jika kategori aktif adalah Stock Fruit, jangan lakukan filter
            if (currentCategory === 'BloxFruit_Stock') {
                return;
            }

            const filtered = products.filter(p => 
                (p.category === currentCategory || currentCategory === 'BloxFruit_All') &&
                p.name.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        }

        searchInput.addEventListener('keyup', filterProducts);
        searchInput.addEventListener('change', filterProducts);

        function showPaymentInfo(method) {
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            const totalText = `Rp${total.toLocaleString()}`;
            const paymentModal = document.getElementById('paymentModal');
            const paymentTitle = document.getElementById('paymentTitle');
            const paymentDetails = document.getElementById('paymentDetails');
            
            paymentTitle.textContent = `Pembayaran Melalui ${method}`;
            
            let detailsContent = '';
            if (method === 'DANA') {
                detailsContent = `DANA: 0895371757784 a.n Maulana`;
            } else if (method === 'QRIS') {
                detailsContent = `
                    <p>Silakan Scan QRIS di bawah ini:</p>
                    <img src="QRIS INDRAA STORE.jpg" alt="QRIS INDRAA STORE" class="qris-image">
                    <p>Total: ${totalText}</p>
                `;
            } else if (method === 'GOPAY') {
                detailsContent = `GOPAY: 0895321940805 a.n Maulana`;
            } else if (method === 'SEABANK') {
                detailsContent = `SEABANK: 901768241659 a.n Maulana`;
            }

            paymentDetails.innerHTML = detailsContent;
            paymentModal.style.display = 'block';
        }

        function closePaymentModal() {
            document.getElementById('paymentModal').style.display = 'none';
        }

        // --- FUNGSI UNTUK MENGATUR TOMBOL AKTIF DI NAVIGASI UTAMA ---
        function setActiveButton(category) {
            const buttons = document.querySelectorAll('.main-category-nav button');
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.id === 'btnBloxFruit' && (category === 'BloxFruit_All' || category === 'Level' || category === 'Mastery' || category === 'PAKET LEVEL MURAH' || category === 'Currency' || category === 'Instinct' || category === 'Fighting Style' || category === 'Sword' || category === 'Gun' || category === 'Haki Resep' || category === 'Raid' || category === 'Boss Raid' || category === 'Material' || category === 'Race' || category === 'V4' || category === 'Sea Event' || category === 'Kitsune Event' || category === 'Dragon Event' || category === 'Accessories' || category === 'Promo')) {
                    document.getElementById('btnBloxFruit').classList.add('active');
                } else if (btn.id === 'btnStockBuah' && category === 'BloxFruit_Stock') {
                    btn.classList.add('active');
                } else if (btn.id === 'btnFishIt' && category === 'JOKI FISH IT') {
                    btn.classList.add('active');
                } else if (btn.id === 'btnJokiGag' && category === 'JOKI GAG') {
                    btn.classList.add('active');
                }
            });
        }
        // --- END FUNGSI UNTUK MENGATUR TOMBOL AKTIF ---


    function showCategory(category) {
    currentCategory = category;
    searchInput.value = ''; // Clear search
    // Sembunyikan detailNav dan searchInput secara default, lalu tampilkan yang diperlukan
    detailNav.style.display = 'none';
    searchInput.style.display = 'none';
    if (category === 'BloxFruit_Stock') {
        // Logika untuk kategori lokal 'Stock Fruit BF' Anda
        if (typeof setActiveButton !== 'undefined') setActiveButton(category);
        if (typeof renderFruitStocks !== 'undefined') renderFruitStocks(); 

    } else if (category === 'JOKI FISH IT' || category === 'JOKI GAG') {
        // Untuk kategori Fish It & Joki GAG
        if (typeof searchInput !== 'undefined') searchInput.style.display = 'block'; 
        if (typeof setActiveButton !== 'undefined') setActiveButton(category);
        if (typeof renderProducts !== 'undefined' && typeof products !== 'undefined') {
            renderProducts(products.filter(p => p.category === category));
        }

    } else {
        // Untuk semua kategori JOKI BLOXFRUIT lainnya (TERMASUK 'BloxFruit_All')
        if (typeof detailNav !== 'undefined') detailNav.style.display = 'flex'; // Tampilkan navigasi detail
        if (typeof searchInput !== 'undefined') searchInput.style.display = 'block'; // Tampilkan Search Bar
        if (typeof setActiveButton !== 'undefined') setActiveButton(category);
        
        if (typeof renderProducts !== 'undefined' && typeof products !== 'undefined') {
             // Filter produk joki Blox Fruit, mengecualikan kategori yang dipisahkan
            const filtered = (category === 'BloxFruit_All') 
                ? products.filter(p => p.category !== 'JOKI FISH IT' && p.category !== 'JOKI GAG' && p.category !== 'BloxFruit_Stock') 
                : products.filter(p => p.category === category);
            
            renderProducts(filtered);
        }
    }

    // --- Langkah 4: Pembersihan Akhir (JALANKAN SELALU) ---
    if (typeof closePaymentModal !== 'undefined') closePaymentModal();
    if (typeof closePromoPopup !== 'undefined') closePromoPopup(); 
    if (typeof updateCart !== 'undefined') updateCart();

    // Setelah mengubah kategori, pastikan semua pop-up tertutup
    closePaymentModal();
    closePromoPopup(); 
    updateCart();
}

        // Inisialisasi awal: Tampilkan semua BloxFruit saat pertama kali dimuat
        window.onload = function() {
            showCategory('BloxFruit_All');
            loadHistory(); // BARU: Muat riwayat saat dimuat
        };

        // Tambahkan event listener untuk menutup modal saat klik di luar
        window.onclick = function(event) {
            const modal = document.getElementById('paymentModal');
            const historyModal = document.getElementById('historyModal');
            
            if (event.target == modal) {
                closePaymentModal();
            }
            if (event.target == historyModal) {
                closeHistoryPopup();
            }
        }
</script>

        </div> <footer class="store-footer">
        <div class="footer-content">
            <div class="footer-section contact-info">
                <h4>Hubungi Kami</h4>
                <p>Admin: INDRAA STORE</p>
                <p>WhatsApp: <a href="https://wa.me/62895321940805" target="_blank">0895-3219-40805</a></p>
                <p>Email: indraastore13@Gmail.com</p>
                <p>Instagram: <a href="https://www.instagram.com/indraastore13" target="_blank">indraastore13</a></p>
            </div>
            <div class="footer-section store-links">
                <h4>Layanan Cepat</h4>
                <ul>
                    <li><a href="#" onclick="showCategory('BloxFruit_All'); return false;">Joki BloxFruit</a></li>
                    <li><a href="#" onclick="showCategory('JOKI FISH IT'); return false;">Joki Fish It</a></li>
                    <li><a href="#" onclick="showCategory('JOKI GAG'); return false;">Joki GAG</a></li>
                </ul>
            </div>
            <div class="footer-section copyright">
                <p>&copy; 2025 INDRAA DEVELOPER</p>
                <P>Semua Transaksi Aman & Terjamin 100%</p>
            </div>
        </div>
    </footer>
<script>
        // --- SKRIP BACKGROUND MUSIC (FIX FINAL: Tombol & Suara) ---
const musicToggle = document.getElementById('musicToggle');
const playerContainer = document.getElementById('youtube-bg-player');
let isAudible = false; // Status awal: Muted

// Atur ikon awal menjadi MUTE
if(musicToggle) { 
    musicToggle.textContent = '🔇';
}

function createIframe(muteStatus) {
    const videoId = 'Mv_Sq5bOT-8';
    const srcUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=${muteStatus}&disablekb=1&rel=0`;
    
    // Ganti elemen iframe secara keseluruhan (Dynamic Reload)
    playerContainer.innerHTML = `<iframe id="youtube-iframe" width="0" height="0" 
                                       src="${srcUrl}" 
                                       frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

function toggleMusic() {
    // Tombol diklik
    if (isAudible) {
        // Jika sedang bersuara (🎵), ganti ke mode MUTE
        createIframe(1); // Mute
        isAudible = false;
        musicToggle.textContent = '🔇'; // Ganti ikon ke MUTE
        
    } else {
        // Jika sedang tidak bersuara (🔇), ganti ke mode UNMUTE
        createIframe(0); // Unmute
        isAudible = true;
        musicToggle.textContent = '🎵'; // Ganti ikon ke MUSIK
    }
}

if(musicToggle) {
    musicToggle.addEventListener('click', toggleMusic);
}

// Inisiasi awal: Pastikan IFrame awal dimuat (Muted) saat halaman selesai dimuat
window.addEventListener('load', () => {
    createIframe(1); // Selalu mulai dalam mode Muted (1)
});

// --- END SKRIP BACKGROUND MUSIC ---

    // Patch untuk memastikan autoplay berjalan (meskipun sering diblokir browser)
    window.addEventListener('load', () => {
        if (!isPlaying && player.contentWindow) {
             player.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'playVideo',
                args: []
            }), '*');
            isPlaying = true;
            musicToggle.textContent = '🎵';
        }
    });

        // --- START SKRIP COMMUNITY DROPDOWN (DIPERBAIKI) ---
        const communityMenu = document.getElementById('communityMenu');
        const navButton = communityMenu ? communityMenu.querySelector('.nav-button') : null;

        if (navButton) {
            // Fungsi untuk toggle kelas 'show'
            function toggleDropdown(event) {
                // PENTING: Menggunakan preventDefault dan stopPropagation untuk memastikan klik tombol ditangani
                event.preventDefault(); 
                event.stopPropagation();
                
                communityMenu.classList.toggle('show');
                const isExpanded = communityMenu.classList.contains('show');
                navButton.setAttribute('aria-expanded', isExpanded);
            }

            // Toggle saat tombol di-klik
            navButton.addEventListener('click', toggleDropdown);

            // Tutup dropdown saat klik di luar area
            document.addEventListener('click', (event) => {
                // Periksa apakah communityMenu ada dan klik bukan di dalamnya
                if (communityMenu && !communityMenu.contains(event.target)) {
                    communityMenu.classList.remove('show');
                    navButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
        // --- END SKRIP COMMUNITY DROPDOWN ---
    </script>
        <script src="secure-devtools-blocker.js"></script>
</body>

</html>


