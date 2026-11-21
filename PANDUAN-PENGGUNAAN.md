# Panduan Penggunaan — MISI ALGORITMA V22

Pembaruan V22 menampilkan kembali banner “Pertanyaan Pemantik” pada seluruh halaman Materi. Setiap bab memiliki pertanyaan dan pengantar yang sesuai dengan topiknya, dengan urutan cover RUANG PENJELAJAHAN → PERTANYAAN PEMANTIK → heading materi → kartu topik. Label toolbar Misi tetap “PROGRES PETUALANGAN · BAB XX”. Konten, kunci penyimpanan progres, dan progres V21 tetap dipertahankan.

# Panduan Penggunaan MISI ALGORITMA V19

🌐 **Website:** https://jelajah-algoritma.adits.workers.dev/

## Mengenal menu

Website memiliki empat menu utama. Setiap menu menyediakan pilihan Bab 1 sampai Bab 9.

- **Materi:** pelajari konsep, contoh, dan ilustrasi setiap bab.
- **Misi:** selesaikan 10 level. Setiap bab memiliki arena tematik yang berbeda dan permainan yang benar-benar dapat dimainkan. Bab 1 memakai suasana workshop tim, Bab 3 desktop digital, Bab 4 laboratorium sistem, Bab 5 peta jaringan, Bab 6 observatorium data, Bab 7 Scratch playground, Bab 8 ruang keamanan digital, dan Bab 9 maker studio. Permainan dapat berupa mencocokkan kartu, menyusun langkah, memilah informasi, mencari item ganjil, memilih strategi, atau menavigasi arena. Bab 2 tetap memakai robot, pola, dan puzzle khasnya, tetapi tata letak cover, progress, reset, dan jarak antarbagiannya sudah disamakan.
- **Latihan:** lima aktivitas awal berupa mini-game (cocokkan pasangan, susun langkah, klasifikasi, cari yang ganjil, dan pilih strategi), dilanjutkan sepuluh latihan logika. Pada permainan Susun Langkah, ketuk kartu dalam urutan pilihanmu, lihat susunan kartu yang terkumpul, lalu tekan **Periksa Urutan**. Jika belum tepat, tekan **Atur Ulang** untuk mencoba lagi.
- **Kuis:** jawab 20 soal dengan empat pilihan A, B, C, dan D satu per satu, lalu kumpulkan untuk melihat nilai dan pembahasan.

## Alur belajar yang disarankan

1. Pilih bab pada menu Materi.
2. Baca pokok bahasan dan contoh visual.
3. Tekan **Saya sudah memahami** untuk membuka konfirmasi menuju Misi.
4. Selesaikan 10 misi. Pilih kartu aksi yang sesuai dengan target dan situasi pada arena.
5. Setelah seluruh Misi selesai, pop-up menawarkan perpindahan ke Latihan.
6. Kerjakan 15 aktivitas Latihan. Setelah semuanya selesai, pop-up menawarkan Kuis.
7. Jawab 20 pertanyaan Kuis dan kumpulkan jawaban untuk melihat nilai serta pembahasan.

## Pengalaman khusus Bab 2

Bab 2 mempertahankan robot bergerak satu petak per langkah, gelang warna, debugging, optimasi ember, struktur data, representasi data, puzzle kata rahasia, dan jadwal paralel. Lima mini-game Latihan dan sepuluh latihan logika ditampilkan sebagai satu rangkaian tanpa subbagian latihan lanjutan. Tombol Reset Misi hanya tampil sekali dalam bar progres di bawah cover bab.

## Progres dan reset

**Catatan V19:** karena ada perubahan struktur progres dan interaksi permainan, progres lokal dari versi sebelumnya direset saat pertama kali membuka V19. Setiap siswa memulai progres baru pada browsernya.


- Jawaban dan progres tersimpan otomatis pada browser yang digunakan.
- Refresh halaman tidak menghapus progres.
- **Reset Misi** hanya menghapus progres Misi pada bab yang dipilih. Tombol Reset Misi berada di bagian atas arena dan hanya tampil satu kali.
- **Reset Latihan** hanya menghapus progres Latihan pada bab yang dipilih.
- Progres tidak tersinkron antarperangkat.
- Menghapus data situs dari browser dapat menghapus progres lokal.

## Menjalankan secara lokal

1. Unduh atau clone repository.
2. Pastikan `index.html`, folder `css/`, dan folder `js/` berada di root proyek.
3. Buka `index.html` dengan browser modern atau gunakan Live Server.

## Memperbarui GitHub

Salin isi paket versi terbaru ke root repository. Timpa file yang berubah, tetapi jangan menghapus folder `.git`. Kemudian jalankan:

```bash
git add .
git commit -m "Perbarui arena misi dan perbaiki mini-game susun langkah"
git push
```

## Catatan untuk guru

Materi diselaraskan dengan judul dan cakupan buku *Informatika untuk SMP Kelas VII* (2021). Misi, latihan, kuis, dan ilustrasi merupakan pengembangan untuk media pembelajaran ini. Tinjau kembali konten serta tingkat kesulitannya sebelum digunakan untuk penilaian formal.

## Melaporkan masalah

Saat menemukan bug, catat menu, bab, nomor aktivitas, langkah yang dilakukan, hasil yang muncul, hasil yang diharapkan, jenis perangkat, dan browser. Sertakan screenshot atau rekaman layar bila memungkinkan.


## Pembaruan V19

- Template Bab 2 diselaraskan dengan bab lain, termasuk heading materi dan progres kuis.
- Jarak antara cover bab, progress bar, tombol reset, tab misi, dan isi aktivitas diperjelas.
- Tombol reset Bab 2 dipastikan hanya muncul satu kali pada menu Misi dan Latihan.
- Progres lokal dimulai ulang pada V19; progres dari V18 tidak dibawa ke versi ini.
