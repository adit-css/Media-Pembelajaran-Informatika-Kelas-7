# Panduan Penggunaan MISI ALGORITMA V10

## Untuk guru
1. Bagikan tautan website kepada siswa.
2. Minta siswa membuka Beranda, memilih Mulai Belajar, lalu membaca materi.
3. Setelah menekan **Saya sudah memahami**, siswa dapat memilih untuk memulai Misi 1.
4. Selesaikan delapan misi secara berurutan. Misi 1–3 memakai robot yang bergerak satu langkah setiap instruksi. Misi lainnya melatih pola, debugging, optimasi, dan representasi data.
5. Jawaban salah pada Misi tidak langsung membocorkan cara atau jawaban yang benar.
6. Setelah jawaban benar, pilihan dikunci dan siswa melihat alasan singkat. Misi berikutnya diumumkan melalui hitung mundur 5 detik, lalu terbuka otomatis. Setelah Misi 8, pemberitahuan 3 detik muncul sebelum pop-up menawarkan perpindahan ke Latihan.
7. Latihan terdiri dari delapan soal dengan umpan balik. Jawaban benar disertai alasan.
8. Setelah seluruh latihan selesai, pemberitahuan 3 detik muncul sebelum pop-up menawarkan perpindahan ke Kuis.
9. Kuis akhir berisi 15 soal dengan nilai dan pembahasan otomatis.

## Untuk siswa
- Baca materi sebelum memulai misi.
- Susun instruksi robot dan perhatikan geraknya satu per satu.
- Jika jawaban belum tepat, baca umpan balik lalu coba lagi.
- Selesaikan semua delapan misi dan delapan latihan.
- Jawaban yang sudah benar akan terkunci agar tidak dapat diganti. Jawaban salah tetap dapat dicoba kembali.
- Jawaban benar dan progres akan tersimpan pada browser/perangkat yang sama meskipun halaman di-refresh.

## Tombol reset
- **Reset Misi** berada di bagian atas halaman Misi, tepat sebelum daftar tab misi. Tombol ini menghapus status hijau dan jawaban tersimpan pada semua delapan misi, kemudian mengembalikan tantangan ke kondisi awal.
- **Reset Latihan** berada di panel progres bagian atas halaman Latihan. Tombol ini menghapus status selesai dan jawaban tersimpan pada semua delapan latihan.
- Setiap reset menampilkan pop-up konfirmasi. Pilih **Batal** jika tidak jadi menghapus.
- Reset Misi tidak menghapus progres Latihan. Reset Latihan tidak menghapus progres Misi. Nilai Kuis juga tidak ikut terhapus.

## Memperbarui website Cloudflare yang sudah online
1. Buka Cloudflare Dashboard → **Workers & Pages**.
2. Pilih Worker yang sekarang dipakai website.
3. Klik **New deployment**.
4. Pilih **Production**, bukan Preview.
5. Unggah ZIP V10 atau folder proyek yang berisi `index.html`, `css/`, dan `js/` di tingkat teratas.
6. Klik **Deploy**. URL Worker yang lama tetap digunakan.

## Catatan teknis
- Website statis; tidak memerlukan database, login, atau backend.
- Progres tersimpan secara lokal melalui `localStorage`. Progres tidak otomatis terkumpul pada dashboard guru dan tidak tersinkron antarperangkat.
- Hindari memasukkan data pribadi siswa ke website publik.


## Pembaruan V10
- Jawaban yang sudah benar dikunci sehingga tidak dapat diganti. Untuk mencoba ulang, gunakan Reset Misi atau Reset Latihan.
- Reset Misi berada di bagian atas sebelum daftar tab misi.
- Misi berikutnya menampilkan pemberitahuan dan hitung mundur 5 detik sebelum dibuka otomatis.
- Setelah seluruh misi atau latihan selesai, pemberitahuan hitung mundur 3 detik muncul sebelum pop-up perpindahan ditampilkan.
- Progres tetap tersimpan setelah refresh. Reset Misi dan Reset Latihan bekerja terpisah.

## Perpindahan otomatis
- Setelah jawaban Misi benar, pemberitahuan menampilkan nama misi berikutnya dan hitung mundur 5 detik. Siswa tidak perlu menekan tombol untuk berpindah.
- Setelah seluruh Misi atau Latihan selesai, pemberitahuan hitung mundur 3 detik muncul sebelum pop-up konfirmasi tahap berikutnya.
