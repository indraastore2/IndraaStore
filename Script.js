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
            position: relative; /* Diperlukan untuk #menuToggle */
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
            display: none; 
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
        
        /* ... CSS Lainnya dari Style.css dan promo-popup-style.css tetap diperlukan di sini ... */
    </style>
    
    <link rel="Stylesheet" href="Style.css">
    <link rel="Stylesheet" href="promo-popup-style.css"> 
</head>
<body>
    
    <div id="promoPopup" class="promo-popup-container">
        <div class="promo-popup-content">
            <span class="popup-close-btn">&times;</span>
        </div>
    </div>
    
    <header class="store-header">
        <span class="icon">💣</span>INDRAA STORE<span class="icon">💣</span>
    </header>
    
    <script src="promo-popup-script.js"></script> 
    
    <div class="welcome-text">
        <h2>Selamat Datang di Toko Indraa Store</h2>
        <p>Jasa Joki Cepat, Aman & Terpercaya 💪🔥</p>
    </div>

    <div class="main-category-nav">
        <button id="btnBloxFruit" onclick="showCategory('BloxFruit_All')">
            JOKI BLOXFRUIT
        </button>
        <button id="btnFishIt" onclick="showCategory('JOKI FISH IT')">
            JOKI FISH IT
        </button>
    </div>
    <nav id="detailNav" style="display: none;">
        <div class="detail-row">
            <button onclick="showCategory('all')">Semua BloxFruit</button>
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
    <a id="waChat" class="whatsapp" href="#" target="_blank">💬Chat via WhatsApp</a>
    
    <p id="cartNote" class="cart-note">Terima kasih sudah berbelanja — Silakan cek detail pesanan dan tekan Chat WhatsApp untuk konfirmasi.</p>
    
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
            { id: 96,name: "Fox Lamp + Bonus", price:40000, category: "Kitsune Event"},
            { id: 97,name: "Azure Ember x25", price:10000, category: "Kitsune Event"},
            { id: 98,name: "1 Belt", price:5000, category: "Dragon Event"},
            { id: 99,name: "6 Belt", price:30000, category: "Dragon Event"},
            { id: 100,name: "Red Belt", price:15000, category: "Dragon Event"},
            { id: 101,name: "Black Belt", price:25000, category: "Dragon Event"},
            { id: 102,name: "Volcano Magnet", price:10000, category: "Dragon Event"},
            { id: 103,name: "1 Dragon Egg", price:20000, category: "Dragon Event"},
            { id: 104,name: "Draco Race", price:100000, category: "Dragon Event"},
            { id: 105,name: "Fire Flower X1", price:5000, category: "Dragon Event"},
            { id: 106,name: "V2 Draco", price:20000, category: "Dragon Event"},
            { id: 107,name: "V3 Draco", price:10000, category: "Dragon Event"},
            { id: 108,name: "DragonHeart Sword", price:30000, category: "Dragon Event"},
            { id: 109,name: "DragonStorm Gun", price:50000, category: "Dragon Event"},
            { id: 110,name: "Freezing Hydra", price:30000, category: "Dragon Event"},
            { id: 111,name: "1X Trial Draco (Tanpa Magnet)", price:25000, category: "Dragon Event"},
            { id: 112,name: "1X Trial Draco (Ada Magnet)", price:20000, category: "Dragon Event"},
            { id: 113,name: "Darkcoat (10X Lawan Darkbeard)", price:100000, category: "Accessories"},
            { id: 114,name: "Pale Scraf (Wajib Sea 3)", price:10000, category: "Accessories"},
            { id: 115,name: "Muskeeter Hat (Wajib Level 1800+)", price:10000, category: "Accessories"},
            { id: 116,name: "Pilot Helmet (Wajib Sea 3)", price:5000, category: "Accessories"},
            { id: 117,name: "1 Dragon Egg", price:10000, category: "Promo"},
            { id: 118,name: "6 Dinosaur Bones ", price:10000, category: "Promo"},
            { id: 119,name: "Black Belt", price:15000, category: "Promo"},
            { id: 120,name: "20 Scrap Metal", price:10000, category: "Promo"},
            { id: 121,name: "30 Blaze Ember", price:10000, category: "Promo"},
            { id: 122,name: "1X Trial Draco (Ada Magnet)", price:15000, category: "Promo"},
            { id: 123,name: "1X Trial Draco (Tanpa Magnet)", price:20000, category: "Promo"},
            { id: 124,name: "Bluegear", price:8000, category: "Promo"},
            { id: 125,name: "Mirror Fractal", price:15000, category: "Promo"},
            { id: 126,name: "Valkyrie Helm", price:10000, category: "Promo"},
            { id: 127,name: "Full Gear T5", price:30000, category: "Promo"},
            { id: 128,name: "Full Gear T10", price:40000, category: "Promo"},
            { id: 129,name: "1X Trial", price: 5000, category: "Promo"},
            // Produk Fish It baru
            // --- START PRODUK JOKI FISH IT (Kategori: JOKI FISH IT) ---
            
            // Jasa Joki AFK
            { id: 130, name: "1 Jam", price: 3000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"}, 
            { id: 131, name: "1 Hari", price: 15000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 132, name: "2 Hari", price: 30000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 133, name: "3 Hari", price: 35000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 134, name: "7 Hari", price: 45000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            { id: 135, name: "15 Hari", price: 55000, category: "JOKI FISH IT", subCategory: "Jasa Joki AFK"},
            
            // Jasa Joki Coin
            { id: 136, name: "1M", price: 10000, category: "JOKI FISH IT", subCategory: "Jasa Joki Coin"},
            { id: 137, name: "2M", price: 20000, category: "JOKI FISH IT", subCategory: "Jasa Joki Coin"},
            { id: 138, name: "3M", price: 25000, category: "JOKI FISH IT", subCategory: "Jasa Joki Coin"},
            
            // Jasa Joki Rod
            { id: 139, name: "Ghostfin Rod", price: 60000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 140, name: "Angler Rod", price: 45000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 141, name: "Ares Rod", price: 30000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 142, name: "Astral Rod", price: 10000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 143, name: "Bamboo Rod", price: 55000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            { id: 144, name: "Element Rod", price: 100000, category: "JOKI FISH IT", subCategory: "Jasa Joki Rod"},
            
            // Jasa Joki Bobber
            { id: 145, name: "Aether", price: 25000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 146, name: "Corupt", price: 15000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 147, name: "Dark Matter", price: 10000, category: "JOKI FISH IT", subCategory: "Jasa Joki Bobber"},
            { id: 148, name: "Chroma", price: 5000, category: "Lainnya", subCategory: "Jasa Joki Bobber"},
            // Batu Enchant Esoteric
            { id: 150, name: "10 Batu", price: 1000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 151, name: "55 Batu", price: 5000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 152, name: "100 Batu", price: 10000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 153, name: "150 Batu", price: 15000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 154, name: "220 Batu", price: 20000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 155, name: "280 Batu", price: 25000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 156, name: "340 Batu", price: 30000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            { id: 157, name: "400 Batu", price: 35000, category: "JOKI FISH IT", subCategory: "Batu Enchant Esoteric"},
            
            // Batu Enchant New
            { id: 158, name: "1 Batu", price: 5000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 159, name: "5 Batu", price: 15000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 160, name: "15 Batu", price: 60000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            { id: 161, name: "25 Batu", price: 100000, category: "JOKI FISH IT", subCategory: "Batu Enchant New"},
            
            // Jasa Joki Artefak Tample
            { id: 162, name: "Artefak Tample", price: 35000, category: "JOKI FISH IT", subCategory: "Jasa Joki Artefak Tample"},
            
            // --- END PRODUK BARU ---
        ];

        let cart = [];
        let currentCategory = "all";

        const productList = document.getElementById("productList");
        const cartList = document.getElementById("cartList");
        const totalPrice = document.getElementById("totalPrice");
        const searchInput = document.getElementById("searchInput");
        const waChat = document.getElementById("waChat");
        const container = document.getElementById("container");
        const detailNav = document.getElementById('detailNav'); // Ambil detail nav
        const menuDropdown = document.getElementById('menuDropdown'); // Ambil dropdown menu
        const paymentModal = document.getElementById('paymentModal');
        const paymentTitle = document.getElementById('paymentTitle');
        const paymentDetails = document.getElementById('paymentDetails');
        
        // Data Pembayaran (PASTIKAN MENGGANTI DENGAN DETAIL REKENING ASLI ANDA)
        const paymentData = {
            DANA: "Nomor DANA: 0895371757784\nA.N. MAULANA",
            QRIS: "Metode ini menggunakan QR Code.\nSilakan tekan 'Chat via WhatsApp' untuk mendapatkan QR Code terbaru.",
            GOPAY: "Nomor GOPAY: 0895321940805\nA.N. MAULANA",
            SEABANK: "Nomor Rekening: 901768241659\nA.N. MAULANA"
        };
        
        function showPaymentInfo(method) {
            paymentTitle.textContent = `Pembayaran via ${method}`;
            
            // Ambil total harga terbaru
            const totalText = totalPrice.textContent;

            paymentDetails.innerHTML = `
                <p>Total yang harus dibayar: <strong>${totalText}</strong></p>
                <p style="white-space: pre-wrap; margin-top: 10px;">${paymentData[method]}</p>
            `;

            paymentModal.style.display = "block";
        }
        
        function closePaymentModal() {
            paymentModal.style.display = "none";
        }
        
        // Tambahkan listener untuk menutup modal ketika mengklik di luar area modal
        window.onclick = function(event) {
            if (event.target == paymentModal) {
                closePaymentModal();
            }
        }

        function setActiveButton(category) {
            const buttons = document.querySelectorAll('.main-category-nav button');
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Logika untuk tombol utama dan visibilitas detailNav:
            if (category === 'JOKI FISH IT') { 
                // 1. Aktifkan tombol JOKI FISH IT
                document.getElementById('btnFishIt').classList.add('active');
                // 2. SEMBUNYIKAN navigasi kategori detail
                detailNav.style.display = 'none'; 
            } else {
                // Semua kategori lainnya (BloxFruit_All, all, Level, Mastery, dst.) dianggap BloxFruit
                // 1. Aktifkan tombol JOKI BLOXFRUIT
                document.getElementById('btnBloxFruit').classList.add('active');
                // 2. TAMPILKAN navigasi kategori detail
                detailNav.style.display = 'flex'; // Gunakan 'flex' atau 'block' sesuai gaya CSS Anda
            }
        }

        function displayProducts() {
            const searchValue = searchInput.value.toLowerCase();
            productList.innerHTML = "";

            const isFishItView = currentCategory === "JOKI FISH IT";
            const isBloxFruitView = currentCategory === "BloxFruit_All" || currentCategory === "all";

            // KONTROL VISIBILITAS SEARCH INPUT
            if (isFishItView) {
                searchInput.style.display = 'none';
            } else {
                searchInput.style.display = 'block';
            }

            // 1. Logika Filter
            const filtered = products.filter(p => {
                const searchMatch = p.name.toLowerCase().includes(searchValue);
                
                if (isFishItView) {
                    // Filter untuk Fish It: tampilkan JOKI FISH IT & Lainnya
                    return (p.category === "JOKI FISH IT" || p.category === "Lainnya") && searchMatch;
                } else if (isBloxFruitView) {
                    // Filter untuk BloxFruit: tampilkan semua kecuali Fish It & Lainnya
                    return p.category !== "JOKI FISH IT" && p.category !== "Lainnya" && searchMatch;
                } else {
                    // Filter berdasarkan kategori detail BloxFruit (Level, Mastery, dll.)
                    return p.category === currentCategory && searchMatch;
                }
            });

            if (filtered.length === 0) {
                productList.innerHTML = "<p>Tidak ada produk ditemukan di kategori ini.</p>";
                return;
            }

            // 2. Logika Rendering
            if (isFishItView) {
                // Rendering KHUSUS untuk JOKI FISH IT (Gaya Blok)
                
                // Kelompokkan produk berdasarkan subCategory
                const groupedProducts = filtered.reduce((acc, p) => {
                    // Hanya grup produk JOKI FISH IT (Subkategori)
                    if (p.category === "JOKI FISH IT") {
                        const subCat = p.subCategory || "Lain-lain";
                        if (!acc[subCat]) {
                            acc[subCat] = [];
                        }
                        acc[subCat].push(p);
                    }
                    return acc;
                }, {});
                
                // Render setiap grup sebagai blok terpisah
                for (const title in groupedProducts) {
                    const blockDiv = document.createElement("div");
                    blockDiv.className = "fishit-block";
                    // Tambahkan ikon di judul
                    const iconMap = {
                        "Jasa Joki AFK": "🕒", "Jasa Joki Coin": "💰", 
                        "Jasa Joki Rod": "🎣", "Jasa Joki Bobber": "🔴"
                    };
                    const icon = iconMap[title] || '🌑';

                    blockDiv.innerHTML = `<div class="fishit-title">${icon} ${title}</div><div class="fishit-options"></div>`;
                    
                    const optionsContainer = blockDiv.querySelector('.fishit-options');

                    groupedProducts[title].forEach(p => {
                        const button = document.createElement("button");
                        button.className = "fishit-item-btn";
                        button.setAttribute('onclick', `addToCart(${p.id})`);
                        button.innerHTML = `
                            ${p.name}
                            <span class="fishit-item-price">Rp${p.price.toLocaleString()}</span>
                        `;
                        optionsContainer.appendChild(button);
                    });
                    
                    productList.appendChild(blockDiv);
                }
                
            } else {
                // Rendering DEFAULT untuk JOKI BLOXFRUIT (Gaya Tabel/List)
                filtered.forEach(p => {
                    const div = document.createElement("div");
                    div.className = "product";
                    div.innerHTML = `
                        <span>${p.name} - Rp${p.price.toLocaleString()}</span>
                        <button onclick="addToCart(${p.id})">Tambah</button>
                    `;
                    productList.appendChild(div);
                });
            }
        }

        function showCategory(category) {
            container.style.opacity = "0";
            setActiveButton(category); 
            
            // Set currentCategory untuk filtering
            currentCategory = category;

            setTimeout(() => {
                displayProducts();
                container.style.opacity = "1";
            }, 300);
        }

        function addToCart(id) {
            const product = products.find(p => p.id === id);
            cart.push(product);
            updateCart();
        }

        function updateCart() {
            cartList.innerHTML = "";
            let total = 0;
            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
                cartList.appendChild(li);
                total += item.price;
            });
            totalPrice.textContent = `Total: Rp${total.toLocaleString()}`;

            const message = encodeURIComponent(
                "Halo, saya ingin joki di INDRAA STORE:\n" +
                cart.map(c => `- ${c.name} (Rp${c.price.toLocaleString()})`).join("\n") +
                `\nTotal: Rp${total.toLocaleString()}`
            );
            waChat.href = `https://wa.me/62895321940805?text=${message}`;
        }

        function clearCart() {
            const confirmed = confirm("Apakah Anda yakin ingin mengosongkan keranjang belanja?");
            if (confirmed) {
                cart = [];
                updateCart();
                alert("Keranjang belanja telah dikosongkan.");
            }
        }
        
        // FUNGSI MENU LAIN (Toggle Dropdown)
        document.getElementById('menuToggle').addEventListener('click', function() {
            if (menuDropdown.style.display === 'block') {
                menuDropdown.style.display = 'none';
            } else {
                menuDropdown.style.display = 'block';
            }
        });

        // FUNGSI MEMILIH DARI MENU LAIN
        function selectExternalMenu(menuItem) {
            menuDropdown.style.display = 'none'; // Sembunyikan menu setelah memilih
            
            if (menuItem === 'BloxFruit') {
                showCategory('BloxFruit_All'); // Mengarahkan ke tampilan Blox Fruit
            } else if (menuItem === 'FishIt') {
                showCategory('Lainnya'); // Tampilkan produk Fish It
            }
        }


        searchInput.addEventListener("input", displayProducts);
        
        // Atur agar halaman dimuat dengan Joki Bloxfruit sebagai default
        window.onload = function() {
            // Memuat dengan semua kategori BloxFruit dan mengaktifkan tombol yang benar
            showCategory('BloxFruit_All'); 
        };

    </script>
    
    <script src="secure-devtools-blocker.js"></script>

</body>
</html>