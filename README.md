<div align="center">

# ✦ JELAJAH ALGORITMA
### Petualangan Belajar Informatika Kelas VII

**Belajar konsepnya. Jelajahi dunianya. Pecahkan tantangannya.**

[🌐 **BUKA WEBSITE JELAJAH ALGORITMA**](https://jelajah-algoritma.adits.workers.dev/)

![Static Website](https://img.shields.io/badge/Website-Online-78d5a7?style=for-the-badge)
![Bab](https://img.shields.io/badge/Bab-9-82c8ff?style=for-the-badge)
![Misi](https://img.shields.io/badge/Misi-90-c6f36b?style=for-the-badge)
![Latihan](https://img.shields.io/badge/Latihan-135-ffb66b?style=for-the-badge)
![Kuis](https://img.shields.io/badge/Kuis-180-a99cff?style=for-the-badge)

</div>

---

## 🚀 Tentang proyek

**Jelajah Algoritma** adalah media pembelajaran interaktif Informatika kelas VII SMP. Siswa belajar lewat materi visual, cerita, misi, puzzle, mini-game, latihan logika, dan kuis. Setiap bab memiliki tema petualangan yang mengikuti materi bab tersebut.

> **Mulai petualangan:** [jelajah-algoritma.adits.workers.dev](https://jelajah-algoritma.adits.workers.dev/)

## 🧭 Jelajahi 9 bab

| Bab | Topik pembelajaran |
|---|---|
| 01 | Informatika dan Keterampilan Generik |
| 02 | Berpikir Komputasional |
| 03 | Teknologi Informasi dan Komunikasi |
| 04 | Sistem Komputer |
| 05 | Jaringan Komputer dan Internet |
| 06 | Analisis Data |
| 07 | Algoritma dan Pemrograman |
| 08 | Dampak Sosial Informatika |
| 09 | Praktika Lintas Bidang Informatika |

Setiap bab memiliki menu **Materi, Misi, Latihan, dan Kuis**. Progres setiap bab disimpan secara terpisah.

## 🎮 Isi petualangan

| Aktivitas | Jumlah per bab | Total 9 bab |
|---|---:|---:|
| Misi | 10 | **90** |
| Latihan | 15 | **135** |
| Kuis | 20 | **180** |

**Total: 405 aktivitas pembelajaran.** Materi mengikuti cakupan buku *Informatika untuk SMP Kelas VII*, dengan skenario dan interaksi yang dikembangkan untuk media ini.

## ✨ Fitur utama

- **Belajar per bab.** Pilih bab yang sedang dipelajari dari setiap menu.
- **Materi visual.** Konsep dilengkapi contoh dan ilustrasi yang berkaitan dengan kehidupan sehari-hari.
- **Arena misi tematik.** Misi di setiap bab punya tema berbeda: workshop tim, robot, desktop digital, laboratorium sistem komputer, peta jaringan, observatorium data, Scratch playground, keamanan digital, dan maker studio.
- **Interaksi langsung.** Susun langkah, pasangkan kartu, pilah kategori, cari kejanggalan, pilih strategi, dan navigasikan karakter menuju tujuan.
- **Latihan bervariasi.** Lima aktivitas awal setiap bab berupa mini-game dengan mekanik berbeda, diikuti sepuluh latihan logika berbasis situasi.
- **Kuis bertahap.** Setiap kuis berisi 20 soal dengan pilihan A, B, C, dan D. Nilai serta pembahasan ditampilkan setelah kuis dikumpulkan.
- **Progres terpisah.** Progres Materi, Misi, Latihan, dan Kuis disimpan per bab. Reset hanya memengaruhi bagian dan bab yang dipilih.
- **Responsif.** Tampilan menyesuaikan laptop, tablet, dan ponsel.

## 🧩 Tema Misi setiap bab

| Bab | Dunia / tema Misi |
|---|---|
| 01 | Workshop Tim — pembagian peran, rencana, dan komunikasi proyek |
| 02 | Petualangan Robot — labirin, pola, debugging, dan optimasi |
| 03 | Digital Desk — pengelolaan file, aplikasi, pencarian, dan surel |
| 04 | System Lab — input, proses, output, komponen, dan penyimpanan |
| 05 | Network Navigator — koneksi, rute data, dan keamanan |
| 06 | Data Observatory — tabel, grafik, dan pengolahan data |
| 07 | Scratch Playground — sprite, blok program, dan debugging |
| 08 | Cyber Guardian — keamanan akun, privasi, dan etika digital |
| 09 | Maker Studio — Makey Makey, input-output, dan pengujian artefak |

## 🖥️ Teknologi

Proyek ini menggunakan teknologi web statis:

- HTML
- CSS
- JavaScript
- `localStorage` untuk menyimpan progres di browser
- Cloudflare Workers untuk publikasi website

Tidak membutuhkan database, backend, instalasi aplikasi, atau akun siswa.

## ▶️ Menjalankan di komputer

1. Unduh atau clone repository ini.
2. Buka folder proyek.
3. Buka `index.html` menggunakan browser modern atau jalankan melalui Live Server.

Struktur folder:

```text
jelajah-algoritma/
├── index.html
├── favicon-96.png
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── game.js
│   ├── kuis.js
│   ├── chapters.js
│   ├── chapter-expansion.js
│   ├── quiz-fourth-options.js
│   ├── quiz-content-repairs.js
│   ├── quiz-quality.js
│   ├── practice-games.js
│   ├── mission-games.js
│   └── bab2-extras.js
├── README.md
└── PANDUAN-PENGGUNAAN.md
```

## 🔎 Google Search dan SEO

Website dilengkapi judul halaman, deskripsi, canonical URL, metadata saat tautan dibagikan, data terstruktur `WebSite` dan `LearningResource`, favicon, `robots.txt`, serta `sitemap.xml`.

Untuk mendaftarkan website ke Google Search Console:

1. Tambahkan properti **Awalan URL (URL Prefix)** dengan alamat `https://jelajah-algoritma.adits.workers.dev/`.
2. Pilih metode verifikasi **Tag HTML**.
3. Tempel tag verifikasi yang diberikan Google ke bagian `<head>` pada `index.html`, tepat di bawah komentar `Google Search Console`.
4. Simpan, push ke GitHub, deploy ke Cloudflare, lalu klik **Verifikasi** di Search Console.
5. Setelah terverifikasi, kirim sitemap `https://jelajah-algoritma.adits.workers.dev/sitemap.xml` melalui menu Sitemaps.

Tag verifikasi HTML memang terlihat di source halaman. Tag tersebut bukan password atau API key; jangan mengunggah kredensial akun atau private key.

## 📈 Progres dan penyimpanan

- Progres tersimpan otomatis pada browser dan perangkat masing-masing siswa.
- Progres tidak tersinkron antarperangkat atau antarbrowser.
- Belum tersedia dashboard guru untuk mengumpulkan nilai siswa secara terpusat.
- Menghapus data situs browser dapat menghapus progres lokal.

## 🎲 Cara belajar yang disarankan

1. Pilih bab yang sedang dipelajari.
2. Baca materi dan lihat contoh visual.
3. Masuk ke Misi dan jelajahi tantangan sesuai tema bab.
4. Kerjakan mini-game dan latihan logika.
5. Akhiri dengan Kuis 20 soal untuk melihat hasil pemahaman.

## 📚 Acuan materi

Judul bab dan cakupan bahasan mengikuti buku *Informatika untuk SMP Kelas VII* (Irya Wisnubhadra dkk., 2021). Skenario, pertanyaan, ilustrasi, dan aktivitas merupakan pengembangan untuk media pembelajaran ini, bukan salinan keseluruhan isi buku.

## 💬 Masukan dan laporan bug

Saat menemukan masalah, sertakan:

1. Menu dan bab tempat masalah ditemukan.
2. Nomor aktivitas atau judul tantangan.
3. Langkah yang dilakukan sebelum masalah muncul.
4. Hasil yang terjadi dan hasil yang diharapkan.
5. Perangkat dan browser yang digunakan.
6. Screenshot atau rekaman layar bila memungkinkan.

---

<div align="center">

**Terima kasih sudah ikut menjelajah!** ✦  
[🌐 **Buka Jelajah Algoritma**](https://jelajah-algoritma.adits.workers.dev/)

*Belajar berpikir, bukan sekadar menghafal.*

</div>
