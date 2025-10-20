// ==========================
// 🔐 INDRAA STORE SECURE DEVTOOLS BLOCKER
// ==========================

// 1️⃣ Nonaktifkan Klik Kanan
document.addEventListener('contextmenu', event => event.preventDefault());

// 2️⃣ Nonaktifkan Shortcut Keyboard Umum untuk Developer Tools
document.onkeydown = function (e) {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
    (e.ctrlKey && e.keyCode === 85) // Ctrl+U
  ) {
    alert("⚠️ Akses Developer Tools diblokir demi keamanan website INDRAA STORE!");
    return false;
  }
};

// 3️⃣ Deteksi Jika Developer Tools Terbuka (Console Detection)
(function detectDevTools() {
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
      alert("🚫 Developer Tools terdeteksi!\nHalaman akan dimuat ulang demi keamanan.");
      location.reload();
    }
  });
  console.log('%c', element);
})();

// 4️⃣ Deteksi Perubahan Ukuran Jendela (Biasanya Saat DevTools Terbuka)
setInterval(() => {
  if (
    window.outerWidth - window.innerWidth > 160 ||
    window.outerHeight - window.innerHeight > 160
  ) {
    alert("🚨 Developer Tools terdeteksi!");
    location.reload();
  }
}, 1000);

// 5️⃣ Cegah Pengguna Membuka Inspect Element via Console.log
console.log = function () {};
console.warn = function () {};
console.error = function () {};
console.info = function () {};

// 6️⃣ Obfuscate / Lindungi Script Ini (Ringan)
(function secureEval() {
  const encoded = btoa("INDRAA_STORE_SECURITY_ACTIVE");
  if (atob(encoded) !== "INDRAA_STORE_SECURITY_ACTIVE") {
    alert("❌ Manipulasi script terdeteksi!");
    location.reload();
  }
})();

// 7️⃣ Deteksi Penggunaan Frame Debugger
if (window.console && window.console.firebug) {
  alert("⚠️ Firebug/Debugger tidak diizinkan!");
  location.reload();
}

// 8️⃣ Lock Fokus Tab (Opsional)
window.addEventListener("blur", () => {
  document.title = "⚠️ Jangan membuka DevTools!";
});
window.addEventListener("focus", () => {
  document.title = "INDRAA STORE";
});