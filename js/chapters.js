(() => {
  'use strict';

  const CHAPTER_KEY = 'misiAlgoritmaChapterProgressV4';
  const SELECTION_KEY = 'misiAlgoritmaChapterSelectionV1';
  const chapters = {
    1: {
      title: 'Informatika dan Keterampilan Generik', short: 'Informatika & kerja tim', theme: 'Kenali informatika dan belajar bekerja sama.',
      objective: 'Memahami ruang lingkup Informatika, keterampilan generik, kerja kelompok, pembagian peran, dan cara menyampaikan hasil kerja.',
      topics: [
        ['Apa itu Informatika?', 'Informatika mempelajari komputasi, perancangan sistem, dan cara menggunakan prinsip komputasi untuk menyelesaikan masalah. Informatika bukan hanya belajar memakai komputer, tetapi juga memahami cara kerja dan merancang solusi.', 'Contoh: membuat aplikasi sederhana, mengatur informasi, atau merancang langkah agar pekerjaan lebih mudah.'],
        ['Bidang pengetahuan Informatika', 'Informatika memiliki beberapa bidang yang saling berhubungan, seperti berpikir komputasional, teknologi informasi dan komunikasi, sistem komputer, jaringan komputer, analisis data, algoritma dan pemrograman, dampak sosial, serta praktika lintas bidang.', 'Ketika membuat aplikasi, kita dapat memakai algoritma, mengolah data, memahami perangkat, dan mempertimbangkan dampaknya bagi pengguna.'],
        ['Bekerja dalam kelompok', 'Kerja kelompok yang baik dimulai dengan memahami tujuan, membagi peran, menyusun rencana, melaksanakan tugas, dan memeriksa hasil bersama. Pembagian tugas sebaiknya adil dan sesuai kemampuan anggota.', 'Contoh: pada pameran kelas, ada anggota yang menyiapkan poster, mengatur perlengkapan, mendokumentasikan, dan mempresentasikan hasil.'],
        ['Mengomunikasikan hasil kerja', 'Hasil pekerjaan perlu disampaikan dengan jelas agar orang lain memahami tujuan, proses, dan hasilnya. Informasi dapat disajikan melalui penjelasan lisan, laporan, poster, atau presentasi.', 'Presentasi yang baik menggunakan informasi yang relevan, urutan yang jelas, dan media yang mudah dibaca.']
      ],
      missions: [
        {title:'Tim pameran kelas', story:'Kelompokmu akan membuat stan pameran Informatika. Setiap anggota memiliki tugas berbeda.', prompt:'Pembagian tugas mana yang paling membantu pekerjaan berjalan teratur?', options:['Semua anggota mengerjakan poster yang sama','Tugas dibagi sesuai kebutuhan dan kemampuan, lalu satu orang mengoordinasikan','Tidak perlu rencana, setiap orang memilih pekerjaan sendiri'], correct:1, explain:'Pembagian peran yang jelas menghindari pekerjaan bertumpuk dan memastikan semua kebutuhan stan ditangani.'},
        {title:'Menyusun rencana kerja', story:'Stan harus siap sebelum pukul 10.00. Poster, meja, dan perangkat perlu disiapkan.', prompt:'Apa yang sebaiknya dilakukan sebelum mulai bekerja?', options:['Menentukan tujuan, membagi tugas, dan menyepakati urutan pekerjaan','Langsung mulai tanpa membicarakan tugas','Menunggu satu orang mengerjakan semuanya'], correct:0, explain:'Perencanaan membantu kelompok mengetahui tujuan, kebutuhan, pembagian tugas, dan waktu yang tersedia.'},
        {title:'Laporan hasil proyek', story:'Proyek kelompokmu sudah selesai dan akan dipresentasikan di depan kelas.', prompt:'Informasi apa yang paling penting disampaikan dalam presentasi hasil?', options:['Hanya nama anggota kelompok','Tujuan, proses pengerjaan, hasil, dan hal yang dipelajari','Cerita yang tidak berhubungan dengan proyek'], correct:1, explain:'Presentasi yang baik menjelaskan apa yang ingin dicapai, bagaimana prosesnya, apa hasilnya, dan pelajaran yang diperoleh.'}
      ],
      practice: [
        {title:'Mengenali Informatika', prompt:'Kegiatan mana yang paling menunjukkan penerapan ilmu Informatika?', options:['Menghafal nama seluruh merek komputer','Merancang aplikasi sederhana untuk mencatat peminjaman buku','Menghias sampul buku tanpa tujuan pengolahan informasi'], correct:1, explain:'Merancang aplikasi untuk mencatat peminjaman buku menggunakan komputasi untuk mengelola informasi dan membantu menyelesaikan masalah.'},
        {title:'Tugas koordinator', prompt:'Dalam kelompok besar, apa salah satu tugas koordinator?', options:['Mengerjakan semua tugas sendirian','Mengatur pembagian tugas dan memeriksa kemajuan pekerjaan','Melarang anggota menyampaikan pendapat'], correct:1, explain:'Koordinator membantu pekerjaan berjalan teratur dengan mengatur koordinasi dan memeriksa kemajuan tim.'},
        {title:'Kerja inklusif', prompt:'Seorang anggota memiliki kemampuan menggambar, sedangkan anggota lain pandai berbicara. Apa tindakan yang tepat?', options:['Memberi tugas sesuai kekuatan masing-masing dan tetap melibatkan keduanya','Hanya memberi tugas kepada anggota yang paling pandai','Membiarkan satu anggota tidak berkontribusi'], correct:0, explain:'Pembagian tugas sesuai kemampuan membuat setiap anggota dapat berkontribusi dan tetap menjadi bagian dari tim.'},
        {title:'Media komunikasi', prompt:'Kelompok ingin menunjukkan urutan proses pembuatan karya secara singkat. Media apa yang cocok?', options:['Poster atau slide berisi langkah dan gambar pendukung','Daftar nama anggota tanpa penjelasan','Gambar hiasan yang tidak berkaitan'], correct:0, explain:'Poster atau slide dapat menyusun langkah dan gambar secara ringkas sehingga proses mudah dipahami.'}
      ],
      quiz: [
        {prompt:'Informatika terutama mempelajari ...', options:['Cara menggunakan satu merek komputer saja','Komputasi, perancangan sistem, dan penyelesaian masalah','Sejarah semua alat elektronik tanpa praktik'], correct:1, explain:'Informatika mempelajari komputasi dan penerapannya dalam merancang sistem serta menyelesaikan masalah.'},
        {prompt:'Mengapa pembagian peran penting dalam kerja kelompok?', options:['Agar pekerjaan tidak bertumpuk dan setiap anggota tahu tanggung jawabnya','Agar hanya ketua yang bekerja','Agar tidak perlu berkomunikasi'], correct:0, explain:'Pembagian peran membuat tanggung jawab lebih jelas dan membantu pekerjaan selesai secara efektif.'},
        {prompt:'Sikap yang baik saat anggota kelompok menyampaikan ide adalah ...', options:['Memotong pembicaraan','Mendengarkan dan mempertimbangkan pendapat','Mengabaikan ide yang berbeda'], correct:1, explain:'Mendengarkan dan mempertimbangkan ide mendukung kolaborasi yang saling menghargai.'},
        {prompt:'Contoh hasil komunikasi proyek yang baik adalah ...', options:['Laporan yang menjelaskan tujuan, proses, dan hasil','Pesan singkat tanpa konteks','Kumpulan foto tanpa keterangan'], correct:0, explain:'Laporan yang terstruktur memberi konteks dan membuat hasil kerja dapat dipahami.'},
        {prompt:'Saat tugas kelompok terlalu banyak untuk satu orang, tindakan yang tepat adalah ...', options:['Membagi pekerjaan berdasarkan kebutuhan dan kemampuan','Menghapus sebagian tugas tanpa kesepakatan','Mengerjakan semuanya menjelang batas waktu'], correct:0, explain:'Membagi pekerjaan secara terencana membantu tim menggunakan waktu dan kemampuan anggota dengan baik.'}
      ]
    },
    3: {
      title:'Teknologi Informasi dan Komunikasi', short:'TIK & aplikasi digital', theme:'Gunakan perangkat dan aplikasi untuk mengelola informasi.',
      objective:'Mengenali antarmuka pengguna, mengelola folder dan file, menggunakan peramban serta mesin pencari, memahami surel, dan mengenal aplikasi perkantoran.',
      topics:[
        ['Antarmuka pengguna', 'Antarmuka pengguna adalah bagian yang membantu manusia berinteraksi dengan perangkat atau aplikasi. Bentuknya dapat berupa tombol fisik, menu grafis, ikon, layar sentuh, atau perintah suara.', 'Saat mengetuk ikon kamera di ponsel, kamu menggunakan antarmuka grafis untuk menjalankan aplikasi.'],
        ['Folder, file, dan ekstensi', 'File menyimpan informasi seperti dokumen, gambar, atau audio. Folder membantu mengelompokkan file agar mudah ditemukan. Ekstensi di akhir nama file memberi petunjuk jenis file.', 'Contoh: .jpg untuk gambar, .mp3 untuk audio, .pdf untuk dokumen, dan .docx untuk dokumen pengolah kata.'],
        ['Peramban dan mesin pencari', 'Peramban (browser) adalah aplikasi untuk membuka halaman web. Mesin pencari membantu menemukan informasi di internet berdasarkan kata kunci yang dimasukkan.', 'Chrome atau Firefox adalah peramban, sedangkan Google atau Bing merupakan mesin pencari.'],
        ['Surel dan aplikasi perkantoran', 'Surel digunakan untuk mengirim dan menerima pesan elektronik. Aplikasi perkantoran membantu membuat dokumen, mengolah angka, atau menyusun presentasi.', 'Sebelum mengirim surel, periksa alamat penerima, subjek, isi pesan, dan lampiran.']
      ],
      missions:[
        {title:'Rapikan folder tugas', story:'Folder Unduhan berisi banyak file tugas kelas yang bercampur.', prompt:'Struktur folder mana yang paling mudah digunakan?', options:['Satu folder bernama Tugas Kelas dengan subfolder berdasarkan mata pelajaran','Semua file dibiarkan di desktop','Mengubah semua nama file menjadi “baru”'], correct:0, explain:'Folder utama dan subfolder berdasarkan mata pelajaran membuat file lebih mudah ditemukan.'},
        {title:'Cari informasi tepercaya', story:'Kamu diminta mencari informasi tentang daur ulang untuk tugas sekolah.', prompt:'Langkah pencarian mana yang paling tepat?', options:['Mengetik kata kunci spesifik di mesin pencari lalu membandingkan beberapa sumber','Membuka hasil pertama tanpa membaca sumbernya','Menyalin teks dari iklan yang muncul'], correct:0, explain:'Kata kunci spesifik membantu pencarian, sedangkan membandingkan sumber membantu menilai relevansi dan keandalan informasi.'},
        {title:'Kirim surel tugas', story:'Kamu mengirim tugas kepada guru melalui surel dan harus menyertakan dokumen.', prompt:'Apa pemeriksaan penting sebelum menekan tombol Kirim?', options:['Pastikan alamat penerima benar dan file sudah dilampirkan','Hapus subjek agar pesan lebih singkat','Kirim pesan kosong terlebih dahulu'], correct:0, explain:'Pemeriksaan penerima dan lampiran mencegah pesan terkirim ke alamat yang salah atau tanpa dokumen.'}
      ],
      practice:[
        {title:'Memilih ekstensi', prompt:'Kamu ingin menyimpan foto hasil kegiatan. Ekstensi yang umum digunakan untuk gambar adalah ...', options:['.jpg','.mp3','.xlsx'], correct:0, explain:'.jpg merupakan salah satu format file gambar.'},
        {title:'Save As', prompt:'Kamu ingin menyimpan salinan dokumen dengan nama baru tanpa mengganti file aslinya. Perintah yang tepat adalah ...', options:['Delete','Save As','Refresh'], correct:1, explain:'Save As menyimpan dokumen sebagai file baru dengan nama atau lokasi yang dapat ditentukan.'},
        {title:'Mengenali URL', prompt:'Alamat yang digunakan untuk menuju halaman web disebut ...', options:['URL','Folder','Worksheet'], correct:0, explain:'URL adalah alamat sumber atau halaman di internet.'},
        {title:'Mengirim lampiran', prompt:'File presentasi yang akan dikirim melalui surel sebaiknya ...', options:['Dilampirkan pada pesan sebelum dikirim','Hanya disebutkan namanya tanpa mengirim file','Dihapus dari perangkat'], correct:0, explain:'Lampiran membuat file ikut terkirim bersama pesan surel.'}
      ],
      quiz:[
        {prompt:'Tombol, ikon, menu, dan kotak teks pada aplikasi termasuk bagian dari ...', options:['Antarmuka pengguna','Perangkat penyimpanan','Mesin pencari'], correct:0, explain:'Antarmuka pengguna menyediakan cara untuk berinteraksi dengan aplikasi.'},
        {prompt:'Aplikasi yang digunakan untuk membuka halaman web disebut ...', options:['Peramban','Pengolah angka','Pemutar musik'], correct:0, explain:'Peramban atau browser menampilkan halaman web.'},
        {prompt:'Agar file mudah dicari, sebaiknya kita ...', options:['Mengelompokkan file ke folder dengan nama yang jelas','Menyimpan seluruh file tanpa nama','Menghapus ekstensi file'], correct:0, explain:'Folder dan nama yang jelas membantu pengelolaan serta pencarian file.'},
        {prompt:'Kolom BCC pada surel digunakan untuk ...', options:['Mengirim salinan tersembunyi kepada penerima lain','Menulis judul dokumen','Menghapus lampiran'], correct:0, explain:'BCC mengirim salinan kepada penerima tanpa menampilkan alamat mereka kepada penerima lain.'},
        {prompt:'Program pengolah kata terutama digunakan untuk ...', options:['Membuat dan mengedit dokumen teks','Menghubungkan jaringan Wi-Fi','Mengendalikan perangkat keras secara langsung'], correct:0, explain:'Pengolah kata digunakan untuk menyusun, mengedit, dan memformat dokumen teks.'}
      ]
    },
    4: {
      title:'Sistem Komputer', short:'Perangkat & sistem', theme:'Kenali cara komputer menerima, mengolah, dan menghasilkan informasi.',
      objective:'Memahami perangkat keras, perangkat lunak, alur input–proses–output, penyimpanan, interaksi perangkat, dan bilangan biner.',
      topics:[
        ['Sistem komputer', 'Sistem komputer merupakan gabungan perangkat keras dan perangkat lunak yang bekerja bersama. Komputer menerima masukan, memprosesnya, menghasilkan keluaran, dan dapat menyimpan data.', 'Saat mengetik, keyboard menjadi input; CPU memproses; layar menampilkan output; penyimpanan menyimpan dokumen.'],
        ['Perangkat keras', 'Perangkat keras adalah bagian fisik komputer. Contohnya perangkat masukan seperti keyboard dan mouse, pemroses seperti CPU, perangkat keluaran seperti monitor dan printer, serta media penyimpanan.', 'Flashdisk dan SSD digunakan untuk menyimpan data agar dapat dibuka kembali.'],
        ['Perangkat lunak', 'Perangkat lunak adalah program yang memberi instruksi kepada komputer. Sistem operasi mengelola sumber daya perangkat, sedangkan aplikasi membantu pengguna melakukan tugas tertentu.', 'Sistem operasi mengatur perangkat; aplikasi pengolah kata membantu membuat dokumen.'],
        ['Bilangan biner', 'Komputer menggunakan representasi digital yang dapat dinyatakan dengan dua simbol, yaitu 0 dan 1. Bilangan biner menggunakan nilai tempat berbasis pangkat dua.', '101 dalam biner bernilai 5 dalam desimal: 1×4 + 0×2 + 1×1.']
      ],
      missions:[
        {title:'Jejak sebuah klik', story:'Kamu mengeklik ikon aplikasi menggunakan mouse. Komputer harus memproses tindakan tersebut.', prompt:'Urutan kerja sistem komputer yang tepat adalah ...', options:['Input → proses → output','Output → input → proses','Penyimpanan → output → input'], correct:0, explain:'Masukan dari mouse diterima sistem, diproses, lalu menghasilkan respons pada layar.'},
        {title:'Pilih perangkat yang tepat', story:'Laboratorium sekolah ingin menampilkan hasil kerja siswa di layar besar.', prompt:'Perangkat keluaran yang paling sesuai adalah ...', options:['Monitor atau proyektor','Keyboard','Mikrofon'], correct:0, explain:'Monitor dan proyektor menampilkan informasi visual sebagai keluaran dari komputer.'},
        {title:'Kenali perangkat lunak', story:'Komputer baru sudah menyala dan perlu program untuk mengelola file serta menjalankan aplikasi.', prompt:'Jenis perangkat lunak utama yang dibutuhkan adalah ...', options:['Sistem operasi','Mouse pad','Kabel HDMI'], correct:0, explain:'Sistem operasi mengelola perangkat keras dan menyediakan lingkungan untuk menjalankan aplikasi.'}
      ],
      practice:[
        {title:'Memilih alat input', prompt:'Perangkat yang digunakan untuk memasukkan suara ke komputer adalah ...', options:['Mikrofon','Speaker','Monitor'], correct:0, explain:'Mikrofon menangkap suara dan mengirimkannya sebagai masukan ke komputer.'},
        {title:'Media penyimpanan', prompt:'Perangkat yang dapat digunakan untuk menyimpan file dan dibawa ke komputer lain adalah ...', options:['Flashdisk','Proyektor','Keyboard'], correct:0, explain:'Flashdisk merupakan media penyimpanan sekunder yang dapat dipindahkan.'},
        {title:'Konversi biner sederhana', prompt:'Bilangan biner 10 sama dengan bilangan desimal ...', options:['1','2','3'], correct:1, explain:'Biner 10 bernilai 1×2 + 0×1 = 2.'},
        {title:'Peran sistem operasi', prompt:'Apa fungsi utama sistem operasi?', options:['Mengelola sumber daya komputer dan membantu aplikasi berjalan','Mencetak kertas tanpa printer','Menggantikan semua perangkat keras'], correct:0, explain:'Sistem operasi mengatur perangkat keras, file, proses, dan layanan yang diperlukan aplikasi.'}
      ],
      quiz:[
        {prompt:'Bagian komputer yang menjalankan pemrosesan instruksi adalah ...', options:['CPU','Speaker','Scanner'], correct:0, explain:'CPU menjalankan instruksi dan memproses data.'},
        {prompt:'Perangkat yang menampilkan gambar dari komputer adalah ...', options:['Monitor','Keyboard','Mouse'], correct:0, explain:'Monitor merupakan perangkat keluaran visual.'},
        {prompt:'Manakah yang termasuk perangkat lunak aplikasi?', options:['Program pengolah kata','RAM','SSD'], correct:0, explain:'Pengolah kata adalah program aplikasi, sedangkan RAM dan SSD merupakan perangkat keras.'},
        {prompt:'Bilangan biner hanya menggunakan simbol ...', options:['0 dan 1','1 sampai 9','A sampai F'], correct:0, explain:'Sistem bilangan biner menggunakan dua digit: 0 dan 1.'},
        {prompt:'Komponen yang menyimpan data saat komputer dimatikan adalah ...', options:['SSD atau hard disk','RAM saja','Cache sementara'], correct:0, explain:'SSD dan hard disk merupakan penyimpanan sekunder yang mempertahankan data tanpa daya.'}
      ]
    },
    5: {
      title:'Jaringan Komputer dan Internet', short:'Jaringan & keamanan', theme:'Hubungkan perangkat dan lindungi data saat berkomunikasi.',
      objective:'Memahami jaringan komputer, internet, koneksi Wi-Fi dan tethering, serta cara melindungi data menggunakan enkripsi.',
      topics:[
        ['Jaringan komputer dan internet', 'Jaringan komputer menghubungkan dua perangkat atau lebih agar dapat bertukar data dan berbagi sumber daya. Internet menghubungkan banyak jaringan di seluruh dunia.', 'Komputer di laboratorium dapat terhubung ke jaringan sekolah untuk berbagi printer dan akses internet.'],
        ['World Wide Web', 'World Wide Web (WWW) adalah kumpulan halaman dan sumber informasi yang saling terhubung dan diakses melalui internet menggunakan peramban.', 'Tautan pada sebuah halaman web dapat membawa pengguna menuju halaman lain.'],
        ['Wi-Fi dan tethering', 'Wi-Fi memungkinkan perangkat terhubung ke jaringan tanpa kabel. Tethering membagikan koneksi internet dari satu perangkat, misalnya ponsel, kepada perangkat lain.', 'Hotspot ponsel dapat digunakan laptop untuk mengakses internet saat tidak ada Wi-Fi sekolah.'],
        ['Proteksi data dan enkripsi', 'Enkripsi mengubah informasi menjadi bentuk tersandi agar tidak mudah dibaca pihak yang tidak memiliki kunci atau cara untuk mengembalikannya.', 'Caesar Cipher menggeser huruf berdasarkan jumlah langkah tertentu, sebagai contoh sederhana konsep penyandian.']
      ],
      missions:[
        {title:'Hubungkan ruang komputer', story:'Beberapa komputer di laboratorium perlu berbagi koneksi internet melalui jaringan nirkabel.', prompt:'Teknologi yang paling sesuai untuk menghubungkan perangkat tanpa kabel dalam ruangan adalah ...', options:['Wi-Fi','Kabel audio','Flashdisk'], correct:0, explain:'Wi-Fi menghubungkan perangkat ke jaringan secara nirkabel dalam jangkauan akses point atau router.'},
        {title:'Berbagi koneksi', story:'Laptopmu perlu internet, tetapi jaringan Wi-Fi tidak tersedia. Ponselmu masih memiliki paket data.', prompt:'Fitur ponsel yang dapat membagikan koneksi ke laptop disebut ...', options:['Tethering atau hotspot','Recycle Bin','Airplane mode'], correct:0, explain:'Tethering membagikan koneksi internet ponsel kepada perangkat lain.'},
        {title:'Pesan rahasia', story:'Pesan “CAT” akan disandikan dengan Caesar Cipher yang menggeser setiap huruf satu langkah ke depan.', prompt:'Hasil sandi untuk kata CAT adalah ...', options:['DBU','BZS','CBT'], correct:0, explain:'Setiap huruf bergeser satu langkah: C menjadi D, A menjadi B, dan T menjadi U.'}
      ],
      practice:[
        {title:'WWW dan internet', prompt:'Pernyataan yang tepat tentang WWW adalah ...', options:['Layanan halaman web yang diakses melalui internet','Nama lain untuk keyboard','Jenis penyimpanan internal'], correct:0, explain:'WWW merupakan sistem halaman web yang saling terhubung dan diakses melalui internet.'},
        {title:'Melindungi informasi', prompt:'Mengapa enkripsi dapat membantu menjaga keamanan data?', options:['Karena data diubah menjadi bentuk tersandi','Karena data otomatis dihapus','Karena perangkat menjadi lebih cepat'], correct:0, explain:'Enkripsi membuat data tidak langsung terbaca oleh pihak yang tidak memiliki cara untuk mendekripsinya.'},
        {title:'Memilih jaringan', prompt:'Perangkat berada di rumah dan perlu terhubung ke router tanpa kabel. Pilihan yang tepat adalah ...', options:['Wi-Fi','Kabel VGA','Printer'], correct:0, explain:'Wi-Fi menyediakan koneksi jaringan nirkabel antara perangkat dan router.'},
        {title:'Membuka halaman web', prompt:'Aplikasi yang digunakan untuk membuka alamat situs web adalah ...', options:['Peramban web','Kalkulator','File manager'], correct:0, explain:'Peramban web memuat dan menampilkan halaman web dari alamat yang dimasukkan.'}
      ],
      quiz:[
        {prompt:'Jaringan komputer berguna untuk ...', options:['Menghubungkan perangkat agar dapat bertukar data','Mengubah monitor menjadi printer','Menghapus semua file'], correct:0, explain:'Jaringan memungkinkan perangkat berkomunikasi dan berbagi sumber daya.'},
        {prompt:'Perangkat yang membagikan koneksi internet dari ponsel ke laptop menggunakan ...', options:['Tethering','Defragmentasi','Format file'], correct:0, explain:'Tethering membagikan koneksi data ponsel ke perangkat lain.'},
        {prompt:'Apa tujuan utama enkripsi?', options:['Melindungi kerahasiaan informasi','Membuat nama file lebih panjang','Menambah kapasitas RAM'], correct:0, explain:'Enkripsi menyandikan data agar hanya pihak yang berhak dapat membacanya kembali.'},
        {prompt:'Pada Caesar Cipher geser 2, huruf A menjadi ...', options:['C','B','D'], correct:0, explain:'Jika huruf digeser dua langkah ke depan, A menjadi C.'},
        {prompt:'Saat memakai Wi-Fi publik, tindakan yang lebih aman adalah ...', options:['Hindari memasukkan informasi sensitif pada layanan yang tidak aman','Bagikan kata sandi ke semua orang','Matikan pengamanan akun'], correct:0, explain:'Jaringan publik perlu digunakan dengan hati-hati, terutama saat mengakses data atau akun penting.'}
      ]
    },
    6: {
      title:'Analisis Data', short:'Data & spreadsheet', theme:'Ubah kumpulan angka menjadi informasi yang bermakna.',
      objective:'Mengenal data dan interpretasi, menggunakan lembar kerja, memahami referensi sel, fungsi dasar, pengurutan, penyaringan, dan validasi data.',
      topics:[
        ['Data dan analisis data', 'Data adalah fakta atau catatan yang dapat diolah. Analisis data adalah proses memeriksa, mengolah, dan menafsirkan data untuk memperoleh informasi yang membantu menjawab pertanyaan.', 'Data jumlah peminjaman buku setiap hari dapat dianalisis untuk mengetahui hari paling ramai.'],
        ['Lembar kerja (worksheet)', 'Aplikasi lembar kerja menyajikan data dalam baris dan kolom. Pertemuan baris dan kolom disebut sel (cell). Sel dapat berisi teks, angka, tanggal, atau rumus.', 'Sel B3 berarti kolom B dan baris 3. Nama sel membantu rumus mengambil data yang tepat.'],
        ['Fungsi dan rumus dasar', 'Rumus membantu menghitung data secara otomatis. Fungsi dasar dapat menjumlahkan, menghitung rata-rata, mencari nilai tertinggi, atau menghitung banyak data.', 'Fungsi SUM menjumlahkan beberapa nilai, sedangkan AVERAGE menghitung rata-rata.'],
        ['Mengelola data', 'Sort mengurutkan data, Filter menampilkan data sesuai kriteria, dan Data Validation membantu membatasi masukan agar sesuai aturan.', 'Daftar nilai dapat diurutkan dari tertinggi ke terendah atau difilter untuk menampilkan satu kelas saja.']
      ],
      missions:[
        {title:'Temukan hari teramai', story:'Perpustakaan mencatat jumlah pengunjung: Senin 18, Selasa 25, Rabu 21, Kamis 30.', prompt:'Hari dengan pengunjung paling banyak adalah ...', options:['Senin','Selasa','Kamis'], correct:2, explain:'Nilai terbesar adalah 30, sehingga Kamis merupakan hari dengan pengunjung paling banyak.'},
        {title:'Gunakan rumus', story:'Nilai tugas ada di sel B2 sampai B5. Kamu ingin menjumlahkan semua nilai itu.', prompt:'Rumus yang paling tepat adalah ...', options:['=SUM(B2:B5)','=MAX(B2:B5)','=MIN(B2:B5)'], correct:0, explain:'SUM menjumlahkan seluruh angka pada rentang B2 sampai B5.'},
        {title:'Cari data tertentu', story:'Tabel kelas berisi siswa dari kelas 7A, 7B, dan 7C. Kamu hanya ingin melihat data siswa 7B.', prompt:'Fitur yang paling tepat digunakan adalah ...', options:['Filter pada kolom kelas','Menghapus semua baris lain permanen','Mengubah warna seluruh sel'], correct:0, explain:'Filter menampilkan baris sesuai kriteria, misalnya hanya siswa dari kelas 7B.'}
      ],
      practice:[
        {title:'Rata-rata nilai', prompt:'Nilai 70, 80, dan 90 memiliki rata-rata ...', options:['80','85','90'], correct:0, explain:'(70 + 80 + 90) ÷ 3 = 80.'},
        {title:'Referensi sel', prompt:'Alamat sel yang berada pada kolom C dan baris 4 adalah ...', options:['C4','4C','C-4'], correct:0, explain:'Alamat sel ditulis dengan huruf kolom lebih dahulu, kemudian angka baris.'},
        {title:'Mengurutkan data', prompt:'Kamu ingin menyusun daftar nilai dari paling tinggi ke paling rendah. Fitur yang digunakan adalah ...', options:['Sort descending','Filter kosong','Freeze Panes'], correct:0, explain:'Sort descending mengurutkan nilai dari besar ke kecil.'},
        {title:'Validasi data', prompt:'Formulir nilai hanya boleh diisi angka 0 sampai 100. Fitur yang membantu membatasi masukan adalah ...', options:['Data Validation','Zoom','Print Preview'], correct:0, explain:'Data Validation dapat membatasi jenis atau rentang nilai yang boleh dimasukkan.'}
      ],
      quiz:[
        {prompt:'Informasi yang diperoleh setelah data diolah dan ditafsirkan disebut ...', options:['Hasil analisis','Ekstensi file','Perangkat keras'], correct:0, explain:'Analisis dan interpretasi membantu mengubah data menjadi informasi yang bermakna.'},
        {prompt:'Fungsi spreadsheet untuk mencari nilai terbesar adalah ...', options:['MAX','SUM','COUNT'], correct:0, explain:'MAX menghasilkan nilai terbesar dari kumpulan data.'},
        {prompt:'Untuk menjaga judul kolom tetap terlihat saat menggulir lembar kerja, gunakan ...', options:['Freeze Panes','Sort','Save As'], correct:0, explain:'Freeze Panes mengunci baris atau kolom tertentu agar tetap terlihat.'},
        {prompt:'Referensi absolut pada spreadsheet biasanya ditandai dengan ...', options:['Tanda dolar ($)','Tanda seru (!)','Tanda persen (%)'], correct:0, explain:'Tanda $ mengunci referensi kolom dan/atau baris saat rumus disalin.'},
        {prompt:'Mengapa data perlu diperiksa sebelum dianalisis?', options:['Agar kesalahan atau nilai yang tidak sesuai dapat ditemukan','Agar jumlah kolom selalu bertambah','Agar semua nilai menjadi sama'], correct:0, explain:'Pemeriksaan kualitas data membantu mencegah kesimpulan yang keliru.'}
      ]
    },
    7: {
      title:'Algoritma dan Pemrograman', short:'Coding & Scratch', theme:'Susun blok program dan amati cara sprite bergerak.',
      objective:'Memahami alasan belajar pemrograman, mengenal Scratch, sprite, backdrop, area kode, blok perintah, fungsi dasar, dan robot manual.',
      topics:[
        ['Mengapa belajar pemrograman?', 'Pemrograman adalah proses menyusun instruksi agar komputer menjalankan tugas tertentu. Dengan pemrograman, ide dapat diwujudkan menjadi permainan, animasi, atau aplikasi.', 'Program sederhana dapat membuat karakter bergerak saat tombol panah ditekan.'],
        ['Mengenal Scratch', 'Scratch adalah lingkungan pemrograman visual yang menggunakan blok-blok kode. Blok disusun dengan cara menyeret dan meletakkannya sehingga pemula dapat memahami alur program.', 'Blok peristiwa seperti “ketika bendera diklik” dapat memulai rangkaian perintah.'],
        ['Sprite, backdrop, dan skrip', 'Sprite adalah objek atau karakter dalam proyek. Backdrop merupakan latar panggung. Skrip adalah susunan blok yang menentukan perilaku sprite.', 'Sprite kucing dapat bergerak di panggung dengan latar taman.'],
        ['Menguji program dan robot manual', 'Program perlu diuji untuk memastikan hasilnya sesuai tujuan. Robot manual juga dapat mengikuti kartu instruksi yang disusun menjadi algoritma.', 'Jika karakter bergerak ke arah yang salah, periksa blok arah, jumlah langkah, dan urutan instruksinya.']
      ],
      missions:[
        {title:'Mulai dengan bendera hijau', story:'Kamu membuat animasi kucing di Scratch. Program harus berjalan ketika pengguna memulai proyek.', prompt:'Blok peristiwa yang tepat untuk memulai skrip adalah ...', options:['Ketika bendera hijau diklik','Tunggu 1 detik','Ubah ukuran sebesar 10'], correct:0, explain:'Blok “ketika bendera hijau diklik” menjalankan skrip saat proyek dimulai.'},
        {title:'Susun gerakan sprite', story:'Sprite harus maju 10 langkah, kemudian memainkan suara.', prompt:'Susunan blok yang tepat adalah ...', options:['Gerak 10 langkah → mainkan suara','Mainkan suara → berhenti sebelum bergerak','Ubah backdrop → hapus sprite'], correct:0, explain:'Urutan blok menentukan urutan tindakan yang dilakukan sprite.'},
        {title:'Temukan kesalahan skrip', story:'Sprite seharusnya bergerak ke kanan, tetapi justru bergerak ke kiri.', prompt:'Bagian yang pertama kali perlu diperiksa adalah ...', options:['Nilai arah atau blok gerakan sprite','Warna backdrop','Nama file gambar'], correct:0, explain:'Arah gerakan ditentukan oleh nilai arah atau blok gerak yang digunakan.'}
      ],
      practice:[
        {title:'Objek dalam proyek', prompt:'Karakter kucing yang dapat diberi perintah pada Scratch disebut ...', options:['Sprite','Backdrop','Worksheet'], correct:0, explain:'Sprite adalah objek atau karakter yang dapat diberi skrip.'},
        {title:'Latar panggung', prompt:'Gambar latar yang tampil di belakang sprite disebut ...', options:['Backdrop','Variable','Extension file'], correct:0, explain:'Backdrop merupakan latar yang digunakan pada panggung Scratch.'},
        {title:'Koordinat horizontal', prompt:'Pada bidang koordinat Scratch, nilai x yang semakin besar menunjukkan gerakan ke ...', options:['Kanan','Kiri','Bawah'], correct:0, explain:'Sumbu x bertambah ke arah kanan dan berkurang ke arah kiri.'},
        {title:'Mengulang perintah', prompt:'Jika sprite harus melakukan gerakan yang sama sebanyak 5 kali, blok yang membantu adalah ...', options:['Repeat 5','Stop all','Switch backdrop'], correct:0, explain:'Blok Repeat mengulang rangkaian perintah sebanyak jumlah yang ditentukan.'}
      ],
      quiz:[
        {prompt:'Susunan blok yang dijalankan oleh sprite disebut ...', options:['Skrip','Folder','Jaringan'], correct:0, explain:'Skrip adalah urutan blok kode yang mengatur tindakan sprite.'},
        {prompt:'Blok peristiwa digunakan untuk ...', options:['Memulai skrip ketika suatu kejadian terjadi','Menghapus seluruh proyek','Mengganti perangkat keras'], correct:0, explain:'Blok peristiwa menjadi pemicu untuk menjalankan rangkaian kode.'},
        {prompt:'Apa fungsi blok wait?', options:['Memberi jeda sebelum perintah berikutnya','Menggandakan sprite','Menghapus backdrop'], correct:0, explain:'Wait menghentikan sementara rangkaian skrip selama waktu tertentu.'},
        {prompt:'Jika sprite bergerak vertikal pada panggung, koordinat yang berubah adalah ...', options:['y','x','nama sprite'], correct:0, explain:'Sumbu y mengatur posisi vertikal pada bidang koordinat.'},
        {prompt:'Mengapa program perlu diuji?', options:['Untuk memastikan perilakunya sesuai rancangan dan menemukan kesalahan','Agar kode menjadi lebih panjang','Agar sprite selalu diam'], correct:0, explain:'Pengujian membantu memastikan program bekerja sesuai tujuan dan menemukan bug.'}
      ]
    },
    8: {
      title:'Dampak Sosial Informatika', short:'Dunia digital & privasi', theme:'Jadilah pengguna teknologi yang aman dan bertanggung jawab.',
      objective:'Memahami perkembangan TIK, dampak positif dan negatifnya, kolaborasi di dunia maya, media sosial, informasi pribadi, dan privasi.',
      topics:[
        ['Perkembangan TIK', 'Teknologi informasi dan komunikasi membantu manusia membuat, menyimpan, dan menyampaikan informasi. Perkembangannya memengaruhi cara belajar, bekerja, berkomunikasi, dan beraktivitas.', 'Pertemuan dapat dilakukan melalui konferensi video tanpa semua peserta berada di tempat yang sama.'],
        ['Dampak positif dan negatif', 'TIK dapat mempercepat komunikasi, memperluas akses belajar, dan membantu pekerjaan. Namun, penggunaan yang tidak bijak dapat menimbulkan penyebaran informasi palsu, kecanduan, perundungan, atau risiko keamanan.', 'Periksa kebenaran informasi sebelum membagikannya kepada orang lain.'],
        ['Kolaborasi dan media sosial', 'Kolaborasi di dunia maya memungkinkan beberapa orang bekerja bersama melalui dokumen bersama, ruang diskusi, atau platform pembelajaran. Media sosial membantu berbagi informasi tetapi perlu digunakan secara bijak.', 'Gunakan bahasa yang sopan, hargai pendapat, dan jangan menyebarkan konten yang merugikan orang lain.'],
        ['Informasi pribadi dan privasi', 'Informasi pribadi dapat mengidentifikasi seseorang, misalnya alamat rumah, nomor telepon, kata sandi, atau data identitas. Sebelum mengumpulkan atau membagikan informasi, penting memahami tujuan dan persetujuannya.', 'Jangan membagikan kata sandi atau kode verifikasi kepada orang lain.']
      ],
      missions:[
        {title:'Pesan berantai', story:'Kamu menerima pesan yang mengklaim sekolah akan diliburkan besok, tetapi tidak ada sumber resmi.', prompt:'Apa tindakan paling bertanggung jawab?', options:['Memeriksa pengumuman resmi sekolah sebelum membagikan','Langsung meneruskan ke semua grup','Menambahkan cerita agar lebih menarik'], correct:0, explain:'Informasi perlu diverifikasi dari sumber tepercaya sebelum dibagikan agar tidak menyebarkan kabar yang salah.'},
        {title:'Kerja kelompok daring', story:'Kelompokmu menyusun presentasi menggunakan dokumen bersama.', prompt:'Perilaku kolaborasi yang paling tepat adalah ...', options:['Memberi komentar sopan dan mengedit bagian yang menjadi tanggung jawab','Menghapus pekerjaan teman tanpa berdiskusi','Mengubah seluruh isi tanpa memberi tahu kelompok'], correct:0, explain:'Kolaborasi daring memerlukan komunikasi, pembagian tanggung jawab, dan sikap saling menghargai.'},
        {title:'Data pribadi', story:'Seseorang mengirim tautan dan meminta kata sandi serta kode OTP untuk hadiah.', prompt:'Apa tindakan yang sebaiknya kamu lakukan?', options:['Tidak memberikan kata sandi atau OTP dan memeriksa keaslian layanan','Mengirim OTP agar hadiah cepat diterima','Meminta teman mengirimkan OTP miliknya'], correct:0, explain:'Kata sandi dan OTP merupakan informasi rahasia yang tidak boleh dibagikan kepada orang lain.'}
      ],
      practice:[
        {title:'Dampak positif TIK', prompt:'Contoh pemanfaatan TIK yang mendukung pendidikan adalah ...', options:['Mengikuti kelas daring dan mengakses bahan belajar','Menyebarkan rumor','Mengunggah data teman tanpa izin'], correct:0, explain:'Kelas daring dan sumber belajar digital dapat memperluas akses pendidikan.'},
        {title:'Jejak digital', prompt:'Sebelum mengunggah foto kegiatan bersama teman, sebaiknya kamu ...', options:['Memastikan teman setuju jika foto tersebut menampilkan mereka','Mengunggah semua foto tanpa memeriksa','Menambahkan data pribadi mereka'], correct:0, explain:'Menghargai persetujuan orang lain merupakan bagian dari etika dan privasi digital.'},
        {title:'Komentar di media sosial', prompt:'Jika tidak setuju dengan pendapat seseorang, respons yang baik adalah ...', options:['Menyampaikan alasan dengan sopan','Menghina orang tersebut','Menyebarkan identitas pribadinya'], correct:0, explain:'Perbedaan pendapat dapat disampaikan dengan sopan tanpa merendahkan orang lain.'},
        {title:'Informasi privat', prompt:'Informasi yang sebaiknya tidak dibagikan secara terbuka adalah ...', options:['Kata sandi akun','Nama mata pelajaran','Jadwal pelajaran umum'], correct:0, explain:'Kata sandi memberi akses ke akun dan harus dijaga kerahasiaannya.'}
      ],
      quiz:[
        {prompt:'Salah satu dampak positif perkembangan TIK adalah ...', options:['Mempermudah komunikasi jarak jauh','Membuat semua informasi pasti benar','Menghilangkan kebutuhan menjaga privasi'], correct:0, explain:'TIK membantu orang berkomunikasi meskipun berada di tempat berbeda.'},
        {prompt:'Tindakan yang termasuk perundungan digital adalah ...', options:['Mengirim pesan hinaan berulang melalui internet','Memberi masukan dengan sopan','Berbagi materi belajar'], correct:0, explain:'Perundungan digital dilakukan melalui teknologi untuk menyakiti atau merendahkan orang lain.'},
        {prompt:'Sebelum menggunakan data pribadi seseorang, hal yang perlu diperhatikan adalah ...', options:['Tujuan penggunaan dan persetujuan yang diinformasikan','Jumlah pengikut media sosial','Warna perangkat yang digunakan'], correct:0, explain:'Persetujuan yang diinformasikan berarti seseorang memahami tujuan penggunaan datanya sebelum menyetujui.'},
        {prompt:'Apa yang sebaiknya dilakukan terhadap berita yang belum jelas kebenarannya?', options:['Memeriksa sumber dan fakta terlebih dahulu','Langsung meneruskan','Mengubah judul agar viral'], correct:0, explain:'Memeriksa sumber membantu mengurangi penyebaran informasi keliru.'},
        {prompt:'Saat bekerja di dokumen kolaboratif, kamu sebaiknya ...', options:['Menghormati kontribusi anggota lain','Menghapus komentar semua anggota','Menyebarkan tautan edit ke orang yang tidak berkepentingan'], correct:0, explain:'Kolaborasi sehat mengutamakan komunikasi dan penghargaan terhadap kontribusi anggota.'}
      ]
    },
    9: {
      title:'Praktika Lintas Bidang Informatika', short:'Proyek & artefak', theme:'Rancang, buat, dan uji karya komputasional sederhana.',
      objective:'Mengenal artefak komputasional, merancang proyek, memahami Makey Makey dan input-output, menguji hasil, serta memainkan strategi unplugged.',
      topics:[
        ['Artefak komputasional', 'Artefak komputasional adalah hasil karya yang dikembangkan dengan menerapkan berpikir komputasional dan peralatan komputasi. Bentuknya dapat berupa program, gambar, audio, video, presentasi, atau halaman web.', 'Permainan sederhana dan presentasi interaktif termasuk contoh artefak komputasional.'],
        ['Makey Makey dan input', 'Makey Makey adalah papan yang dapat dihubungkan ke komputer dan digunakan seperti papan ketik. Benda yang dapat menghantarkan listrik dapat dijadikan bagian dari rangkaian input.', 'Ketika benda konduktor disentuh pada rangkaian yang tepat, komputer dapat menerima masukan seperti tombol keyboard.'],
        ['Membuat proyek dan synthesizer', 'Proyek yang melibatkan perangkat dan program membutuhkan rancangan, pembagian peran, pemetaan input-output, serta pengujian. Synthesizer sederhana dapat menghasilkan nada ketika tombol tertentu ditekan.', 'Tombol yang berbeda dipetakan ke nada C, D, E, F, atau G.'],
        ['Pengujian dan strategi unplugged', 'Pengujian membandingkan hasil yang diharapkan dengan hasil yang diperoleh. Aktivitas unplugged melatih algoritma dan strategi tanpa harus menggunakan komputer.', 'Papan permainan dengan kartu arah melatih pemain menyusun langkah untuk mencapai kotak tujuan tanpa menabrak dinding.']
      ],
      missions:[
        {title:'Pilih bahan input', story:'Kelompokmu ingin membuat tombol sederhana dari benda di sekitar dengan Makey Makey.', prompt:'Benda yang paling sesuai untuk diuji sebagai konduktor adalah ...', options:['Koin logam','Kertas kering','Potongan plastik'], correct:0, explain:'Logam umumnya menghantarkan listrik sehingga dapat diuji sebagai bagian dari input Makey Makey.'},
        {title:'Rancang piano mini', story:'Kamu membuat piano sederhana dengan beberapa tombol kertas yang terhubung ke Makey Makey dan Scratch.', prompt:'Apa yang harus ditentukan sebelum membuat kode?', options:['Pemetaan setiap tombol ke nada yang diinginkan','Warna meja komputer','Nama semua file di laptop'], correct:0, explain:'Pemetaan input dan output membuat setiap tombol menghasilkan nada yang sesuai.'},
        {title:'Uji hasil karya', story:'Tombol C seharusnya menghasilkan nada C, tetapi saat ditekan justru berbunyi nada D.', prompt:'Apa langkah pengujian yang tepat?', options:['Periksa sambungan dan pemetaan kode untuk tombol C','Mengabaikan hasil karena program sudah dibuat','Mengganti semua tombol tanpa pengujian'], correct:0, explain:'Pengujian membandingkan hasil dengan rancangan. Periksa sambungan dan pemetaan untuk menemukan sumber kesalahan.'}
      ],
      practice:[
        {title:'Bentuk artefak', prompt:'Manakah yang dapat disebut artefak komputasional?', options:['Halaman web interaktif yang dibuat untuk menyampaikan informasi','Batu yang ditemukan di halaman sekolah','Kursi tanpa proses perancangan komputasional'], correct:0, explain:'Halaman web merupakan salah satu bentuk artefak komputasional.'},
        {title:'Pembagian peran proyek', prompt:'Dalam proyek kelompok, mengapa peran perancang, pembuat program, dan penguji dapat dipisahkan?', options:['Agar pekerjaan terorganisasi dan setiap bagian mendapat perhatian','Agar tidak ada koordinasi','Agar pengujian tidak diperlukan'], correct:0, explain:'Pembagian peran membantu anggota fokus pada tanggung jawab dan berkoordinasi menuju hasil yang sama.'},
        {title:'Input dan output', prompt:'Pada piano digital, tombol yang ditekan pengguna merupakan ...', options:['Input','Output','Penyimpanan'], correct:0, explain:'Tombol yang ditekan menghasilkan masukan yang diterima sistem.'},
        {title:'Permainan unplugged', prompt:'Permainan papan dengan kartu panah terutama melatih ...', options:['Menyusun algoritma dan strategi langkah','Mengedit foto','Mengirim surel'], correct:0, explain:'Pemain perlu merencanakan urutan langkah agar karakter mencapai tujuan sesuai aturan.'}
      ],
      quiz:[
        {prompt:'Makey Makey dapat digunakan sebagai ...', options:['Perangkat input yang berinteraksi seperti keyboard','Monitor untuk menampilkan video','Penyimpanan data utama'], correct:0, explain:'Makey Makey dapat mengirim masukan ke komputer seperti tombol keyboard.'},
        {prompt:'Benda yang dapat menghantarkan arus listrik disebut ...', options:['Konduktor','Browser','Backdrop'], correct:0, explain:'Konduktor adalah bahan yang dapat menghantarkan arus listrik.'},
        {prompt:'Mengapa rancangan proyek sebaiknya mencantumkan hasil yang diharapkan?', options:['Agar hasil pengujian dapat dibandingkan dengan tujuan','Agar tidak perlu menguji alat','Agar semua kelompok membuat benda sama'], correct:0, explain:'Kriteria hasil yang diharapkan menjadi acuan untuk menguji apakah artefak bekerja sesuai rancangan.'},
        {prompt:'Jika hasil uji berbeda dari rancangan, kegiatan untuk mencari penyebabnya disebut ...', options:['Debugging atau pengujian kesalahan','Mengganti judul','Membagikan karya'], correct:0, explain:'Debugging adalah proses mencari dan memperbaiki kesalahan pada program atau artefak.'},
        {prompt:'Aktivitas unplugged adalah kegiatan yang ...', options:['Melatih konsep komputasi tanpa harus menggunakan komputer','Wajib memakai internet','Hanya dilakukan dengan aplikasi spreadsheet'], correct:0, explain:'Aktivitas unplugged mengajarkan konsep komputasi melalui kegiatan tanpa perangkat komputer.'}
      ]
    }
  };

  const defaultSelection = { materi: 2, misi: 2, latihan: 2, kuis: 2 };
  const selection = (() => {
    try { return { ...defaultSelection, ...(JSON.parse(localStorage.getItem(SELECTION_KEY) || '{}')) }; }
    catch { return { ...defaultSelection }; }
  })();
  const completionTimers = new Map();
  const missionAdvanceTimers = new Map();
  const practiceGameSessions = new Map();
  const state = (() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CHAPTER_KEY) || '{}');
      return saved && typeof saved === 'object' ? saved : {};
    } catch { return {}; }
  })();

  const menus = ['materi','misi','latihan','kuis'];
  const meta = {
    materi: { title:'materiTitle', intro:'Bekal pembelajaran per bab', stamp:'LEARN' },
    misi: { title:'misiTitle', intro:'Tantangan interaktif sesuai bab', stamp:'PLAY' },
    latihan: { title:'latihanTitle', intro:'Latihan mandiri sesuai bab', stamp:'PRACTICE' },
    kuis: { title:'kuisTitle', intro:'Uji pemahaman setiap bab', stamp:'QUIZ' }
  };

  function save() {
    try { localStorage.setItem(CHAPTER_KEY, JSON.stringify(state)); localStorage.setItem(SELECTION_KEY, JSON.stringify(selection)); }
    catch (error) { console.warn('Progres per bab tidak dapat disimpan:', error); }
  }
  function getState(chapterId) {
    const id = String(chapterId);
    if (!state[id]) state[id] = { materiDone:false, missions:{}, practices:{}, missionIndex:0, quiz:{ answers:{}, submitted:false, score:null, currentIndex:0 } };
    state[id].missions ||= {}; state[id].practices ||= {};
    if (!Number.isInteger(state[id].missionIndex)) {
      const firstUnfinished = chapters[chapterId]?.missions.findIndex((_,i)=>!state[id].missions[i]) ?? -1;
      state[id].missionIndex = firstUnfinished >= 0 ? firstUnfinished : 0;
    }
    const expectedMissionCount = chapters[chapterId]?.missions.length || 0;
    const expectedPracticeCount = chapters[chapterId]?.practice.length || 0;
    const expectedQuizCount = chapters[chapterId]?.quiz.length || 0;
    // V11 punya jumlah aktivitas lebih sedikit. Pertahankan jawaban Misi/Latihan
    // yang sudah benar, tetapi buka kembali penanda popup karena targetnya bertambah.
    if (state[id].missionCount !== expectedMissionCount) {
      state[id].missionPopupShown = false;
      state[id].missionCount = expectedMissionCount;
    }
    if (state[id].practiceCount !== expectedPracticeCount) {
      state[id].practicePopupShown = false;
      state[id].practiceCount = expectedPracticeCount;
    }
    if (state[id].practiceLayoutVersion !== 2) {
      state[id].practices = {};
      state[id].practicePopupShown = false;
      state[id].practiceLayoutVersion = 2;
    }
    state[id].quiz ||= { answers:{}, submitted:false, score:null, questionCount:expectedQuizCount };
    // Nilai kuis lama tidak mewakili 20 soal. Jika sebelumnya sudah dikumpulkan,
    // reset hanya hasil kuis bab tersebut; jawaban parsial yang belum dikumpulkan
    // tetap dipertahankan agar siswa bisa melanjutkan.
    if (state[id].quiz.questionCount !== expectedQuizCount) {
      const previousAnswers = state[id].quiz.submitted ? {} : (state[id].quiz.answers || {});
      state[id].quiz = { answers:previousAnswers, submitted:false, score:null, questionCount:expectedQuizCount };
    }
    state[id].quiz.answers ||= {};
    state[id].quiz.currentIndex = Number.isInteger(state[id].quiz.currentIndex) ? state[id].quiz.currentIndex : 0;
    return state[id];
  }
  function statusFor(menu, chapterId) {
    if (Number(chapterId) === 2) {
      const p = window.MisiApp?.progress || {lessonDone:false,missions:{},practice:{},quizScore:null};
      if (menu === 'materi') return p.lessonDone ? 'Selesai' : 'Belum';
      if (menu === 'misi') { const n = Object.values(p.missions).filter(Boolean).length; return `${n}/10`; }
      if (menu === 'latihan') { const n = Object.values(p.practice).filter(Boolean).length; return `${n}/15`; }
      return p.quizScore === null ? 'Belum' : `${p.quizScore}/100`;
    }
    const p = getState(chapterId);
    if (menu === 'materi') return p.materiDone ? 'Selesai' : 'Belum';
    if (menu === 'misi') return `${Object.values(p.missions).filter(Boolean).length}/${chapters[chapterId].missions.length}`;
    if (menu === 'latihan') return `${Object.values(p.practices).filter(Boolean).length}/${chapters[chapterId].practice.length}`;
    return p.quiz.submitted ? `${p.quiz.score}/100` : Object.keys(p.quiz.answers||{}).length ? `${Object.keys(p.quiz.answers).length}/${chapters[chapterId].quiz.length}` : 'Belum';
  }
  function progressFor(menu, chapterId) {
    if (Number(chapterId) === 2) {
      const p=window.MisiApp?.progress || {lessonDone:false,missions:{},practice:{},quizScore:null};
      if(menu==='materi')return p.lessonDone?100:0;
      if(menu==='misi')return Math.round(Object.values(p.missions||{}).filter(Boolean).length/10*100);
      if(menu==='latihan')return Math.round(Object.values(p.practice||{}).filter(Boolean).length/15*100);
      return p.quizScore!==null?100:Math.round((p.quizAnswers?.filter?.(x=>x!==null)?.length||0)/20*100);
    }
    const p=getState(chapterId);
    if(menu==='materi')return p.materiDone?100:0;
    if(menu==='misi')return Math.round(Object.values(p.missions).filter(Boolean).length/chapters[chapterId].missions.length*100);
    if(menu==='latihan')return Math.round(Object.values(p.practices).filter(Boolean).length/chapters[chapterId].practice.length*100);
    if(p.quiz.submitted)return 100;
    return Math.round(Object.keys(p.quiz.answers||{}).length/chapters[chapterId].quiz.length*100);
  }

  function pickerHtml(menu) {
    return `<div class="chapter-picker-head"><div><span class="mini-label">PILIH BAB PEMBELAJARAN</span><p>Pilih bab yang ingin kamu pelajari. Progres setiap bab tersimpan terpisah.</p></div><span class="chapter-count">9 BAB</span></div><div class="chapter-picker-grid">${Array.from({length:9},(_,i)=>i+1).map(id=>{
      const c = id === 2 ? {title:'Berpikir Komputasional', short:'Algoritma & pola'} : chapters[id];
      const active = Number(selection[menu]) === id;
      const percent = progressFor(menu,id);
      return `<button type="button" class="chapter-pick ${active?'active':''}" data-chapter-select="${menu}" data-chapter="${id}" aria-pressed="${active}"><span class="chapter-pick-no">BAB ${String(id).padStart(2,'0')}</span><strong>${c.title}</strong><span class="chapter-pick-progress"><small>${statusFor(menu,id)}</small><i><b style="width:${percent}%"></b></i></span></button>`;
    }).join('')}</div>`;
  }
  function updatePicker(menu) {
    const el = document.querySelector(`[data-chapter-picker="${menu}"]`);
    if (el) el.innerHTML = pickerHtml(menu);
  }
  function updateHeading(menu, chapterId) {
    const page=document.getElementById(`page-${menu}`);
    const h1=document.getElementById(meta[menu].title);
    const intro=page?.querySelector('.page-heading p');
    const eyebrow=page?.querySelector('.page-heading .eyebrow');
    const stamp=page?.querySelector('.heading-stamp');
    const headings={
      materi:{title:'Jelajahi <em>materi.</em>',intro:'Pilih bab, pelajari ide penting, dan temukan contoh penerapannya di sekitar kita.',stamp:'LEARN',number:'01',eyebrow:'RUANG BELAJAR · 9 BAB'},
      misi:{title:'Masuk ke <em>arena misi.</em>',intro:'Pecahkan tantangan yang dirancang khusus untuk setiap bab. Selesaikan satu per satu dan kumpulkan progresmu.',stamp:'PLAY',number:'02',eyebrow:'TANTANGAN · 9 BAB'},
      latihan:{title:'Asah <em>kemampuanmu.</em>',intro:'Gunakan pengetahuanmu untuk menyelesaikan persoalan dengan situasi yang beragam.',stamp:'PRACTICE',number:'03',eyebrow:'RUANG LATIHAN · 9 BAB'},
      kuis:{title:'Saatnya <em>unjuk diri.</em>',intro:'Jawab pertanyaan, lihat hasilnya, dan temukan bagian yang masih perlu kamu pelajari.',stamp:'QUIZ',number:'04',eyebrow:'UJI PEMAHAMAN · 9 BAB'}
    }[menu];
    if(h1)h1.innerHTML=headings.title;
    if(intro)intro.textContent=headings.intro;
    if(eyebrow)eyebrow.textContent=headings.eyebrow;
    if(stamp)stamp.innerHTML=`${headings.stamp}<br><b>${headings.number}</b>`;
  }

  function setSelection(menu, chapterId, render = true) {
    selection[menu] = Number(chapterId);
    save();
    updatePicker(menu);
    if (render) renderMenu(menu);
  }
  function goTo(menu, chapterId) {
    setSelection(menu, chapterId);
    const nav = document.querySelector(`.nav-link[data-page="${menu}"]`);
    if (nav) nav.click();
    else window.MisiApp?.showPage(menu);
  }

  function chapterCover(menu, chapterId, chapter) {
    const labels = {
      materi: { eyebrow:'RUANG PENJELAJAHAN', title:'Bangun bekal pengetahuanmu', detail:'Kenali ide utama, lihat contoh nyata, lalu hubungkan dengan kehidupan sehari-hari.', icon:'✦', tag:'BACA & TEMUKAN' },
      misi: { eyebrow:'ARENA TANTANGAN', title:'Saatnya unjuk strategi', detail:'Selesaikan tantangan satu per satu. Setiap jawaban benar membuka langkah berikutnya.', icon:'⌘', tag:'COBA & PECAHKAN' },
      latihan: { eyebrow:'STUDIO LATIHAN', title:'Latih cara berpikirmu', detail:'Gunakan konsep yang sudah dipelajari untuk memecahkan situasi yang berbeda.', icon:'✎', tag:'ASAH KEMAMPUAN' },
      kuis: { eyebrow:'PANGGUNG KUIS', title:'Siap menguji kemampuan?', detail:'Jawab pertanyaan sampai tuntas dan lihat seberapa jauh pemahamanmu berkembang.', icon:'★', tag:'UJI PEMAHAMAN' }
    }[menu];
    const number = String(chapterId).padStart(2,'0');
    const count = menu==='materi' ? `${chapter.topics.length} pokok bahasan` : menu==='misi' ? `${chapter.missions.length} misi` : menu==='latihan' ? `${chapter.practice.length} latihan` : `${chapter.quiz.length} pertanyaan`;
    return `<section class="chapter-cover chapter-cover-${menu}">
      <div class="chapter-cover-copy">
        <span class="chapter-cover-eyebrow"><i>${labels.icon}</i>${labels.eyebrow} · BAB ${number}</span>
        <h2>${chapter.title}</h2>
        <p>${menu==='materi'?chapter.objective:labels.detail}</p>
        <div class="chapter-cover-tags"><span>${labels.tag}</span><span>INFORMATIKA KELAS VII</span><span>${count}</span></div>
      </div>
      <div class="chapter-cover-art" aria-hidden="true"><span class="chapter-cover-orbit orbit-a"></span><span class="chapter-cover-orbit orbit-b"></span><small>CHAPTER</small><strong>${number}</strong><em>${labels.icon}</em></div>
    </section>`;
  }

  const chapterPromptContent = {
    1: { title:'Bagaimana sebuah proyek kelas bisa berjalan dengan baik?', detail:'Mulai dari tujuan bersama, pembagian peran, perencanaan kerja, hingga menyampaikan hasil kepada orang lain.' },
    2: { title:'Pernah mengikuti petunjuk untuk mencapai suatu tujuan?', detail:'Contohnya mengikuti resep, petunjuk arah, atau aturan permainan. Semua itu membutuhkan langkah yang jelas dan berurutan.' },
    3: { title:'Pernah kesulitan menemukan file yang kamu simpan?', detail:'Folder, nama file, peramban, surel, dan aplikasi perkantoran membantu kita mengelola informasi.' },
    4: { title:'Apa yang terjadi setelah kamu menekan tombol pada komputer?', detail:'Perangkat masukan mengirim data, pemroses mengolahnya, lalu perangkat keluaran menampilkan hasil.' },
    5: { title:'Bagaimana pesan bisa sampai ke perangkat lain?', detail:'Jaringan menghubungkan perangkat, sementara proteksi data membantu menjaga informasi saat dikirim.' },
    6: { title:'Bagaimana data berubah menjadi informasi yang bermakna?', detail:'Dengan menyusun, mengolah, mengurutkan, menyaring, dan menafsirkan data, kita dapat menemukan hal penting.' },
    7: { title:'Bagaimana karakter di layar mengikuti perintahmu?', detail:'Program menggabungkan blok instruksi, pemicu, gerak, tampilan, dan pengulangan.' },
    8: { title:'Apakah semua informasi aman dibagikan di internet?', detail:'Teknologi memberikan manfaat sekaligus risiko. Kita perlu berkolaborasi dengan baik dan menjaga privasi.' },
    9: { title:'Pernah membuat alat sederhana yang bisa merespons sentuhan atau tombol?', detail:'Artefak komputasional dibuat melalui ide, rancangan, perakitan, pemrograman, dan pengujian.' }
  };

  function chapterPromptBanner(chapterId) {
    const prompt = chapterPromptContent[chapterId] || chapterPromptContent[2];
    const visual = chapterVisuals[chapterId] || chapterVisuals[2] || {icon:'✦'};
    return `<div class="concept-banner chapter-concept-banner" role="note" aria-label="Pertanyaan pemantik Bab ${chapterId}">
      <div class="concept-mark">${visual.icon || '✦'}</div>
      <div><span class="mini-label">PERTANYAAN PEMANTIK</span><h2>${escapeHtml(prompt.title)}</h2><p>${escapeHtml(prompt.detail)}</p></div>
    </div>`;
  }

  const chapterVisuals = {
    1: { icon:'🤝', prompt:'Informatika bukan hanya tentang komputer. Siap menemukan cara kerja ide, tim, dan solusi?', scenes:[['🧩','Temukan masalah'],['🤝','Bagi peran'],['📋','Susun rencana'],['🎤','Bagikan hasil']] },
    2: { icon:'🧭', prompt:'Pernah mengikuti petunjuk untuk mencapai suatu tujuan?', scenes:[['🧩','Rumuskan masalah'],['🔁','Temukan pola'],['🗺️','Susun langkah'],['🏁','Uji solusi']] },
    3: { icon:'🗂️', prompt:'Setiap hari kita berinteraksi dengan aplikasi, file, dan informasi. Yuk, kuasai perkakas digital!', scenes:[['📱','Antarmuka'],['🗂️','Kelola file'],['🔎','Cari info'],['✉️','Kirim pesan']] },
    4: { icon:'⚙️', prompt:'Pernah berpikir apa yang terjadi di dalam komputer setelah kamu menekan tombol?', scenes:[['⌨️','Input'],['🧠','Proses'],['🖥️','Output'],['💾','Simpan']] },
    5: { icon:'🌐', prompt:'Bagaimana pesan bisa sampai ke teman yang berada jauh? Mari jelajahi jaringan dan keamanan data.', scenes:[['📶','Terhubung'],['🔗','Berbagi data'],['🌍','Internet'],['🔐','Lindungi']] },
    6: { icon:'📊', prompt:'Angka dan catatan bisa bercerita. Belajar membaca, mengolah, dan menemukan makna dari data!', scenes:[['🗃️','Kumpulkan'],['🧮','Olah'],['📈','Bandingkan'],['💡','Simpulkan']] },
    7: { icon:'🧩', prompt:'Bayangkan kamu bisa memberi perintah kepada karakter di layar. Saatnya mengenal dunia pemrograman!', scenes:[['🐱','Sprite'],['🧱','Blok kode'],['🚩','Jalankan'],['🎮','Interaksi']] },
    8: { icon:'🛡️', prompt:'Dunia digital punya banyak peluang sekaligus tantangan. Jadilah pengguna teknologi yang bijak!', scenes:[['📱','Gunakan'],['💬','Berinteraksi'],['🧭','Periksa'],['🔒','Lindungi']] },
    9: { icon:'🔌', prompt:'Saatnya membuat sesuatu! Gabungkan ide, alat, program, dan pengujian menjadi karya yang bisa dicoba.', scenes:[['💡','Rancang'],['🔌','Rakit'],['🎹','Buat'],['🧪','Uji']] }
  };

  const chapterJourneys = {
    1: {title:'Dari ide menjadi karya bersama',intro:'Sebuah proyek yang baik berawal dari tujuan yang jelas, dilanjutkan kerja sama, lalu disampaikan kepada orang lain.',steps:['Kenali masalah dan tujuan','Bagi tugas sesuai kemampuan','Kerjakan dan periksa hasil','Ceritakan proses serta hasil']},
    3: {title:'Misi digital: kelola informasi',intro:'Gunakan aplikasi dengan tepat agar file rapi, informasi mudah ditemukan, dan pesan tersampaikan dengan benar.',steps:['Kenali ikon dan menu aplikasi','Simpan file pada folder yang tepat','Cari informasi dari sumber relevan','Periksa penerima sebelum mengirim']},
    4: {title:'Perjalanan sebuah perintah',intro:'Komputer menerima masukan, mengolahnya, lalu menghasilkan keluaran. Data juga dapat disimpan untuk digunakan kembali.',steps:['Masukkan data atau perintah','CPU memproses instruksi','Tampilkan hasil melalui output','Simpan data yang diperlukan']},
    5: {title:'Kirim data, jaga keamanannya',intro:'Jaringan menghubungkan perangkat. Koneksi yang tepat memudahkan pertukaran data, sedangkan proteksi membantu menjaga informasi.',steps:['Pilih jaringan yang dibutuhkan','Hubungkan perangkat dengan tepat','Kirim atau terima informasi','Lindungi data dengan kebiasaan aman']},
    6: {title:'Dari data menjadi keputusan',intro:'Data perlu disusun dan diolah sebelum ditafsirkan. Spreadsheet membantu menghitung, mengurutkan, menyaring, dan membandingkan informasi.',steps:['Kumpulkan data yang relevan','Susun data dalam lembar kerja','Gunakan fungsi dan fitur pengolahan','Baca hasil lalu tarik kesimpulan']},
    7: {title:'Buat program yang bisa dijalankan',intro:'Susun blok, tentukan pemicu, atur gerakan atau tampilan, lalu jalankan program untuk melihat apakah hasilnya sesuai.',steps:['Pilih sprite dan backdrop','Susun blok instruksi','Tentukan event dan alur','Jalankan, amati, lalu perbaiki']},
    8: {title:'Jadi warga digital yang bertanggung jawab',intro:'Teknologi dapat membantu belajar dan berkolaborasi. Kita juga perlu menjaga privasi, menghargai orang lain, dan memeriksa informasi.',steps:['Pahami manfaat dan risikonya','Berkomunikasi dengan sopan','Periksa informasi sebelum berbagi','Jaga data pribadi dan persetujuan']},
    9: {title:'Rancang, buat, dan uji artefak',intro:'Karya komputasional dibuat melalui perencanaan dan kolaborasi. Hasilnya perlu diuji agar sesuai dengan tujuan awal.',steps:['Tentukan tujuan dan kebutuhan','Rancang input serta output','Buat karya dengan alat yang tersedia','Uji, dokumentasikan, dan perbaiki']}
  };

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  function sceneMarkup(chapterId, index = 0, mode = 'card') {
    const visual = chapterVisuals[chapterId] || chapterVisuals[3];
    const scenes = visual.scenes;
    const offset = (index * 2) % scenes.length;
    const rotated = scenes.map((_,i)=>scenes[(i+offset)%scenes.length]);
    const count = mode === 'wide' ? 4 : 3;
    const chosen = rotated.slice(0,count);
    const variant = index % 3;
    return `<div class="chapter-scene chapter-scene-${mode} scene-variant-${variant}" aria-label="Ilustrasi aktivitas ${escapeHtml(chosen.map(x=>x[1]).join(', '))}">
      <div class="chapter-scene-orbit" aria-hidden="true"></div>
      ${chosen.map((item,i)=>`<div class="chapter-scene-node node-${i+1}"><span>${item[0]}</span><small>${escapeHtml(item[1])}</small></div>`).join('')}
      ${mode==='wide'?'<span class="chapter-scene-spark">✦</span>':''}
    </div>`;
  }

  function materialCard(topic, i, chapterId) {
    const tagClasses=['pill-violet','pill-lime','pill-orange','pill-blue'];
    const tags=['KONSEP UTAMA','COBA AMATI','CONTOH NYATA','IDE PENTING'];
    const wide = i===0 || i===3 || i===7;
    const split = i===3 || i===7;
    const visual = sceneMarkup(chapterId,i,wide?'wide':'card');
    const topicTitle=escapeHtml(topic[0]), body=escapeHtml(topic[1]), example=escapeHtml(topic[2]);
    return `<article class="lesson-card chapter-lesson-card ${wide?'lesson-wide':''} ${split?'chapter-lesson-split':''} lesson-variant-${i%4}">
      <div class="lesson-top"><span class="lesson-index">${String.fromCharCode(65+i)}</span><span class="pill ${tagClasses[i%4]}">${tags[i%4]}</span></div>
      ${split?`<div class="chapter-lesson-layout"><div><h2>${topicTitle}</h2><p>${body}</p><div class="callout-line"><span>IDE UTAMA</span><strong>${example}</strong></div></div>${visual}</div>`:`${visual}<h2>${topicTitle}</h2><p>${body}</p><div class="chapter-example"><b>COBA BAYANGKAN</b><span>${example}</span></div>`}
    </article>`;
  }

  function renderMaterial(chapterId) {
    const c=chapters[chapterId], p=getState(chapterId), journey=chapterJourneys[chapterId]||chapterJourneys[3];
    const topics=c.topics;
    const cards=topics.map((t,i)=>materialCard(t,i,chapterId)).join('');
    return `${chapterCover('materi',chapterId,c)}<div class="chapter-module chapter-module-material chapter-bab2-style chapter-theme-${chapterId}">
      ${chapterPromptBanner(chapterId)}
      <div class="chapter-material-heading"><div><span class="eyebrow">BEKAL PETUALANGAN</span><h2>Temukan ide pentingnya <em> satu per satu.</em></h2><p>${escapeHtml(c.objective)}</p></div><div class="chapter-material-badge"><strong>${topics.length}</strong><span>TOPIK</span></div></div>
      <div class="lesson-grid chapter-lesson-grid">${cards}</div>
      <div class="example-panel chapter-example-panel"><div class="example-copy"><div class="eyebrow">CONTOH DALAM KEHIDUPAN</div><h2>${escapeHtml(journey.title)}</h2><p>${escapeHtml(journey.intro)}</p>${sceneMarkup(chapterId,2,'wide')}</div><ol class="step-list">${journey.steps.map((step,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${escapeHtml(step)}</li>`).join('')}</ol></div>
      <div class="chapter-source-note"><span>✦</span> Materi disusun mengikuti cakupan Bab ${chapterId} buku <em>Informatika untuk SMP Kelas VII</em>, dengan contoh dan ilustrasi yang dikembangkan untuk media pembelajaran ini.</div>
      <div class="lesson-footer chapter-lesson-footer"><p>${p.materiDone?'Materi ini sudah pernah kamu tandai selesai. Kamu bebas menjelajahinya kembali.':'Sudah siap mencoba tantangan? Gunakan bekal yang baru kamu pelajari untuk menyelesaikan misi.'}</p><button type="button" class="btn btn-primary" data-chapter-complete="materi" data-chapter="${chapterId}">${p.materiDone?'Buka Misi Bab '+chapterId:'Saya sudah memahami'} <span>→</span></button></div>
    </div>`;
  }

  function renderMissionTab(task, i, p, chapterId, firstUnfinished, allDone, current) {
    const done=Boolean(p.missions[i]);
    const locked=!done&&!allDone&&firstUnfinished>=0&&i>firstUnfinished;
    const short=task.shortTitle||task.title;
    return `<button type="button" class="mission-tab ${i===current?'active':''} ${done?'is-complete':''}" data-chapter-step="${i}" data-chapter="${chapterId}" ${locked?'disabled':''} aria-current="${i===current?'step':'false'}" title="${escapeHtml(task.title)}"><span>${String(i+1).padStart(2,'0')}</span>${escapeHtml(short)}</button>`;
  }

  function missionWorldMarkup(chapterId, index) {
    const n=String(index+1).padStart(2,'0');
    const worlds={
      1:{name:'WORKSHOP TIM',sub:'PAPAN PROYEK',body:`<div class="world-team-members"><span>🧑‍🎨<b>Perancang</b></span><span>🧑‍💻<b>Pembuat</b></span><span>🧑‍🔬<b>Penguji</b></span><span>🧑‍🏫<b>Koordinator</b></span></div><div class="world-project-board"><i>PROYEK KELAS · LEVEL ${n}</i><strong>🎪 Pameran Informatika</strong><div><span style="width:${18+index*7}%"></span></div><small>Susun strategi agar seluruh anggota dapat berkontribusi.</small></div>`},
      3:{name:'DIGITAL DESK',sub:'FILE MANAGER',body:`<div class="world-desktop-icons"><span>📄<b>Tugas-${n}.docx</b></span><span>🖼️<b>Foto-${n}.jpg</b></span><span>📊<b>Data-${n}.xlsx</b></span><span>🎞️<b>Presentasi.pptx</b></span></div><div class="world-folder-row"><span>📁 TUGAS</span><span>📁 FOTO</span><span>📁 PRESENTASI</span></div><small class="world-status">DESKTOP SIAP · PILIH AKSI UNTUK MENGELOLA FILE</small>`},
      4:{name:'SYSTEM LAB',sub:'ALUR SISTEM KOMPUTER',body:`<div class="world-computer-flow"><span><i>⌨️</i><b>INPUT</b><small>Masukan</small></span><em>➜</em><span class="world-core"><i>🧠</i><b>PROCESS</b><small>CPU / Memori</small></span><em>➜</em><span><i>🖥️</i><b>OUTPUT</b><small>Keluaran</small></span></div><div class="world-circuit-line"><i></i><i></i><i></i><i></i></div><small class="world-status">SISTEM MENUNGGU INSTRUKSI · LEVEL ${n}</small>`},
      5:{name:'NETWORK NAVIGATOR',sub:'PETA KONEKSI',body:`<div class="world-network-map"><span class="network-node node-device">📱<b>Perangkat</b></span><i class="network-link link-one"></i><span class="network-node node-router">📶<b>Router</b></span><i class="network-link link-two"></i><span class="network-node node-cloud">☁️<b>Internet</b></span><i class="network-link link-three"></i><span class="network-node node-lock">🔐<b>Data aman</b></span></div><small class="world-status">JALUR DATA · PILIH RUTE YANG TEPAT</small>`},
      6:{name:'DATA OBSERVATORY',sub:'PUSAT ANALISIS',body:`<div class="world-data-layout"><div class="world-data-table"><span>DATA KUNJUNGAN</span><b>Senin <i>24</i></b><b>Selasa <i>18</i></b><b>Rabu <i>32</i></b></div><div class="world-data-chart"><i style="height:42%"></i><i style="height:30%"></i><i style="height:66%"></i><i style="height:50%"></i><i style="height:82%"></i></div></div><small class="world-status">DATA MASUK · TEMUKAN POLA DAN INFORMASINYA</small>`},
      7:{name:'SCRATCH PLAYGROUND',sub:'STAGE & BLOCKS',body:`<div class="world-scratch-stage"><div class="world-scratch-cat">🐱<small>SPRITE 01</small></div><div class="world-scratch-code"><span class="block-event">🚩 when green flag clicked</span><span class="block-motion">move 10 steps</span><span class="block-control">repeat / if</span><span class="block-look">next costume</span></div></div><small class="world-status">PROGRAM SIAP DIJALANKAN · LEVEL ${n}</small>`},
      8:{name:'CYBER GUARDIAN',sub:'RUANG KENDALI PRIVASI',body:`<div class="world-cyber-layout"><div class="world-shield">🛡️<b>SAFE ZONE</b><small>PRIVACY SHIELD</small></div><div class="world-alerts"><span>⚠️ Tautan asing</span><span>🔑 Permintaan OTP</span><span>👁️ Izin data</span></div></div><div class="world-security-meter"><i style="width:${30+index*6}%"></i></div><small class="world-status">JAGA AKUN, DATA, DAN JEJAK DIGITAL</small>`},
      9:{name:'MAKER STUDIO',sub:'LAB ARTEFAK',body:`<div class="world-maker-layout"><div class="world-makey"><b>MAKEY<br>MAKEY</b><span>↑</span><span>↓</span><span>←</span><span>→</span><span>SPACE</span></div><div class="world-maker-circuit"><i>🪙</i><em>〰〰〰</em><i>💻</i><em>〰〰〰</em><i>🔊</i></div></div><small class="world-status">INPUT → PROGRAM → OUTPUT · UJI ARTEFAK</small>`}
    };
    const world=worlds[chapterId]||worlds[1];
    return `<div class="mission-world mission-world-${chapterId}" aria-label="${world.name}"><div class="mission-world-top"><span>${world.name}</span><b>${world.sub}</b><i>● LIVE</i></div><div class="mission-world-body">${world.body}</div><div class="mission-world-bottom"><span>✦ EXPLORATION MODE</span><span>STAGE ${n} / 10</span></div></div>`;
  }

  function renderMissionCard(task, i, chapterId, done) {
    const missionModes=[['🧭','RUTE MISI'],['🎒','PILIH PERLENGKAPAN'],['🔎','PEMINDAIAN'],['🧩','PUZZLE'],['⚡','STRATEGI'],['🛠️','PERBAIKAN'],['📡','RADAR'],['🧠','LOGIKA'],['🚀','LEVEL LANJUT'],['👑','BOSS CHALLENGE']];
    const [modeIcon,modeLabel]=missionModes[i%missionModes.length];
    const icons={1:['🤝','🧩','📋'],3:['📁','🖼️','🔎'],4:['⌨️','🧠','🖥️'],5:['📶','🗺️','🔐'],6:['📊','🧮','📈'],7:['🧱','🐱','🚩'],8:['🛡️','🔒','👁️'],9:['🔌','🎹','🧪']};
    const actionIcons=icons[chapterId]||['🧭','⚙️','✨'];
    const options=task.options.map((opt,j)=>`<button type="button" class="mission-action-card action-variant-${j%4} ${done&&j===task.correct?'is-correct':''}" data-chapter-answer="misi" data-chapter="${chapterId}" data-task="${i}" data-option="${j}" ${done?'disabled':''}>
      <span class="mission-action-icon">${actionIcons[j%actionIcons.length]}</span>
      <span class="mission-action-copy"><small>${['AKSI','GERAKAN','STRATEGI'][j%3]} ${String(j+1).padStart(2,'0')}</small><b>${escapeHtml(opt)}</b><em>${done&&j===task.correct?'✓ BERHASIL':'PILIH & JALANKAN ↗'}</em></span>
    </button>`).join('');
    const actionHeading={1:'TENTUKAN LANGKAH TIM',3:'PILIH AKSI DI MEJA DIGITAL',4:'JALANKAN DI SISTEM LAB',5:'PILIH JALUR PENGIRIMAN',6:'PILIH ALAT ANALISIS',7:'SUSUN AKSI PROGRAM',8:'AKTIFKAN PERLINDUNGAN',9:'JALANKAN UJI ARTEFAK'}[chapterId]||'PILIH AKSI PETUALANGAN';
    return `<article class="mission-panel chapter-task-card chapter-bab2-mission-panel active mission-game-card mission-mode-${i%5} ${done?'is-complete':''}" data-chapter-task="${i}">
      <div class="mission-heading"><div><span class="pill ${['pill-lime','pill-violet','pill-orange','pill-blue'][i%4]}">LEVEL ${String(i+1).padStart(2,'0')} · ${modeLabel}</span><h2>${escapeHtml(task.title)}</h2><p>${escapeHtml(task.story||'Jelajahi tantangan dan temukan strategi yang paling tepat.')}</p></div><div class="mission-score mission-level-stamp"><strong>${modeIcon}</strong><small>+50 XP</small></div></div>
      <div class="mission-game-hud"><span><i>✦</i> PETUALANGAN BAB ${String(chapterId).padStart(2,'0')}</span><span>LEVEL ${String(i+1).padStart(2,'0')} / 10</span><span class="mission-game-reward">🏅 ${i===9?'FINAL BADGE':'50 XP'}</span></div>
      ${missionWorldMarkup(chapterId,i)}
      <div class="mission-objective-panel"><div><span class="mini-label">TARGET MISI</span><h3>${escapeHtml(task.prompt)}</h3></div><span class="objective-spark">${modeIcon}</span></div>
      <div class="mission-action-heading"><span class="mini-label">${actionHeading}</span><small>${done?'LEVEL SUDAH DITAKLUKKAN':'Pilih aksi, lalu lihat hasilnya'}</small></div>
      <div class="mission-action-grid">${options}</div>
      <div class="feedback chapter-feedback ${done?'success':''}" aria-live="polite">${done?`Misi berhasil! ${escapeHtml(task.explain)}`:''}</div>
      <div class="chapter-task-foot"><span>${done?'Keren! Bintang level ini sudah kamu dapatkan.':'Setiap aksi mengubah jalannya petualangan. Jika belum berhasil, coba strategi lain.'}</span><span class="chapter-foot-spark">✦</span></div>
    </article>`;
  }

  function practiceGameKey(chapterId, taskIndex, mode='latihan') { return `${mode}:${chapterId}:${taskIndex}`; }
  function practiceGameSession(chapterId, taskIndex, game, mode='latihan') {
    const key=practiceGameKey(chapterId,taskIndex,mode);
    if(!practiceGameSessions.has(key)) practiceGameSessions.set(key,{selectedLeft:null,matched:[],order:[],selectedItem:null,placed:[],position:game.start??0,path:[game.start??0],moves:0});
    return practiceGameSessions.get(key);
  }

  function renderPathBoard(game, session, chapterId, taskIndex, mode, done) {
    const action=mode==='misi'?'data-mission-game-action':'data-practice-game-action';
    const cells=Array.from({length:16},(_,i)=>{
      const classes=['mission-path-cell'];
      if(i===game.start)classes.push('is-start');
      if(i===game.goal)classes.push('is-goal');
      if((game.obstacles||[]).includes(i))classes.push('is-wall');
      if(session.path.includes(i)&&i!==session.position)classes.push('is-trail');
      if(i===session.position)classes.push('is-player');
      const label=i===session.position?(game.token||'🚀'):i===game.goal?'🏁':(game.obstacles||[]).includes(i)?'■':i===game.start?'●':'';
      return `<div class="${classes.join(' ')}" data-path-cell="${i}">${label}</div>`;
    }).join('');
    return `<div class="mission-path-game">
      <div class="mission-path-meta"><span>📍 ${escapeHtml(game.startLabel||'MULAI')}</span><span>🏁 ${escapeHtml(game.goalLabel||'TUJUAN')}</span><span>■ RINTANGAN</span></div>
      <div class="mission-path-grid" data-path-grid>${cells}</div>
      <div class="mission-path-controls">
        <div class="path-dpad">
          <button type="button" ${action}="path-up" data-chapter="${chapterId}" data-task="${taskIndex}" ${done?'disabled':''} aria-label="Ke atas">↑</button>
          <button type="button" ${action}="path-left" data-chapter="${chapterId}" data-task="${taskIndex}" ${done?'disabled':''} aria-label="Ke kiri">←</button>
          <button type="button" ${action}="path-down" data-chapter="${chapterId}" data-task="${taskIndex}" ${done?'disabled':''} aria-label="Ke bawah">↓</button>
          <button type="button" ${action}="path-right" data-chapter="${chapterId}" data-task="${taskIndex}" ${done?'disabled':''} aria-label="Ke kanan">→</button>
        </div>
        <div class="path-move-summary"><b data-path-moves>${session.moves} langkah</b><small data-path-message>Gerakkan karaktermu menuju bendera.</small><button type="button" class="btn btn-small btn-ghost" ${action}="path-reset" data-chapter="${chapterId}" data-task="${taskIndex}" ${done?'disabled':''}>↶ Ulangi jalur</button></div>
      </div>
    </div>`;
  }

  function renderGameBoard(game, taskIndex, chapterId, done, mode='latihan') {
    const action=mode==='misi'?'data-mission-game-action':'data-practice-game-action';
    if(game.type==='path'){
      const session=practiceGameSession(chapterId,taskIndex,game,mode);
      return renderPathBoard(game,session,chapterId,taskIndex,mode,done)+`<div class="mini-game-progress" data-game-progress>${done?'TUJUAN TERCAPAI':`${session.moves} LANGKAH`}</div>`;
    }
    const session=practiceGameSession(chapterId,taskIndex,game,mode);
    let board='';
    if(game.type==='match'){
      const rightOrder=game.rightOrder||game.pairs.map((_,i)=>i).reverse();
      board=`<div class="match-game-board"><div class="match-game-column"><span class="mini-label">KARTU KIRI</span>${game.pairs.map((pair,i)=>`<button type="button" class="match-game-tile" ${action}="match-left" data-chapter="${chapterId}" data-task="${taskIndex}" data-item="${i}" ${done?'disabled':''}>${escapeHtml(pair.left)}<small>Pasangkan ↗</small></button>`).join('')}</div><div class="match-game-connector" aria-hidden="true">⟷</div><div class="match-game-column"><span class="mini-label">KARTU KANAN</span>${rightOrder.map(i=>`<button type="button" class="match-game-tile" ${action}="match-right" data-chapter="${chapterId}" data-task="${taskIndex}" data-item="${i}" ${done?'disabled':''}>${escapeHtml(game.pairs[i].right)}<small>Hubungkan ↗</small></button>`).join('')}</div></div><div class="mini-game-progress" data-game-progress>${done?game.pairs.length:session.matched.length} / ${game.pairs.length} PASANGAN COCOK</div>`;
    } else if(game.type==='sequence'){
      const order=game.tileOrder||game.steps.map((_,i)=>i).reverse();
      const picked=session.order.map((stepIndex,pos)=>`<span class="sequence-picked-chip"><b>${String(pos+1).padStart(2,'0')}</b>${escapeHtml(game.steps[stepIndex])}</span>`).join('');
      board=`<div class="sequence-game-board"><div class="sequence-game-tray">${order.map(i=>`<button type="button" class="sequence-game-tile ${session.order.includes(i)?'is-selected':''}" ${action}="sequence" data-chapter="${chapterId}" data-task="${taskIndex}" data-item="${i}" ${done||session.order.includes(i)?'disabled':''}><span>${String(i+1).padStart(2,'0')}</span>${escapeHtml(game.steps[i])}<small>${session.order.includes(i)?'✓ DIPILIH':'KETUK KARTU'}</small></button>`).join('')}</div><div class="sequence-picked-wrap"><span class="mini-label">URUTAN YANG KAMU SUSUN</span><div class="sequence-picked-list" data-sequence-picked>${picked||'<span class="sequence-picked-empty">Belum ada langkah dipilih. Ketuk kartu untuk menyusun urutan.</span>'}</div></div><div class="sequence-game-controls"><button type="button" class="btn btn-small btn-ghost" ${action}="sequence-reset" data-chapter="${chapterId}" data-task="${taskIndex}" ${done||!session.order.length?'disabled':''}>↶ Atur ulang</button><button type="button" class="btn btn-small btn-primary" ${action}="sequence-check" data-chapter="${chapterId}" data-task="${taskIndex}" ${done||session.order.length!==game.steps.length?'disabled':''}>Periksa urutan →</button></div><div class="sequence-game-caption">Ketuk kartu dari langkah paling awal sampai selesai. Setelah semua kartu dipilih, periksa susunannya.</div></div><div class="mini-game-progress" data-game-progress>${done?game.steps.length:session.order.length} / ${game.steps.length} LANGKAH DIPILIH</div>`;
    } else if(game.type==='classify'){
      board=`<div class="classify-game-board"><div class="classify-game-items"><span class="mini-label">KARTU YANG HARUS DIPILAH</span>${game.items.map((item,i)=>`<button type="button" class="classify-game-tile" ${action}="classify-item" data-chapter="${chapterId}" data-task="${taskIndex}" data-item="${i}" ${done?'disabled':''}>${escapeHtml(item.text)}<small>${session.placed.includes(i)?'✓ Tersusun': 'Pilih kartu'}</small></button>`).join('')}</div><div class="classify-game-bins">${game.groups.map((group,i)=>`<button type="button" class="classify-game-bin" ${action}="classify-bin" data-chapter="${chapterId}" data-task="${taskIndex}" data-bin="${i}" ${done?'disabled':''}><span>${i===0?'📦':'🧺'}</span><b>${escapeHtml(group)}</b><small>Letakkan kartu di sini</small></button>`).join('')}</div></div><div class="mini-game-progress" data-game-progress>${done?game.items.length:session.placed.length} / ${game.items.length} KARTU TERSUSUN</div>`;
    } else if(game.type==='odd'){
      board=`<div class="odd-game-board">${game.items.map((item,i)=>`<button type="button" class="odd-game-tile" ${action}="odd" data-chapter="${chapterId}" data-task="${taskIndex}" data-item="${i}" ${done?'disabled':''}><span>${['🧩','🔍','🗂️','✨'][i%4]}</span><b>${escapeHtml(item)}</b><small>Periksa item</small></button>`).join('')}</div>`;
    } else {
      board=`<div class="practice-game-decision-grid">${game.options.map((option,i)=>`<button type="button" class="practice-game-decision" ${action}="decision" data-chapter="${chapterId}" data-task="${taskIndex}" data-option="${i}" ${done?'disabled':''}><span>${['🧭','⚡','🧠','🛠️'][i%4]}</span><b>${escapeHtml(option)}</b><small>Jalankan strategi ↗</small></button>`).join('')}</div>`;
    }
    return board;
  }

  function renderPracticeGame(game, taskIndex, chapterId, done, mode='latihan') {
    const tag={match:'COCOKKAN PASANGAN',sequence:'SUSUN LANGKAH',classify:'KELOMPOKKAN DATA',odd:'CARI YANG GANJIL',decision:'PILIH STRATEGI',path:'NAVIGASI ARENA'}[game.type]||'MINI GAME';
    const feedback=done?`Berhasil! ${escapeHtml(game.explain)}`:'';
    const board=renderGameBoard(game,taskIndex,chapterId,done,mode);
    if(mode==='misi'){
      const missionModes=[['🧭','RUTE MISI'],['🧩','PUZZLE LOGIKA'],['🎯','TARGET'],['🔎','DETEKTIF'],['⚡','STRATEGI'],['🛠️','PERBAIKAN'],['📡','RADAR'],['🧠','TANTANGAN'],['🚀','LEVEL LANJUT'],['👑','BOSS CHALLENGE']];
      const [modeIcon,modeLabel]=missionModes[taskIndex%missionModes.length];
      return `<article class="mission-panel chapter-task-card chapter-bab2-mission-panel active mission-game-card mission-gameplay-card ${done?'is-complete':''}" data-chapter-task="${taskIndex}" data-mission-game-card>
        <div class="mission-heading"><div><span class="pill ${['pill-lime','pill-violet','pill-orange','pill-blue'][taskIndex%4]}">LEVEL ${String(taskIndex+1).padStart(2,'0')} · ${modeLabel}</span><h2>${escapeHtml(game.title)}</h2><p>${escapeHtml(game.story)}</p></div><div class="mission-score mission-level-stamp"><strong>${modeIcon}</strong><small>+50 XP</small></div></div>
        <div class="mission-game-hud"><span><i>✦</i> PETUALANGAN BAB ${String(chapterId).padStart(2,'0')}</span><span>LEVEL ${String(taskIndex+1).padStart(2,'0')} / 10</span><span class="mission-game-reward">🏅 ${taskIndex===9?'FINAL BADGE':'50 XP'}</span></div>
        ${missionWorldMarkup(chapterId,taskIndex)}
        <div class="mission-objective-panel"><div><span class="mini-label">TARGET MISI</span><h3>${escapeHtml(game.instruction)}</h3></div><span class="objective-spark">${modeIcon}</span></div>
        <div class="mini-game-kicker mission-game-kicker"><span>🎮 INTERAKSI MISI ${String(taskIndex+1).padStart(2,'0')}</span><span>${tag}</span></div>
        ${board}
        <div class="feedback chapter-feedback ${done?'success':''}" aria-live="polite">${feedback}</div>
        <div class="chapter-task-foot"><span>${done?'Keren! Tantangan ini sudah kamu taklukkan.':'Jelajahi arena, coba aksimu, dan capai target tanpa takut mencoba lagi.'}</span><span class="chapter-foot-spark">✦</span></div>
      </article>`;
    }
    return `<article class="practice-card chapter-task-card chapter-game-card chapter-bab2-practice-card game-type-${game.type} ${done?'is-complete':''}" data-chapter-task="${taskIndex}" data-practice-game-card>
      <div class="practice-number">${String(taskIndex+1).padStart(2,'0')}</div><div class="practice-content">
        <div class="mini-game-kicker"><span>🎮 MINI GAME ${String(taskIndex+1).padStart(2,'0')}</span><span>+30 XP</span></div>
        <span class="pill ${['pill-violet','pill-orange','pill-blue','pill-lime','pill-violet'][taskIndex%5]}">${tag}</span>
        <h2>${escapeHtml(game.title)}</h2><p class="chapter-practice-story">${escapeHtml(game.story)}</p>
        <div class="mini-game-instruction"><span>✦</span>${escapeHtml(game.instruction)}</div>
        ${board}
        <div class="feedback chapter-feedback ${done?'success':''}" aria-live="polite">${feedback}</div>
      </div>
    </article>`;
  }

  function renderPracticeQuestion(task, taskIndex, chapterId, done) {
    const label=['AMATI SITUASI','PILIH STRATEGI','COBA TERAPKAN','UJI PEMAHAMAN'][taskIndex%4];
    return `<article class="practice-card chapter-task-card chapter-bab2-practice-card chapter-practice-regular-card ${done?'is-complete':''}" data-chapter-task="${taskIndex}">
      <div class="practice-number">${String(taskIndex+1).padStart(2,'0')}</div>
      <div class="practice-content"><span class="pill ${['pill-violet','pill-orange','pill-blue','pill-lime'][taskIndex%4]}">${label}</span><h2>${escapeHtml(task.title)}</h2>
        ${task.story?`<p class="chapter-practice-story">${escapeHtml(task.story)}</p>`:''}
        ${taskIndex%2===1?sceneMarkup(chapterId,taskIndex,'card'):''}
        <p class="question-prompt">${escapeHtml(task.prompt)}</p>
        <div class="choice-stack chapter-choice-list">${task.options.map((opt,j)=>`<button type="button" data-chapter-answer="latihan" data-chapter="${chapterId}" data-task="${taskIndex}" data-option="${j}" ${done?'disabled':''} class="practice-choice-tile ${done&&j===task.correct?'is-correct':''}"><span>${escapeHtml(opt)}</span><small>${done&&j===task.correct?'✓ BENAR':'PILIH INI ↗'}</small></button>`).join('')}</div>
        <div class="feedback chapter-feedback ${done?'success':''}" aria-live="polite">${done?`Benar! ${escapeHtml(task.explain)}`:''}</div>
      </div>
    </article>`;
  }

  function renderTasks(menu, chapterId) {
    const c=chapters[chapterId], p=getState(chapterId), isMission=menu==='misi';
    const practiceGames=c.practiceGames||[], missionGames=c.missionGames||[];
    const tasks=isMission?(missionGames.length?missionGames:c.missions):(practiceGames.length?[...practiceGames,...c.practice.slice(practiceGames.length)]:c.practice);
    const doneMap=isMission?p.missions:p.practices;
    const count=tasks.filter((_,i)=>Boolean(doneMap[i])).length, percent=Math.round(count/tasks.length*100), allDone=count===tasks.length;
    const reset=`<button type="button" class="btn btn-small btn-reset" data-chapter-reset="${menu}" data-chapter="${chapterId}">↻ Reset ${isMission?'Misi':'Latihan'} Bab ${chapterId}</button>`;
    const progress=`<div class="practice-progress-panel chapter-unified-progress"><div><span class="mini-label">${isMission?'PROGRES PETUALANGAN':'PROGRES LATIHAN'}</span><strong>${count}/${tasks.length} ${isMission?'MISI':'AKTIVITAS'} SELESAI</strong></div><div class="progress-track"><span style="width:${percent}%"></span></div>${reset}</div>`;
    const finish=`<div class="mission-completion chapter-bab2-completion ${allDone?'is-ready':''}" id="chapter-finish-${menu}-${chapterId}"><span class="completion-icon">✦</span><div class="mission-completion-copy"><b>${allDone?(isMission?'Semua misi berhasil ditaklukkan!':'Semua latihan berhasil diselesaikan!'):'Perjalananmu terus berjalan!'}</b><p>${allDone?(isMission?'Kamu sudah menuntaskan seluruh tantangan. Berikutnya, uji kemampuanmu di ruang latihan.':'Hebat! Semua latihan sudah selesai. Sekarang saatnya mengukur pemahaman lewat kuis.'):(isMission?'Selesaikan semua tantangan untuk membuka latihan.':'Teruskan sampai semua aktivitas selesai, lalu buka kuis.')}</p></div><strong>${count}/${tasks.length} SELESAI</strong>${allDone?`<button type="button" class="btn btn-primary" data-chapter-next="${isMission?'latihan':'kuis'}" data-chapter="${chapterId}">Lanjut ke ${isMission?'Latihan':'Kuis'} →</button>`:''}</div>`;

    if(isMission){
      const firstUnfinished=tasks.findIndex((_,i)=>!p.missions[i]);
      let current=Math.max(0,Math.min(tasks.length-1,Number(p.missionIndex)||0));
      if(!allDone && firstUnfinished>=0 && current>firstUnfinished && !p.missions[current]) current=firstUnfinished;
      p.missionIndex=current;
      const done=Boolean(p.missions[current]);
      const tabs=tasks.map((task,i)=>renderMissionTab(task,i,p,chapterId,firstUnfinished,allDone,current)).join('');
      const stage=missionGames.length?renderPracticeGame(tasks[current],current,chapterId,done,'misi'):renderMissionCard(tasks[current],current,chapterId,done);
      return `${chapterCover('misi',chapterId,c)}<div class="chapter-module chapter-module-mission chapter-bab2-style chapter-theme-${chapterId}">
        <div class="chapter-menu-toolbar"><div><span class="mini-label">PROGRES PETUALANGAN · BAB ${String(chapterId).padStart(2,'0')}</span><strong>${count}/${tasks.length} misi ditaklukkan</strong><div class="progress-track"><span style="width:${percent}%"></span></div></div>${reset}</div>
        <div class="mission-tabs chapter-mission-tabs" role="tablist" aria-label="Pilih misi Bab ${chapterId}">${tabs}</div>
        <div class="chapter-mission-stage">${stage}</div>
        ${finish}
      </div>`;
    }

    const cards=tasks.map((task,i)=>{
      const done=Boolean(p.practices[i]);
      if (i<practiceGames.length && task.type) return renderPracticeGame(task,i,chapterId,done,'latihan');
      return renderPracticeQuestion(task,i,chapterId,done);
    }).join('');
    return `${chapterCover('latihan',chapterId,c)}<div class="chapter-module chapter-module-practice chapter-bab2-style chapter-theme-${chapterId}">
      ${progress}
      <div class="practice-section-intro"><div><span class="eyebrow">RUANG LATIHAN · BAB ${String(chapterId).padStart(2,'0')}</span><h2>Asah kemampuanmu <em>sambil bermain.</em></h2><p>Lima aktivitas interaktif melatih logika dengan cara berbeda. Setelah itu, lanjutkan latihan pemecahan masalah.</p></div><div class="practice-count-stamp"><strong>${tasks.length}</strong><span>AKTIVITAS</span></div></div>
      <div class="practice-stack chapter-practice-stack">${cards}</div>
      ${finish}
    </div>`;
  }

  function renderQuiz(chapterId) {
    const c=chapters[chapterId], p=getState(chapterId), q=p.quiz, questions=c.quiz;
    const answered=Object.keys(q.answers).length, current=Math.max(0,Math.min(questions.length-1,Number(q.currentIndex)||0));
    q.currentIndex=current;
    if(q.submitted){
      const correct=questions.filter((item,i)=>q.answers[i]===item.correct).length;
      const reviews=questions.map((item,i)=>{
        const ok=q.answers[i]===item.correct;
        return `<div class="review-item ${ok?'correct':'wrong'}"><strong>${ok?'✓':'×'} ${String(i+1).padStart(2,'0')} · ${escapeHtml(item.prompt)}</strong><small>Jawabanmu: ${escapeHtml(item.options[q.answers[i]]||'Belum dijawab')}<br>Jawaban tepat: ${escapeHtml(item.options[item.correct])}. ${escapeHtml(item.explain)}</small></div>`;
      }).join('');
      const title=q.score>=85?'Luar biasa, kamu menguasainya!':q.score>=70?'Bagus, pemahamanmu berkembang!':q.score>=50?'Terus berlatih, kamu semakin dekat!':'Jangan menyerah, setiap percobaan membuatmu lebih paham!';
      return `${chapterCover('kuis',chapterId,c)}<div class="chapter-module chapter-module-quiz chapter-bab2-style chapter-theme-${chapterId}">
        <div class="quiz-result chapter-bab2-result"><div class="result-score"><span class="pill pill-lime">HASIL KUIS BAB ${chapterId}</span><strong>${q.score}</strong><span>NILAI KAMU · ${correct} DARI ${questions.length} BENAR</span><h2>${title}</h2><p>Luangkan waktu untuk membaca pembahasan. Kamu bisa mengulang kuis kapan saja.</p></div><div class="result-review">${reviews}</div><div class="quiz-result-actions"><button type="button" class="btn btn-primary" data-chapter-quiz-reset="${chapterId}">Ulangi kuis ↻</button><button type="button" class="btn btn-ghost" data-chapter-next="materi" data-chapter="${chapterId}">Baca materi lagi</button></div></div>
      </div>`;
    }
    const item=questions[current], progress=Math.round((current+1)/questions.length*100);
    const canSubmit=answered===questions.length;
    const scene=sceneMarkup(chapterId,current,'wide');
    const options=item.options.map((opt,j)=>`<button type="button" class="quiz-option ${q.answers[current]===j?'selected':''}" data-chapter-quiz-answer="${chapterId}" data-question="${current}" data-option="${j}"><span class="option-letter">${String.fromCharCode(65+j)}</span><span>${escapeHtml(opt)}</span></button>`).join('');
    const warning=`<p class="feedback error chapter-quiz-warning" hidden>Jawab pertanyaan ini sebelum melanjutkan.</p>`;
    return `${chapterCover('kuis',chapterId,c)}<div class="chapter-module chapter-module-quiz chapter-bab2-style chapter-theme-${chapterId}">
      <div class="quiz-chapter-intro"><div><span class="eyebrow">PANGGUNG KUIS · BAB ${String(chapterId).padStart(2,'0')}</span><h2>Uji pengetahuanmu <em>sampai akhir!</em></h2><p>Kerjakan ${questions.length} pertanyaan. Jawaban tersimpan otomatis selama kamu mengerjakan.</p></div><div class="quiz-count-stamp"><strong>${String(current+1).padStart(2,'0')}</strong><span> / ${questions.length}</span></div></div>
      <div class="chapter-quiz-status-panel"><div><span class="mini-label">PROGRES KUIS</span><strong>${answered}/${questions.length} TERJAWAB</strong></div><span class="chapter-quiz-percent">${Math.round(answered/questions.length*100)}%</span><div class="progress-track"><span style="width:${Math.round(answered/questions.length*100)}%"></span></div></div>
      <div class="quiz-shell chapter-bab2-quiz-shell">
        <div class="quiz-topline"><span class="pill pill-lime">KUIS BAB ${chapterId}</span><span>PERTANYAAN ${String(current+1).padStart(2,'0')} / ${questions.length}</span></div>
        <div class="quiz-progress"><span style="width:${progress}%"></span></div>
        <div class="quiz-question-area chapter-quiz-card-active">
          <div class="quiz-question-status-row"><div class="quiz-question-number">SOAL ${String(current+1).padStart(2,'0')} · ${chapterVisuals[chapterId]?.scenes[current%4]?.[1]?.toUpperCase()||'TANTANGAN'}</div><span class="chapter-task-status">${q.answers[current]!==undefined?'✓ SUDAH DIJAWAB':'PILIH SATU JAWABAN'}</span></div>
          ${scene}
          <h2 class="quiz-question">${escapeHtml(item.prompt)}</h2>
          <div class="quiz-options">${options}</div>${warning}
        </div>
        <div class="quiz-footer"><button type="button" class="btn btn-ghost" data-chapter-quiz-prev="${chapterId}" ${current===0?'disabled':''}>← Sebelumnya</button>${current===questions.length-1?`<button type="button" class="btn btn-primary" data-chapter-quiz-submit="${chapterId}">Kumpulkan jawaban ✓</button>`:`<button type="button" class="btn btn-primary" data-chapter-quiz-next="${chapterId}">Berikutnya →</button>`}</div>
      </div>
      ${canSubmit?'':`<p class="chapter-quiz-hint">Pilih jawaban sebelum melanjutkan. Kamu bisa kembali ke pertanyaan sebelumnya.</p>`}
      <div class="quiz-reminder"><span>✦</span><p>Ingat: kerjakan dengan teliti. Setelah semua jawaban dikumpulkan, kamu bisa melihat nilai dan pembahasan setiap soal.</p></div>
    </div>`;
  }

  function clearCompletionTimer(menu, chapterId) {
    const key = `${menu}-${chapterId}`;
    const pending = completionTimers.get(key);
    if (!pending) return;
    window.clearInterval(pending.interval);
    window.clearTimeout(pending.timeout);
    completionTimers.delete(key);
  }

  function setDynamicCompletion(menu, chapterId) {
    const p = getState(chapterId);
    const isMission = menu === 'misi'; const key = isMission?'missions':'practices';
    const total = isMission?chapters[chapterId].missions.length:chapters[chapterId].practice.length;
    const allDone = Array.from({length:total},(_,i)=>Boolean(p[key][i])).every(Boolean);
    if (!allDone) return;
    const flag = isMission?'missionPopupShown':'practicePopupShown';
    if (p[flag]) return;
    clearCompletionTimer(menu, chapterId);
    p[flag] = true; save();
    const noticeId = `chapter-finish-${menu}-${chapterId}`;
    const finish = document.getElementById(noticeId);
    if (finish) finish.classList.add('visible');
    finish?.querySelector('[data-chapter-next]')?.setAttribute('disabled','disabled');
    let remaining = 3;
    const countdown = document.createElement('span');
    countdown.className = 'chapter-countdown';
    countdown.textContent = ' Pop-up akan muncul dalam 3 detik.';
    finish?.querySelector('p')?.append(countdown);
    const interval = window.setInterval(()=>{ remaining--; countdown.textContent = ` Pop-up akan muncul dalam ${Math.max(remaining,0)} detik.`; if(remaining<=0) window.clearInterval(interval); },1000);
    const timeout = window.setTimeout(()=>{
      window.clearInterval(interval);
      completionTimers.delete(`${menu}-${chapterId}`);
      const target = isMission?'latihan':'kuis';
      finish?.querySelector('[data-chapter-next]')?.removeAttribute('disabled');
      window.MisiApp?.showTransferModal?.({
        eyebrow:isMission?'MISI BAB SELESAI':'LATIHAN BAB SELESAI',
        title:isMission?`Semua misi Bab ${chapterId} berhasil!`:`Latihan Bab ${chapterId} tuntas!`,
        message:isMission?'Kamu telah menyelesaikan semua tantangan pada bab ini. Sekarang waktunya mengerjakan latihan.':'Kamu berhasil menyelesaikan semua latihan. Lanjutkan ke kuis untuk mengukur pemahamanmu.',
        continueLabel:`Lanjut ke ${target==='latihan'?'Latihan':'Kuis'} Bab ${chapterId} →`,
        onContinue:()=>goTo(target,chapterId)
      });
    },3000);
    completionTimers.set(`${menu}-${chapterId}`, { interval, timeout });
  }

  function ensureBab2SharedLayout(menu, legacy) {
    if(!legacy)return;
    const cover=legacy.querySelector('.chapter-cover');
    if(!cover)return;
    const menuAccent={materi:'169,156,255',misi:'198,243,107',latihan:'255,182,107',kuis:'130,200,255'}[menu];
    if(menuAccent)legacy.style.setProperty('--chapter-accent',menuAccent);
    legacy.classList.add('chapter-legacy-module','chapter-theme-2');

    // Materi Bab 2 memakai urutan yang sama dengan bab lain:
    // cover bab → pertanyaan pemantik → heading materi → isi utama.
    if(menu==='materi'){
      let promptBanner=legacy.querySelector(':scope > .chapter-concept-banner');
      if(!promptBanner){
        cover.insertAdjacentHTML('afterend',chapterPromptBanner(2));
        promptBanner=legacy.querySelector(':scope > .chapter-concept-banner');
      }
      if(!legacy.querySelector(':scope > .chapter-material-heading')){
        const heading=document.createElement('div');
        heading.className='chapter-material-heading bab2-material-heading';
        heading.innerHTML='<div><span class="eyebrow">BEKAL PETUALANGAN</span><h2>Temukan ide pentingnya <em>satu per satu.</em></h2><p>Delapan pokok bahasan membantumu memahami algoritma, pola, optimasi, struktur data, dan representasi data.</p></div><div class="chapter-material-badge"><strong>8</strong><span>TOPIK</span></div>';
        (promptBanner||cover).insertAdjacentElement('afterend',heading);
      }
      const grid=legacy.querySelector('.lesson-grid');
      if(grid)grid.classList.add('chapter-lesson-grid');
      const example=legacy.querySelector('.example-panel');
      if(example)example.classList.add('chapter-example-panel');
      const footer=legacy.querySelector('.lesson-footer');
      if(footer)footer.classList.add('chapter-lesson-footer');
    }

    if(menu==='misi'){
      const oldTop=legacy.querySelector('.mission-top-actions');
      let toolbar=legacy.querySelector(':scope > .chapter-menu-toolbar');
      if(!toolbar){
        toolbar=document.createElement('div');
        toolbar.className='chapter-menu-toolbar bab2-shared-toolbar';
        toolbar.innerHTML='<div><span class="mini-label">PROGRES PETUALANGAN · BAB 02</span><strong id="bab2MissionToolbarCount">0/10 misi ditaklukkan</strong><div class="progress-track"><span id="bab2MissionToolbarBar"></span></div></div>';
        const reset=legacy.querySelector('#resetMissions');
        if(reset)toolbar.appendChild(reset);
        cover.insertAdjacentElement('afterend',toolbar);
      }
      if(oldTop)oldTop.remove();
      // Pastikan tidak ada tombol reset kembar di menu Misi Bab 2.
      const resets=Array.from(legacy.querySelectorAll('#resetMissions, [data-chapter-reset="misi"]'));
      resets.slice(1).forEach(node=>node.remove());
      const tabs=legacy.querySelector('.mission-tabs');
      if(tabs)tabs.classList.add('chapter-mission-tabs');
      const extras=legacy.querySelector('#bab2MissionExtras');
      if(extras)extras.classList.add('chapter-bab2-extra-stage');
      const completion=legacy.querySelector('.mission-completion');
      if(completion)completion.classList.add('chapter-bab2-completion');
    }

    if(menu==='latihan'){
      const panel=legacy.querySelector('.practice-progress-panel');
      if(panel){panel.classList.add('chapter-unified-progress');}
      // Hanya satu reset pada bar progres latihan.
      const resetButtons=Array.from(legacy.querySelectorAll('#resetPractice, [data-chapter-reset="latihan"]'));
      resetButtons.slice(1).forEach(node=>node.remove());
      const stack=legacy.querySelector('.practice-stack');
      if(stack){
        stack.classList.add('chapter-practice-stack');
        if(!legacy.querySelector('.practice-section-intro')){
          const intro=document.createElement('div');intro.className='practice-section-intro chapter-bab2-practice-intro';
          intro.innerHTML='<div><span class="eyebrow">RUANG LATIHAN · BAB 02</span><h2>Asah kemampuanmu <em>sambil bermain.</em></h2><p>Lima belas aktivitas menggabungkan permainan, pola, dan latihan logika berdasarkan Berpikir Komputasional.</p></div><div class="practice-count-stamp"><strong>15</strong><span>AKTIVITAS</span></div>';
          panel?.insertAdjacentElement('afterend',intro);
        }
      }
    }

    if(menu==='kuis'){
      const shell=legacy.querySelector('#quizShell');
      if(shell&&!legacy.querySelector('.chapter-bab2-quiz-intro')){
        const intro=document.createElement('div');intro.className='quiz-chapter-intro chapter-bab2-quiz-intro';
        intro.innerHTML='<div><span class="eyebrow">PANGGUNG KUIS · BAB 02</span><h2>Uji pengetahuanmu <em>sampai akhir!</em></h2><p>Jawab 20 pertanyaan dengan teliti. Kamu akan melihat nilai dan pembahasan setelah semua jawaban dikumpulkan.</p></div><div class="quiz-count-stamp"><strong id="bab2QuizCurrent">01</strong><span> / 20</span></div>';
        shell.insertAdjacentElement('beforebegin',intro);
      }
      if(shell&&!legacy.querySelector('#bab2QuizStatusPanel')){
        const status=document.createElement('div');status.className='chapter-quiz-status-panel bab2-quiz-status';status.id='bab2QuizStatusPanel';
        status.innerHTML='<div><span class="mini-label">PROGRES KUIS</span><strong id="bab2QuizAnsweredCount">0/20 TERJAWAB</strong></div><span class="chapter-quiz-percent" id="bab2QuizAnsweredPercent">0%</span><div class="progress-track"><span id="bab2QuizAnsweredBar" style="width:0%"></span></div>';
        shell.insertAdjacentElement('beforebegin',status);
      }
      shell?.classList.add('chapter-bab2-quiz-shell');
    }
  }

  function renderMenu(menu) {
    const chapterId = Number(selection[menu]);
    const legacy = document.getElementById(`legacy-bab2-${menu}`);
    const dynamic = document.querySelector(`[data-chapter-dynamic="${menu}"]`);
    const isBab2 = chapterId === 2;
    if (legacy) {
      legacy.hidden = !isBab2;
      if(isBab2 && !legacy.querySelector('.chapter-cover')){
        const bab2={title:'Berpikir Komputasional',objective:'Memahami cara menyelesaikan persoalan dengan algoritma, pengenalan pola, optimasi penjadwalan, struktur data, dan representasi data.',theme:'Ubah masalah menjadi langkah yang jelas, logis, dan dapat diuji.',topics:Array(8),missions:Array(10),practice:Array(15),quiz:Array(20)};
        legacy.insertAdjacentHTML('afterbegin',chapterCover(menu,2,bab2));
      }
      if(isBab2) ensureBab2SharedLayout(menu,legacy);
    }
    if (dynamic) {
      dynamic.hidden = isBab2;
      if (!isBab2) {
        dynamic.innerHTML = menu==='materi'?renderMaterial(chapterId):menu==='misi'||menu==='latihan'?renderTasks(menu,chapterId):renderQuiz(chapterId);
      } else dynamic.innerHTML = '';
    }
    updateHeading(menu,chapterId);
    updatePicker(menu);
    if (!isBab2) {
      const count = menu==='misi'?Object.values(getState(chapterId).missions).filter(Boolean).length:menu==='latihan'?Object.values(getState(chapterId).practices).filter(Boolean).length:0;
      if (menu==='misi'||menu==='latihan') setTimeout(()=>{const f=document.getElementById(`chapter-finish-${menu}-${chapterId}`);if(f&&count===(menu==='misi'?chapters[chapterId].missions.length:chapters[chapterId].practice.length))f.classList.add('visible');},0);
    }
  }

  function chooseAnswer(menu, chapterId, taskIndex, optionIndex, button) {
    const c=chapters[chapterId], isMission=menu==='misi';
    const task=isMission?c.missions[taskIndex]:c.practice[taskIndex];
    if(!task)return;
    const p=getState(chapterId), key=isMission?'missions':'practices';
    if(p[key][taskIndex])return;
    const card=button.closest('.chapter-task-card'), feedback=card?.querySelector('.chapter-feedback');
    card?.querySelectorAll('.chapter-choice-list button,.mission-action-card').forEach(b=>b.classList.remove('is-wrong','is-correct','selected'));
    if(optionIndex===task.correct){
      card?.querySelectorAll('.chapter-choice-list button,.mission-action-card').forEach(b=>{b.disabled=true;if(Number(b.dataset.option)===task.correct)b.classList.add('is-correct');});
      if(feedback){feedback.className='chapter-feedback success';feedback.textContent=`Benar! ${task.explain}`;}
      p[key][taskIndex]=true;
      if(isMission)p.missionIndex=taskIndex;
      save();
      const remaining=(isMission?c.missions:c.practice).filter((_,i)=>!p[key][i]).length;
      if(isMission && remaining>0){
        const stage=card?.querySelector('.chapter-task-foot');
        if(stage)stage.innerHTML='<span class="chapter-advance-message">Level berhasil! Portal menuju tantangan berikutnya sedang dibuka…</span><span class="chapter-foot-spark">✦</span>';
      }
      renderMenu(menu);
      setDynamicCompletion(menu,chapterId);
      if(isMission && remaining>0){
        const advanceNote=document.querySelector(`[data-chapter-dynamic="misi"] .chapter-task-foot`);
        if(advanceNote)advanceNote.innerHTML='<span class="chapter-advance-message">Level berhasil! Portal menuju tantangan berikutnya sedang dibuka…</span><span class="chapter-foot-spark">✦</span>';
        const old=missionAdvanceTimers.get(String(chapterId));
        if(old)window.clearTimeout(old);
        const timer=window.setTimeout(()=>{
          const fresh=getState(chapterId);
          const nextIndex=c.missions.findIndex((_,i)=>!fresh.missions[i]);
          if(nextIndex>=0){fresh.missionIndex=nextIndex;save();if(Number(selection.misi)===Number(chapterId))renderMenu('misi');}
          missionAdvanceTimers.delete(String(chapterId));
        },1150);
        missionAdvanceTimers.set(String(chapterId),timer);
      }
    }else{
      button.classList.add('is-wrong');
      if(feedback){feedback.className='chapter-feedback error';feedback.textContent=isMission?'Belum berhasil. Coba strategi lain untuk menuntaskan level ini.':'Belum tepat. Coba periksa kembali informasi dan pilih jawaban lain.';}
    }
  }

  function scheduleMissionAdvance(chapterId) {
    const old=missionAdvanceTimers.get(String(chapterId));
    if(old)window.clearTimeout(old);
    const timer=window.setTimeout(()=>{
      const p=getState(chapterId);
      const nextIndex=chapters[chapterId].missionGames.findIndex((_,i)=>!p.missions[i]);
      if(nextIndex>=0){p.missionIndex=nextIndex;save();if(Number(selection.misi)===Number(chapterId))renderMenu('misi');}
      missionAdvanceTimers.delete(String(chapterId));
    },1400);
    missionAdvanceTimers.set(String(chapterId),timer);
  }

  function completeInteractiveGame(chapterId, taskIndex, mode) {
    const p=getState(chapterId),isMission=mode==='misi', map=isMission?'missions':'practices';
    if(p[map][taskIndex])return;
    p[map][taskIndex]=true;
    if(isMission)p.missionIndex=taskIndex;
    practiceGameSessions.delete(practiceGameKey(chapterId,taskIndex,mode));
    save();
    renderMenu(mode);
    setDynamicCompletion(mode,chapterId);
    if(isMission){
      const remaining=chapters[chapterId].missionGames.filter((_,i)=>!p.missions[i]).length;
      if(remaining>0)scheduleMissionAdvance(chapterId);
    }
  }

  function syncPathBoard(card,game,session){
    card.querySelectorAll('[data-path-cell]').forEach(cell=>{
      const i=Number(cell.dataset.pathCell);
      cell.classList.toggle('is-player',i===session.position);
      cell.classList.toggle('is-trail',session.path.includes(i)&&i!==session.position);
      cell.textContent=i===session.position?(game.token||'🚀'):i===game.goal?'🏁':(game.obstacles||[]).includes(i)?'■':i===game.start?'●':'';
    });
    const moves=card.querySelector('[data-path-moves]');if(moves)moves.textContent=`${session.moves} langkah`;
    const message=card.querySelector('[data-path-message]');if(message)message.textContent=`${session.position===game.goal?'Tujuan tercapai!':'Posisi '+(Math.floor(session.position/4)+1)+', '+(session.position%4+1)+' · lanjutkan perjalanan.'}`;
    const progress=card.querySelector('[data-game-progress]');if(progress)progress.textContent=`${session.moves} LANGKAH`;
  }

  function handleGameAction(button, mode) {
    const chapterId=Number(button.dataset.chapter),taskIndex=Number(button.dataset.task);
    const p=getState(chapterId),isMission=mode==='misi',map=isMission?'missions':'practices';
    const game=isMission?chapters[chapterId]?.missionGames?.[taskIndex]:chapters[chapterId]?.practiceGames?.[taskIndex];
    if(!game||p[map][taskIndex])return;
    const card=button.closest('.chapter-game-card,.mission-gameplay-card');
    const feedback=card?.querySelector('.chapter-feedback');
    const progress=card?.querySelector('[data-game-progress]');
    const session=practiceGameSession(chapterId,taskIndex,game,mode);
    const attr=isMission?'data-mission-game-action':'data-practice-game-action';
    const ok=(message)=>{if(feedback){feedback.className='feedback chapter-feedback success';feedback.textContent=message;}};
    const fail=(message)=>{if(feedback){feedback.className='feedback chapter-feedback error';feedback.textContent=message;}};
    const finish=()=>completeInteractiveGame(chapterId,taskIndex,mode);

    if(game.type==='path'){
      const action=button.getAttribute(attr);
      if(action==='path-reset'){session.position=game.start;session.path=[game.start];session.moves=0;syncPathBoard(card,game,session);ok('Posisi kembali ke titik awal. Coba jalur yang berbeda.');return;}
      const delta={ 'path-up':-4,'path-down':4,'path-left':-1,'path-right':1 }[action];
      if(delta===undefined)return;
      const next=session.position+delta;
      const row=Math.floor(session.position/4),col=session.position%4;
      const valid=next>=0&&next<16&&!(action==='path-left'&&col===0)&&!(action==='path-right'&&col===3)&&!(action==='path-up'&&row===0)&&!(action==='path-down'&&row===3);
      if(!valid){fail('Arah itu keluar dari papan. Pilih arah lain.');return;}
      if((game.obstacles||[]).includes(next)){fail('Ada penghalang di sana! Coba cari jalan lain.');return;}
      session.position=next;session.moves++;session.path.push(next);syncPathBoard(card,game,session);
      if(next===game.goal){ok('Hebat! Kamu berhasil tiba di tujuan.');finish();}
      else ok('Langkah berhasil. Teruskan sampai ke tujuan!');
      return;
    }

    if(game.type==='match'){
      if(button.getAttribute(attr)==='match-left'){
        const index=Number(button.dataset.item);if(session.matched.includes(index))return;
        session.selectedLeft=index;
        card.querySelectorAll(`[${attr}="match-left"]`).forEach(el=>el.classList.toggle('is-selected',Number(el.dataset.item)===index));
        if(feedback){feedback.className='feedback chapter-feedback';feedback.textContent='Sekarang pilih kartu pasangan di sisi kanan.';}return;
      }
      if(button.getAttribute(attr)==='match-right'){
        const index=Number(button.dataset.item);if(session.matched.includes(index))return;
        if(session.selectedLeft===null){fail('Pilih satu kartu di sisi kiri terlebih dahulu.');return;}
        if(session.selectedLeft!==index){session.selectedLeft=null;card.querySelectorAll('.match-game-tile').forEach(el=>el.classList.remove('is-selected'));fail('Belum cocok. Coba pasangkan dengan kartu lain.');return;}
        session.matched.push(index);session.selectedLeft=null;
        card.querySelectorAll(`[${attr}="match-left"][data-item="${index}"],[${attr}="match-right"][data-item="${index}"]`).forEach(el=>{el.classList.remove('is-selected');el.classList.add('is-matched');el.disabled=true;});
        if(progress)progress.textContent=`${session.matched.length} / ${game.pairs.length} PASANGAN COCOK`;
        if(session.matched.length===game.pairs.length)finish();else ok('Pasangan berhasil ditemukan! Lanjutkan.');return;
      }
    }
    if(game.type==='sequence'){
      const action=button.getAttribute(attr);
      if(action==='sequence'){
        const index=Number(button.dataset.item);if(session.order.includes(index))return;
        session.order.push(index);button.classList.add('is-selected');button.disabled=true;
        const picked=card.querySelector('[data-sequence-picked]');if(picked)picked.innerHTML=session.order.map((stepIndex,pos)=>`<span class="sequence-picked-chip"><b>${String(pos+1).padStart(2,'0')}</b>${escapeHtml(game.steps[stepIndex])}</span>`).join('');
        if(progress)progress.textContent=`${session.order.length} / ${game.steps.length} LANGKAH DIPILIH`;
        const check=card.querySelector(`[${attr}="sequence-check"]`);if(check&&session.order.length===game.steps.length)check.disabled=false;
        const reset=card.querySelector(`[${attr}="sequence-reset"]`);if(reset)reset.disabled=false;
        ok(session.order.length===game.steps.length?'Semua kartu sudah dipilih. Periksa urutannya!':'Kartu masuk ke susunanmu. Pilih langkah selanjutnya.');return;
      }
      if(action==='sequence-reset'){
        session.order=[];
        card.querySelectorAll('.sequence-game-tile').forEach(el=>{el.classList.remove('is-selected','is-matched');el.disabled=false;el.querySelector('small').textContent='KETUK KARTU';});
        const picked=card.querySelector('[data-sequence-picked]');if(picked)picked.innerHTML='<span class="sequence-picked-empty">Belum ada langkah dipilih. Ketuk kartu untuk mulai.</span>';
        if(progress)progress.textContent=`0 / ${game.steps.length} LANGKAH DIPILIH`;
        const check=card.querySelector(`[${attr}="sequence-check"]`);if(check)check.disabled=true;
        button.disabled=true;ok('Susunan dikosongkan. Coba lagi dari langkah pertama.');return;
      }
      if(action==='sequence-check'){
        const correct=session.order.length===game.steps.length&&session.order.every((stepIndex,pos)=>stepIndex===pos);
        if(correct){card.querySelectorAll('.sequence-game-tile').forEach(el=>el.classList.remove('is-selected'));finish();}
        else fail('Urutannya belum tepat. Tekan Atur Ulang untuk mencoba lagi.');
        return;
      }
    }
    if(game.type==='classify'){
      if(button.getAttribute(attr)==='classify-item'){
        const index=Number(button.dataset.item);if(session.placed.includes(index))return;session.selectedItem=index;
        card.querySelectorAll(`[${attr}="classify-item"]`).forEach(el=>el.classList.toggle('is-selected',Number(el.dataset.item)===index));
        if(feedback){feedback.className='feedback chapter-feedback';feedback.textContent='Pilih kotak kategori untuk kartu yang dipilih.';}return;
      }
      if(button.getAttribute(attr)==='classify-bin'){
        if(session.selectedItem===null){fail('Pilih satu kartu sebelum memasukkannya ke kategori.');return;}
        const itemIndex=session.selectedItem,bin=Number(button.dataset.bin),item=game.items[itemIndex];
        const itemButton=card.querySelector(`[${attr}="classify-item"][data-item="${itemIndex}"]`);
        if(item.group!==bin){if(itemButton)itemButton.classList.add('is-wrong');session.selectedItem=null;card.querySelectorAll(`[${attr}="classify-item"]`).forEach(el=>el.classList.remove('is-selected'));fail('Kartu belum cocok dengan kategori itu. Coba tempatkan lagi.');window.setTimeout(()=>itemButton?.classList.remove('is-wrong'),550);return;}
        session.placed.push(itemIndex);session.selectedItem=null;if(itemButton){itemButton.classList.remove('is-selected');itemButton.classList.add('is-placed');itemButton.disabled=true;itemButton.querySelector('small').textContent='✓ Tersusun';}
        const n=session.placed.length;if(progress)progress.textContent=`${n} / ${game.items.length} KARTU TERSUSUN`;
        if(n===game.items.length)finish();else ok('Tepat! Pilih kartu berikutnya.');return;
      }
    }
    if(game.type==='odd'){
      const index=Number(button.dataset.item);
      if(index===game.oddIndex){button.classList.add('is-matched');finish();}else{button.classList.add('is-wrong');fail('Belum ketemu. Amati fungsi dan kelompok itemnya.');window.setTimeout(()=>button.classList.remove('is-wrong'),550);}return;
    }
    if(game.type==='decision'){
      const index=Number(button.dataset.option);
      if(index===game.correct){button.classList.add('is-matched');finish();}else{button.classList.add('is-wrong');fail('Strategi itu belum menyelesaikan tantangan. Coba cara lain.');window.setTimeout(()=>button.classList.remove('is-wrong'),550);}return;
    }
  }

  function showReset(menu, chapterId) {
    const isMission=menu==='misi';
    window.MisiApp?.showTransferModal?.({
      eyebrow:'ATUR ULANG BAB', title:`Reset ${isMission?'Misi':'Latihan'} Bab ${chapterId}?`,
      message:`Status selesai dan jawaban benar pada ${isMission?chapters[chapterId].missions.length+' misi':chapters[chapterId].practice.length+' latihan'} Bab ${chapterId} akan dihapus. Progres bab lain dan menu lain tidak berubah.`,
      continueLabel:'Ya, reset',laterLabel:'Batal',
      onContinue:()=>{
        clearCompletionTimer(menu, chapterId);
        const advance=missionAdvanceTimers.get(String(chapterId));if(advance)window.clearTimeout(advance);missionAdvanceTimers.delete(String(chapterId));
        const p=getState(chapterId);
        if(isMission){p.missions={};p.missionIndex=0;p.missionPopupShown=false;}else{p.practices={};p.practicePopupShown=false;for(const key of [...practiceGameSessions.keys()])if(key.startsWith(`latihan:${chapterId}:`)||key.startsWith(`misi:${chapterId}:`))practiceGameSessions.delete(key);}
        save();renderMenu(menu);
      }
    });
  }

  function submitQuiz(chapterId) {
    const p=getState(chapterId); const questions=chapters[chapterId].quiz;
    if(Object.keys(p.quiz.answers).length!==questions.length){
      const warning=document.querySelector(`[data-chapter-dynamic="kuis"] .chapter-quiz-warning`);
      if(warning){warning.hidden=false;warning.textContent=`Masih ada ${questions.length-Object.keys(p.quiz.answers).length} pertanyaan yang belum dijawab.`;}
      else window.MisiApp?.showTransferModal?.({eyebrow:'KUIS BELUM LENGKAP',title:'Masih ada soal yang kosong',message:`Jawab semua ${questions.length} pertanyaan terlebih dahulu sebelum mengumpulkan kuis.`});
      return;
    }
    const correct=questions.filter((q,i)=>p.quiz.answers[i]===q.correct).length;
    p.quiz.submitted=true;p.quiz.score=Math.round(correct/questions.length*100);p.quiz.questionCount=questions.length;save();renderMenu('kuis');
  }

  function handleClick(event) {
    const target=event.target.closest('button'); if(!target)return;
    if(target.dataset.chapterSelect){setSelection(target.dataset.chapterSelect,target.dataset.chapter);return;}
    if(target.dataset.chapterComplete){
      const chapterId=Number(target.dataset.chapter);const p=getState(chapterId);p.materiDone=true;save();updatePicker('materi');
      window.MisiApp?.showTransferModal?.({eyebrow:`MATERI BAB ${chapterId} SELESAI`,title:'Siap mencoba tantangan?',message:`Kamu telah menandai materi Bab ${chapterId} selesai. Sekarang waktunya menerapkan konsep melalui misi.`,continueLabel:`Mulai Misi Bab ${chapterId} →`,onContinue:()=>goTo('misi',chapterId)});
      return;
    }
    if(target.dataset.missionGameAction){handleGameAction(target,'misi');return;}
    if(target.dataset.practiceGameAction){handleGameAction(target,'latihan');return;}
    if(target.dataset.chapterAnswer){chooseAnswer(target.dataset.chapterAnswer,Number(target.dataset.chapter),Number(target.dataset.task),Number(target.dataset.option),target);return;}
    if(target.dataset.chapterStep!==undefined){const chapterId=Number(target.dataset.chapter);const timer=missionAdvanceTimers.get(String(chapterId));if(timer)window.clearTimeout(timer);missionAdvanceTimers.delete(String(chapterId));const p=getState(chapterId);p.missionIndex=Number(target.dataset.chapterStep);save();renderMenu('misi');return;}
    if(target.dataset.chapterReset){showReset(target.dataset.chapterReset,Number(target.dataset.chapter));return;}
    if(target.dataset.chapterNext){goTo(target.dataset.chapterNext,Number(target.dataset.chapter));return;}
    if(target.dataset.chapterQuizAnswer!==undefined){
      const chapterId=Number(target.dataset.chapterQuizAnswer),question=Number(target.dataset.question),option=Number(target.dataset.option),p=getState(chapterId);
      if(p.quiz.submitted)return;
      p.quiz.answers[question]=option;save();
      const card=target.closest('.chapter-quiz-card-active');
      card?.querySelectorAll('.quiz-option').forEach(b=>b.classList.toggle('selected',b===target));
      const status=card?.querySelector('.chapter-task-status');if(status)status.textContent='✓ SUDAH DIJAWAB';
      const answered=Object.keys(p.quiz.answers).length,total=chapters[chapterId].quiz.length,percent=Math.round(answered/total*100);
      const count=document.querySelector('.chapter-quiz-status-panel strong');if(count)count.textContent=`${answered}/${total} TERJAWAB`;
      const percentLabel=document.querySelector('.chapter-quiz-percent');if(percentLabel)percentLabel.textContent=`${percent}%`;
      const bar=document.querySelector('.chapter-quiz-status-panel .progress-track span');if(bar)bar.style.width=`${percent}%`;
      const dot=document.querySelector(`[data-chapter-quiz-jump="${question}"][data-chapter="${chapterId}"]`);if(dot)dot.classList.add('answered');
      const collect=document.querySelector(`[data-chapter-quiz-submit="${chapterId}"]`);if(collect&&answered===total)collect.disabled=false;
      updatePicker('kuis');
      const hint=document.querySelector('.chapter-quiz-hint');if(hint&&answered===total)hint.textContent='Semua jawaban sudah terisi. Kumpulkan kuis untuk melihat hasil dan pembahasan.';
      return;
    }
    if(target.dataset.chapterQuizJump!==undefined){const chapterId=Number(target.dataset.chapter),p=getState(chapterId);p.quiz.currentIndex=Number(target.dataset.chapterQuizJump);save();renderMenu('kuis');return;}
    if(target.dataset.chapterQuizPrev!==undefined){const chapterId=Number(target.dataset.chapterQuizPrev),p=getState(chapterId);p.quiz.currentIndex=Math.max(0,(p.quiz.currentIndex||0)-1);save();renderMenu('kuis');return;}
    if(target.dataset.chapterQuizNext!==undefined){const chapterId=Number(target.dataset.chapterQuizNext),p=getState(chapterId),current=Number(p.quiz.currentIndex)||0;if(p.quiz.answers[current]===undefined){const warning=document.querySelector('[data-chapter-dynamic="kuis"] .chapter-quiz-warning');if(warning){warning.hidden=false;warning.textContent='Pilih salah satu jawaban terlebih dahulu sebelum melanjutkan.';}return;}p.quiz.currentIndex=Math.min(chapters[chapterId].quiz.length-1,current+1);save();renderMenu('kuis');return;}
    if(target.dataset.chapterQuizSubmit){submitQuiz(Number(target.dataset.chapterQuizSubmit));return;}
    if(target.dataset.chapterQuizReset){const chapterId=Number(target.dataset.chapterQuizReset),p=getState(chapterId);p.quiz={answers:{},submitted:false,score:null,questionCount:chapters[chapterId].quiz.length,currentIndex:0};save();renderMenu('kuis');return;}
  }
  document.addEventListener('click',handleClick);

  // Simpan judul asli agar Bab 2 selalu kembali ke tampilan yang sudah lama digunakan.
  menus.forEach(menu=>{
    const page=document.getElementById(`page-${menu}`);
    const h1=document.getElementById(meta[menu].title);
    if(page&&h1){page.dataset.originalHeading=h1.innerHTML;page.dataset.originalIntro=page.querySelector('.page-heading p')?.textContent||'';page.dataset.originalEyebrow=page.querySelector('.page-heading .eyebrow')?.textContent||'';}
    updatePicker(menu);renderMenu(menu);
  });
  window.MisiChapters={chapters,selection,setSelection,renderMenu,ensureBab2SharedLayout};
})();
