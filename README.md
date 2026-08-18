# 🦕 HAN YU 3 (汉语第三册) - Website Edukasi Interaktif Tema Dinosaurus

Aplikasi web pembelajaran Bahasa Mandarin interaktif untuk materi buku **HAN YU 3 (汉语 3)** dengan tema **Petualangan Dinosaurus** yang ramah anak, menarik, dan lengkap dengan 3 fitur utama serta sistem reward **Dino Hatchery**.

---

## 🦖 3 Fitur Utama

### 1. 📖 Cara Membaca Setiap Unit Teks dengan Audio & Teks Sinkron (Karaoke)
- **Audio Reader dengan Karaoke Highlight**: Membaca teks kalimat per kalimat dengan penandaan warna aktif mengikuti suara.
- **Pengatur Kecepatan Suara**:
  - 🐢 **Mode Kura-kura (0.7x)**: Memperlambat pembacaan agar nada (tone) dan pelafalan terdengar sangat jelas bagi pemula.
  - 🦖 **Mode Dinosaurus (1.0x)**: Kecepatan normal berbicara bahasa Mandarin.
- **Tombol Toggle Fleksibel**:
  - Tampilkan / Sembunyikan **Pinyin**.
  - Tampilkan / Sembunyikan **Terjemahan Bahasa Indonesia**.
  - Tombol **Putar per Kalimat** atau **Putar Semua Kalimat** berurutan.
- **Ringkasan Kosakata (生词)** lengkap dengan tombol langsung ke mode guratan.

### 2. ✍️ Cara Menulis Guratan Setiap Unit Kosakata (Stroke Order Animation & Practice)
- **Animasi Guratan Otomatis (HanziWriter Integration & Native SVG Fallback)**:
  - Tombol **▶️ Putar Animasi**: Melihat urutan goresan dari awal sampai akhir.
  - Tombol **✍️ Latihan Tulis**: Menulis langsung di atas layar menggunakan jari (touchscreen) atau mouse.
  - Deteksi ketepatan guratan seketika dengan petunjuk jika salah gores.
- **Pilihan Kisi Tradisional**:
  - **田字格 (Tian Zi Ge)** - 4 kotak standar.
  - **米字格 (Mi Zi Ge)** - 8 bidang diagonal.
  - **Polos** - bingkai minimalis.
- **Panel Informasi Karakter Lengkap**:
  - Pinyin, Arti Bahasa Indonesia, Radikal (部首), Jumlah Total Guratan (笔画数), Urutan Nama Guratan (横, 竖, 撇, 捺, 点, 折), dan Contoh Kalimat.

### 3. 🎯 Soal Latihan Standar Ujian YCT 2 (25 Soal Lengkap Per Unit)
Setiap unit (Unit 1 sampai 10) memiliki **25 Soal Lengkap** (Total **250 Soal**) sesuai format resmi ujian **Youth Chinese Test (YCT) Level 2**:
1. **Tipe 1: 看图判断对错** (Benar/Salah Berdasarkan Gambar - Soal 1-5)
2. **Tipe 2: 看图选择题** (Pilihan Ganda Gambar A/B/C - Soal 6-10)
3. **Tipe 3: 读对话选答句** (Mencocokkan Tanya-Jawab Dialog - Soal 11-15)
4. **Tipe 4: 选词填空** (Melengkapi Kalimat Rumpang - Soal 16-20)
5. **Tipe 5: 连词成句 / 词义理解** (Menyusun Kalimat / Arti Kosakata - Soal 21-25)

**Fitur Kuis Tambahan**:
- Tombol **🔊 Dengarkan Audio** di setiap nomor soal.
- Papan Skor & Timer Interaktif.
- Pembahasan Lengkap dalam Bahasa Indonesia.
- **🥚 Menetas Telur Dinosaurus (Dino Hatchery)** saat meraih nilai kelulusan.
- **📜 Cetak Sertifikat Kelulusan Bintang Mandarin YCT 2** siap print.

---

## 🥚 4. Fitur Dino Hatchery & Koleksi Dinosaurus
- Selesaikan latihan 25 soal di setiap unit untuk menetaskan 10 spesies dinosaurus legendaris:
  1. Unit 1: 🦖 **Rexy si T-Rex Merah Perkasa**
  2. Unit 2: 🛡️ **Cera si Triceratops Penjaga**
  3. Unit 3: 🦕 **Brachy si Brachiosaurus Tepat Waktu**
  4. Unit 4: 🦅 **Ptero si Pterodactyl Ahli Cuaca**
  5. Unit 5: ⚽ **Spike si Stegosaurus Atlet Sepak Bola**
  6. Unit 6: 🍉 **Spino si Spinosaurus Penggemar Buah**
  7. Unit 7: 🐼 **Anky si Ankylosaurus Sahabat Hewan**
  8. Unit 8: 🎂 **Veloci si Velociraptor Ulang Tahun**
  9. Unit 9: 🚲 **Parasa si Parasaurolophus Penjelajah Taman**
  10. Unit 10: 👑 **Titano si Raksasa Master HAN YU 3**

---

## 🚀 Cara Menjalankan Website

1. Buka folder proyek `HAN YU 3`.
2. Klik ganda file `index.html` untuk membuka langsung di Google Chrome, Microsoft Edge, atau browser lainnya.
3. Atau jalankan server lokal:
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Atau menggunakan Node.js
   npx serve .
   ```
4. Buka alamat `http://localhost:8000` di browser.

---

## 📁 Struktur Berkas

```
HAN YU 3/
├── index.html                   # Halaman Web Aplikasi Utama
├── README.md                    # Dokumentasi & Panduan
├── css/
│   ├── main.css                 # Desain tema dinosaurus & navigasi
│   ├── reading.css              # Tampilan membaca & karaoke audio
│   ├── writing.css              # Tampilan guratan & kisi TianZiGe
│   └── quiz.css                 # Tampilan 25 soal YCT 2 & modal hasil
└── js/
    ├── data/
    │   ├── units-data.js        # Database teks 10 unit Han Yu 3
    │   ├── vocab-data.js        # Database kosakata & guratan karakter
    │   └── yct2-quiz-data.js    # Database 250 Soal YCT 2 (25 soal/unit)
    ├── dino-sounds.js           # Synthesizer efek suara Web Audio API
    ├── audio-player.js          # Web Speech API & Karaoke Sync
    ├── stroke-writer.js         # HanziWriter & Canvas writing test
    ├── yct2-quiz.js             # Engine kuis YCT 2, skor & sertifikat
    └── app.js                   # Main application state controller
```
