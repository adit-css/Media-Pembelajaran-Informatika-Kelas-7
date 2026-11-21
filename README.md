# MISI ALGORITMA — V10

Media pembelajaran interaktif Informatika kelas VII tentang berpikir komputasional, algoritma, pola, solusi efektif dan efisien, optimasi penjadwalan, struktur data, representasi data, dan abstraksi.

## Fitur
- Materi pembelajaran dengan delapan topik.
- Delapan misi interaktif: tiga jalur robot, dua tantangan gelang, debugging, optimasi waktu, dan representasi data ya/tidak.
- Robot bergerak satu petak demi satu petak.
- Umpan balik misi tidak membocorkan solusi saat siswa salah.
- Misi berikutnya terbuka otomatis setelah misi sebelumnya berhasil.
- Delapan latihan dengan umpan balik, alasan jawaban benar, dan ilustrasi pada Latihan 3.
- Kuis akhir dengan 15 soal, nilai otomatis, dan pembahasan.
- Jawaban benar dan progres Misi/Latihan tersimpan di browser melalui `localStorage`; jawaban yang benar terkunci hingga bagian terkait di-reset.
- Tombol **Reset Misi** dan **Reset Latihan** dengan konfirmasi terpisah.
- Tampilan responsif untuk laptop dan HP.
- Perpindahan misi didahului hitung mundur 5 detik; pop-up akhir tahap didahului pemberitahuan 3 detik.
- Tombol Reset Misi ditempatkan di bagian atas daftar misi.

## Menjalankan secara lokal
1. Ekstrak ZIP.
2. Buka `index.html` menggunakan Chrome, Edge, Firefox, atau Safari.

## Struktur proyek
- `index.html`: struktur halaman dan konten.
- `css/style.css`: tampilan, responsivitas, animasi, dan pop-up.
- `js/main.js`: navigasi, penyimpanan progres, reset, dan aktivitas Latihan.
- `js/game.js`: aktivitas Misi, robot, gelang, debugging, dan tantangan data.
- `js/kuis.js`: 15 soal Kuis dan penilaian.

## Penyimpanan dan reset
- Progres serta jawaban benar tetap tampil setelah halaman di-refresh pada browser/perangkat yang sama.
- **Reset Misi** menghapus status hijau dan jawaban delapan misi saja. Progres Latihan dan nilai Kuis tidak ikut terhapus.
- **Reset Latihan** menghapus status selesai dan jawaban delapan latihan saja. Progres Misi dan nilai Kuis tidak ikut terhapus.
- Kedua tombol meminta konfirmasi sebelum menghapus.
- Jika siswa ingin mengulang dari awal setelah progres lama sudah lengkap, gunakan tombol reset pada bagian terkait.
- Data tidak dikirim ke dashboard guru dan tidak tersinkron antarperangkat.

## Update di Cloudflare
1. Buka Cloudflare Dashboard → **Workers & Pages**.
2. Pilih Worker yang saat ini digunakan website.
3. Klik **New deployment**.
4. Pilih **Production**.
5. Unggah ZIP V10 atau folder yang berisi `index.html`, `css/`, dan `js/` di tingkat teratas.
6. Klik **Deploy**. URL website tetap sama.


## V10
Jawaban benar dikunci, tersedia reset terpisah untuk Misi dan Latihan, perpindahan misi diberi hitung mundur 5 detik, dan pop-up akhir tahap didahului pemberitahuan 3 detik.
