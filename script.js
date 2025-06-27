// Menyapa saat pertama kali buka
window.onload = function() {
    alert("Selamat datang di Website Biografi Willi yang penuh warna!");
};

// Menampilkan motivasi acak
function tampilkanMotivasi() {
    const motivasi = [
        "Terus belajar, jangan pernah menyerah 💪",
        "Kerja keras tak akan mengkhianati hasil 🔥",
        "Hari ini lebih baik dari kemarin 🌅",
        "Jangan takut gagal, karena gagal adalah guru terbaik 🧠",
        "Fokus pada tujuanmu 🎯"
    ];

    const index = Math.floor(Math.random() * motivasi.length);
    document.getElementById("motivasi").innerText = motivasi[index];
}
