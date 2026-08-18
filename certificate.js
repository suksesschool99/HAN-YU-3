// Dinosaur Certificate Generator & Egg Hatchery
// Merender sertifikat kelulusan dinosaurus beresolusi tinggi pada HTML5 Canvas

class DinoCertificateManager {
  constructor() {
    this.canvas = null;
    this.ctx = null;
  }

  generateCertificate(studentName, score, title = "DINO MANDARIN MASTER", unitName = "HAN YU 3 (汉语 第三册)") {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 850;
    const ctx = canvas.getContext("2d");

    // 1. Background Prasejarah Cantik
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 850);
    bgGrad.addColorStop(0, "#FFFDF5");
    bgGrad.addColorStop(0.5, "#F7FBEF");
    bgGrad.addColorStop(1, "#EBF7EC");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 850);

    // 2. Border Hiasan Emas & Hijau Dinosaurus
    ctx.strokeStyle = "#2F855A";
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, 1140, 790);

    ctx.strokeStyle = "#D69E2E";
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, 1104, 754);

    // 3. Ornamen Pojok (Dino Footprints & Eggs)
    ctx.font = "40px sans-serif";
    ctx.fillText("🦖", 60, 100);
    ctx.fillText("🦕", 1090, 100);
    ctx.fillText("🌴", 60, 780);
    ctx.fillText("🌋", 1090, 780);

    // 4. Header Sertifikat
    ctx.textAlign = "center";
    ctx.fillStyle = "#1E5E3A";
    ctx.font = "bold 44px 'Noto Sans SC', 'Segoe UI', sans-serif";
    ctx.fillText("🦕 JURASSIC MANDARIN ACADEMY 🦖", 600, 125);

    ctx.fillStyle = "#B7791F";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText("SERTIFIKAT KELULUSAN & PENGHARGAAN PRESTASI", 600, 175);

    ctx.fillStyle = "#4A5568";
    ctx.font = "20px sans-serif";
    ctx.fillText("Dengan bangga menyatakan bahwa:", 600, 240);

    // 5. Nama Siswa
    ctx.fillStyle = "#1A202C";
    ctx.font = "bold 52px 'Segoe UI', sans-serif";
    ctx.fillText(studentName || "Siswa Teladan", 600, 315);

    // Garis Bawah Nama
    ctx.strokeStyle = "#38A169";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 335);
    ctx.lineTo(850, 335);
    ctx.stroke();

    // 6. Isi Keterangan Prestasi
    ctx.fillStyle = "#2D3748";
    ctx.font = "22px sans-serif";
    ctx.fillText(`Telah berhasil menuntaskan materi belajar membaca, menulis guratan Hanzi,`, 600, 390);
    ctx.fillText(`serta Latihan Ujian Standar YCT Level 2 pada buku kurikulum:`, 600, 425);

    ctx.fillStyle = "#276749";
    ctx.font = "bold 32px 'Noto Sans SC', sans-serif";
    ctx.fillText(unitName, 600, 480);

    // 7. Badge Gelar & Skor
    ctx.fillStyle = "#C6F6D5";
    ctx.beginPath();
    ctx.roundRect(420, 520, 360, 90, 20);
    ctx.fill();
    ctx.strokeStyle = "#38A169";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#22543D";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText(title, 600, 560);
    ctx.font = "bold 22px sans-serif";
    ctx.fillStyle = "#C05621";
    ctx.fillText(`Nilai Skor YCT 2: ${score}% ⭐⭐⭐⭐⭐`, 600, 595);

    // 8. Tanda Tangan & Tanggal
    const today = new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    ctx.textAlign = "left";
    ctx.fillStyle = "#4A5568";
    ctx.font = "18px sans-serif";
    ctx.fillText(`Tanggal: ${today}`, 120, 720);
    ctx.fillText(`No. Verifikasi: DINO-HY3-${Math.floor(100000 + Math.random() * 900000)}`, 120, 750);

    ctx.textAlign = "right";
    ctx.fillStyle = "#22543D";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("🦖 Tim Pengajar Han Yu 3", 1080, 720);
    ctx.font = "16px sans-serif";
    ctx.fillStyle = "#718096";
    ctx.fillText("北京华文学院 - Han Yu Learning Center", 1080, 745);

    return canvas;
  }
}

window.DinoCertificate = new DinoCertificateManager();
