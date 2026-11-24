(() => {
  'use strict';
  const api = window.MisiChapters;
  if (!api?.chapters) return;

  const revisions = {
    1: {
      5: {
        prompt: 'Sebuah tim mengumpulkan catatan kehadiran, nilai, dan hasil survei siswa. Bidang Informatika yang secara khusus mempelajari cara mengolah serta menafsirkan kumpulan data adalah ...',
        options: ['Analisis Data', 'Sistem Komputer', 'Teknologi Informasi dan Komunikasi', 'Praktika Lintas Bidang Informatika'],
        correct: 0,
        explain: 'Analisis Data berfokus pada pengumpulan, pengolahan, dan penafsiran data untuk memperoleh informasi.'
      }
    },
    3: {
      1: {
        prompt: 'Ponsel menerima perintah lisan seperti “atur alarm pukul enam”. Jenis antarmuka yang memungkinkan pengguna memberi perintah melalui suara disebut ...',
        options: ['Voice User Interface (VUI)', 'Graphical User Interface (GUI)', 'Command Line Interface (CLI)', 'Tombol fisik pada perangkat'],
        correct: 0,
        explain: 'VUI memungkinkan pengguna berinteraksi dengan perangkat melalui perintah suara. GUI memakai elemen grafis, sedangkan CLI menggunakan perintah teks.'
      },
      14: {
        prompt: 'Kamu ingin memindahkan dokumen dari folder Unduhan ke folder Tugas tanpa membuat salinan ganda. Langkah yang tepat adalah ...',
        options: ['Pilih file, gunakan Cut, buka folder Tugas, lalu Paste', 'Buka mesin pencari dan ketik nama file', 'Ubah ekstensi file agar berpindah sendiri', 'Refresh halaman peramban beberapa kali'],
        correct: 0,
        explain: 'Cut dan Paste memindahkan file dari lokasi asal ke folder tujuan. Pastikan folder tujuan sudah benar sebelum menempelkan file.'
      }
    },
    4: {
      0: {
        prompt: 'Saat kamu mengetik nama pada keyboard, perangkat tersebut berperan sebagai ...',
        options: ['Perangkat masukan (input)', 'Perangkat pemroses (process)', 'Perangkat keluaran (output)', 'Penyimpanan sekunder (storage)'],
        correct: 0,
        explain: 'Keyboard mengirimkan karakter yang ditekan pengguna ke komputer sebagai data masukan.'
      },
      13: {
        prompt: 'Manakah contoh perangkat lunak sistem yang mengelola sumber daya komputer dan menyediakan layanan bagi aplikasi?',
        options: ['Sistem operasi', 'Aplikasi menggambar', 'Dokumen presentasi', 'File foto'],
        correct: 0,
        explain: 'Sistem operasi termasuk perangkat lunak sistem. Aplikasi menggambar adalah perangkat lunak aplikasi, sedangkan dokumen dan foto merupakan file.'
      },
      16: {
        prompt: 'Bilangan biner 101 memiliki nilai desimal ...',
        options: ['3', '4', '5', '6'],
        correct: 2,
        explain: 'Nilai tempat dari kanan adalah 1, 2, dan 4. Jadi 101₂ = (1 × 4) + (0 × 2) + (1 × 1) = 5.'
      },
      17: {
        prompt: 'Pada bilangan biner 101, nilai tempat digit paling kiri adalah ...',
        options: ['1', '2', '4', '8'],
        correct: 2,
        explain: 'Dari kanan ke kiri, nilai tempat biner berturut-turut adalah 1, 2, lalu 4. Digit paling kiri pada 101 menempati nilai 4.'
      }
    },
    5: {
      5: {
        prompt: 'Di laboratorium, beberapa komputer menggunakan satu printer yang terhubung ke jaringan lokal. Kemampuan jaringan yang dimanfaatkan adalah ...',
        options: ['Berbagi sumber daya antarperangkat', 'Mengubah semua komputer menjadi server internet', 'Menghapus kebutuhan perangkat keluaran', 'Mengganti sistem operasi seluruh komputer'],
        correct: 0,
        explain: 'Jaringan lokal dapat digunakan untuk berbagi sumber daya, misalnya printer, sehingga beberapa perangkat dapat memakainya.'
      },
      9: {
        prompt: 'Seseorang memeriksa saldo dan melakukan transfer melalui layanan bank di internet. Layanan tersebut disebut ...',
        options: ['E-learning', 'E-commerce', 'E-banking', 'E-government'],
        correct: 2,
        explain: 'E-banking adalah layanan perbankan yang memanfaatkan jaringan internet, misalnya untuk memeriksa rekening atau melakukan transfer.'
      },
      14: {
        prompt: 'Apa ciri utama metode Caesar Cipher?',
        options: ['Setiap huruf diganti dengan huruf lain berdasarkan pergeseran alfabet', 'Setiap huruf dihapus lalu diganti angka acak', 'Pesan diubah menjadi gambar tanpa aturan', 'Urutan kata dibalik tanpa mengubah huruf'],
        correct: 0,
        explain: 'Caesar Cipher merupakan metode substitusi sederhana: huruf pada pesan diganti berdasarkan pergeseran posisi dalam alfabet.'
      },
      16: {
        prompt: 'Di laboratorium, laptop dapat tersambung secara nirkabel ke jaringan sekolah melalui perangkat yang menyediakan akses Wi-Fi. Perangkat tersebut disebut ...',
        options: ['Access Point', 'Router', 'Modem', 'Hotspot'],
        correct: 0,
        explain: 'Access Point memungkinkan perangkat dengan kemampuan Wi-Fi terhubung ke jaringan lokal atau jaringan internet.'
      }
    },
    6: {
      13: {
        prompt: 'Pada formula spreadsheet, referensi sel A2 disalin satu baris ke bawah menjadi A3. Jenis referensi yang menyesuaikan posisi seperti ini disebut ...',
        options: ['Referensi relatif', 'Referensi absolut', 'Nama worksheet', 'Format angka'],
        correct: 0,
        explain: 'Referensi relatif menyesuaikan alamat sel mengikuti perpindahan posisi formula saat disalin.'
      }
    },
    7: {
      16: {
        prompt: 'Apa keuntungan menggunakan akun Scratch yang sama ketika kembali mengerjakan proyek pada kesempatan berikutnya?',
        options: ['Proyek yang disimpan pada akun dapat dibuka kembali', 'Semua blok program berubah menjadi benar secara otomatis', 'Sprite akan bergerak tanpa instruksi', 'Panggung tidak lagi membutuhkan backdrop'],
        correct: 0,
        explain: 'Akun Scratch dapat membantu menyimpan proyek sehingga hasil pekerjaan dapat dibuka kembali saat pengguna masuk dengan akun yang sama.'
      }
    },
    8: {
      0: {
        prompt: 'Teknologi yang mampu mengotomatisasi sebagian pekerjaan manusia dapat membawa dampak sosial berupa ...',
        options: ['Perubahan jenis pekerjaan dan keterampilan yang dibutuhkan', 'Hilangnya seluruh pekerjaan tanpa muncul pekerjaan baru', 'Tidak adanya perubahan pada dunia kerja', 'Semua orang harus bekerja dengan perangkat yang sama'],
        correct: 0,
        explain: 'Otomatisasi dapat mengurangi kebutuhan pada beberapa jenis tugas, tetapi perkembangan teknologi juga dapat memunculkan pekerjaan baru.'
      },
      6: {
        prompt: 'Sekolah membagikan materi dan menerima tugas dalam bentuk berkas digital sehingga tidak perlu mencetak banyak kertas. Praktik ini mendukung konsep ...',
        options: ['Paperless atau lingkungan tanpa kertas', 'E-learning atau pembelajaran daring', 'E-commerce atau perdagangan daring', 'Internet of Things atau perangkat terhubung'],
        correct: 0,
        explain: 'Penggunaan berkas digital dapat mengurangi kebutuhan mencetak dokumen sehingga mendukung lingkungan tanpa kertas (paperless). '
      },
      7: {
        prompt: 'Lampu rumah, ponsel, dan perangkat lain terhubung ke internet sehingga dapat dipantau atau dikendalikan melalui aplikasi. Teknologi ini dikenal sebagai ...',
        options: ['Internet of Things (IoT)', 'Pengolah kata', 'Penyimpanan sekunder', 'Pemrograman unplugged'],
        correct: 0,
        explain: 'Internet of Things menghubungkan perangkat ke jaringan sehingga perangkat dapat bertukar data atau dikendalikan melalui layanan digital.'
      },
      9: {
        prompt: 'Sebelum proyek kelompok dikerjakan secara daring, tim sebaiknya menyepakati tujuan dan dokumen kerja yang memuat ...',
        options: ['Sasaran, langkah menuju sasaran, dan pembagian tugas', 'Kata sandi pribadi seluruh anggota', 'Daftar akun media sosial yang tidak terkait proyek', 'Komentar bebas tanpa catatan keputusan'],
        correct: 0,
        explain: 'Dokumentasi kolaborasi membantu anggota memahami sasaran, langkah kerja, dan tanggung jawab masing-masing.'
      }
    },
    9: {
      6: {
        prompt: 'Pada papan Makey Makey, beberapa lubang masukan di bagian depan dapat mewakili tombol ...',
        options: ['Panah, spasi, dan klik', 'Angka 0 sampai 9 saja', 'Tombol daya monitor', 'Tombol volume speaker'],
        correct: 0,
        explain: 'Lubang masukan di bagian depan Makey Makey dapat digunakan untuk menggantikan tombol panah, spasi, dan klik.'
      },
      7: {
        prompt: 'Dalam percobaan Makey Makey, wortel dan uang logam dapat digunakan sebagai bahan sentuh. Mengapa keduanya dapat berfungsi sebagai masukan?',
        options: ['Karena bahan tersebut dapat menghantarkan listrik', 'Karena semua benda padat selalu menghantarkan listrik', 'Karena warnanya mudah dikenali komputer', 'Karena benda tersebut menyimpan program Scratch'],
        correct: 0,
        explain: 'Benda yang bersifat konduktor dapat menghantarkan arus sehingga sentuhan dapat terdeteksi sebagai masukan pada rangkaian.'
      },
      8: {
        prompt: 'Kelompok membuat drum set sederhana dengan Makey Makey. Dalam pemetaan tombol pada contoh proyek di buku, tombol spasi digunakan untuk memainkan ...',
        options: ['Bass drum', 'Snare drum', 'Hi-hat', 'Crash cymbal'],
        correct: 0,
        explain: 'Pada pemetaan contoh drum set, tombol spasi dihubungkan dengan bass drum; tombol panah digunakan untuk instrumen lainnya.'
      },
      13: {
        prompt: 'Saat menyiapkan papan Makey Makey untuk digunakan bersama komputer, kabel USB berfungsi untuk ...',
        options: ['Menghubungkan papan Makey Makey dengan komputer', 'Mengubah uang logam menjadi speaker', 'Menghapus program Scratch', 'Mengganti seluruh kabel klip buaya'],
        correct: 0,
        explain: 'Papan Makey Makey dihubungkan ke komputer melalui port USB agar dapat berkomunikasi dengan komputer.'
      },
      16: {
        prompt: 'Kelompok menggunakan proyek drum set dari Scratch sebagai dasar artefak. Apa yang perlu dilakukan untuk menghargai karya yang digunakan?',
        options: ['Mencantumkan sumber proyek yang dimanfaatkan', 'Menghapus nama pembuat aslinya', 'Mengaku membuat seluruh program dari awal', 'Menyebarkan ulang tanpa menyebut sumber'],
        correct: 0,
        explain: 'Buku mengingatkan agar sumber proyek yang digunakan dituliskan untuk menghargai hasil karya orang lain.'
      }
    }
  };

  Object.entries(revisions).forEach(([chapterId, items]) => {
    const chapter = api.chapters[chapterId];
    if (!chapter?.quiz) return;
    Object.entries(items).forEach(([questionIndex, replacement]) => {
      const index = Number(questionIndex);
      if (!chapter.quiz[index]) return;
      chapter.quiz[index] = { ...chapter.quiz[index], ...replacement };
    });
  });
})();
