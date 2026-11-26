# Panduan Penggunaan Jelajah Algoritma

## Untuk siswa

1. Buka [Jelajah Algoritma](https://jelajah-algoritma.adits.workers.dev/).
2. Masuk ke menu **Materi**, **Misi**, **Latihan**, atau **Kuis**.
3. Pilih salah satu dari sembilan bab. Setelah dipilih, daftar bab menutup dan halaman langsung menampilkan konten bab tersebut.
4. Untuk berpindah ke bab lain, tekan tombol **Ganti Bab** yang berada di bagian atas tampilan fokus. Kamu tidak perlu kembali ke beranda.
5. Pada halaman ringkasan bab, gunakan tombol Materi, Misi, Latihan, atau Kuis untuk langsung membuka bagian yang sesuai.
6. Kerjakan aktivitas sesuai instruksi pada layar. Progres tersimpan otomatis pada browser yang digunakan.

## Status jawaban

- Pada Misi dan Latihan, jawaban benar ditandai hijau dan dikunci. Jawaban yang belum tepat ditandai merah dan masih dapat dicoba kembali.
- Pada Kuis, pilihan yang dipilih berwarna biru selama pengerjaan agar kunci tidak terbocorkan. Setelah kuis dikumpulkan, jawaban benar ditandai hijau dan pilihan salah yang dipilih ditandai merah, disertai pembahasan.
- Pada permainan susun langkah, kartu sumber sengaja diacak tanpa nomor. Nomor urutan hanya muncul pada area susunanmu.

## Progres dan reset

- Progres tersimpan secara lokal pada browser dan perangkat yang digunakan.
- Progres antarperangkat atau antar-browser tidak tersinkron.
- Progres Materi, Misi, Latihan, dan Kuis disimpan per bab.
- Tombol Reset Misi dan Reset Latihan hanya menghapus progres pada menu dan bab yang sedang dipilih. Periksa konfirmasi sebelum melanjutkan.
- Menghapus data situs atau penyimpanan browser dapat menghapus progres lokal.

## Untuk guru / penguji

Website dapat dibuka di laptop, tablet, maupun ponsel melalui browser modern. Untuk uji coba kelas, disarankan menggunakan browser dan perangkat yang sama selama satu rangkaian aktivitas agar progres lokal tetap tersedia.

Website ini belum mengirim nilai ke dashboard guru atau server pusat. Siswa dapat menunjukkan hasil kuis pada perangkat masing-masing.

## Melaporkan bug

Sertakan informasi berikut agar masalah mudah diperiksa:

1. Menu dan bab.
2. Nomor aktivitas atau judul tantangan.
3. Langkah yang dilakukan sebelum bug muncul.
4. Hasil yang muncul dan hasil yang diharapkan.
5. Jenis perangkat dan browser.
6. Screenshot atau rekaman layar bila memungkinkan.

## Google Search Console

Website telah menyertakan berkas verifikasi HTML `googleb0cd1f5fce8c68da.html` pada folder utama. Jangan menghapus atau mengganti nama berkas tersebut selama masih digunakan untuk verifikasi Search Console.

Setelah deploy pembaruan:

1. Buka [Google Search Console](https://search.google.com/search-console).
2. Pilih properti `https://jelajah-algoritma.adits.workers.dev/`.
3. Buka menu **Sitemaps** dan kirim `sitemap.xml` jika status sitemap belum memuat daftar URL terbaru.
4. Gunakan **Inspeksi URL** untuk memeriksa halaman utama atau salah satu URL bab. Pengindeksan Google membutuhkan waktu dan tidak dijamin langsung terjadi setelah sitemap dikirim.

Sitemap: https://jelajah-algoritma.adits.workers.dev/sitemap.xml
