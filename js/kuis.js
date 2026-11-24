(() => {
  'use strict';
  const app = window.MisiApp;
  const questions = [
    { q: 'Sebuah tugas besar terasa rumit karena terdiri atas banyak bagian. Apa yang paling tepat dilakukan dengan berpikir komputasional?', options: ['Mengurai masalah menjadi bagian yang lebih kecil, lalu menyusun langkah penyelesaian', 'Mencoba semua kemungkinan secara acak sampai berhasil', 'Menyalin jawaban orang lain tanpa memeriksa masalahnya', 'Mengabaikan bagian yang belum dipahami'], answer: 0, explain: 'Masalah yang kompleks lebih mudah ditangani ketika diurai menjadi bagian yang lebih kecil dan diselesaikan secara teratur.' },
    { q: 'Kamu menulis petunjuk untuk teman yang belum pernah memakai mesin tiket. Ciri instruksi yang paling membantu adalah ...', options: ['Jelas, spesifik, dan disusun menurut urutan tindakan', 'Menggunakan istilah yang hanya dipahami pembuatnya', 'Menggabungkan beberapa perintah tanpa penjelasan', 'Membiarkan teman memilih sendiri urutan yang diperlukan'], answer: 0, explain: 'Instruksi yang jelas dan berurutan membuat orang lain dapat mengikuti langkah tanpa menebak maksudnya.' },
    { q: 'Perhatikan pola simbol: ● ▲ ▲ | ● ▲ ▲ | ● … Simbol berikutnya adalah…', options: ['Lingkaran', 'Segitiga', 'Persegi', 'Bintang'], answer: 1, explain: 'Pola yang berulang adalah satu lingkaran diikuti dua segitiga. Setelah lingkaran ketiga, pola berlanjut dengan segitiga.' },
    { q: 'Wali kelas ingin mengetahui gambaran kehadiran selama satu bulan. Ringkasan yang paling sesuai dengan tujuan tersebut adalah ...', options: ['Jumlah hari siswa hadir dan jumlah hari tidak hadir', 'Daftar warna seragam yang digunakan siswa', 'Jumlah halaman buku yang dibaca setiap siswa', 'Daftar aplikasi yang dibuka siswa saat istirahat'], answer: 0, explain: 'Informasi kehadiran perlu menunjukkan frekuensi hadir dan tidak hadir. Detail yang tidak terkait tidak membantu menjawab tujuan laporan.' },
    { q: 'Mengapa urutan lagu dalam sebuah daftar putar termasuk contoh struktur data yang terurut?', options: ['Karena semua lagu harus sama panjang', 'Karena posisi lagu menentukan lagu mana yang diputar lebih dahulu', 'Karena daftar tidak boleh diubah', 'Karena daftar hanya dapat berisi satu lagu'], answer: 1, explain: 'Dalam daftar putar, posisi setiap lagu memiliki arti. Lagu pada urutan pertama diputar sebelum lagu pada urutan berikutnya.' },
    { q: 'Kelompok berhasil membuat dekorasi sesuai rencana. Namun, mereka membuang banyak bahan karena tidak mengukur kebutuhan sejak awal. Penilaian yang paling tepat adalah ...', options: ['Tujuannya tercapai, tetapi sumber daya belum digunakan secara hemat', 'Tujuannya tidak tercapai dan semua bahan digunakan tepat', 'Pekerjaannya efisien karena bahan yang dipakai banyak', 'Kegiatan itu tidak memiliki hasil yang dapat dinilai'], answer: 0, explain: 'Hasil yang sesuai tujuan menunjukkan kegiatan efektif. Pemborosan bahan menunjukkan prosesnya belum efisien.' },
    { q: 'Setelah mengubah beberapa baris kode, hasil program menjadi berbeda dari yang diharapkan. Apa tindakan yang tepat?', options: ['Mengabaikan hasilnya', 'Menghapus seluruh program tanpa pemeriksaan', 'Mencari bagian yang berubah, memperbaiki kesalahan, lalu menguji kembali', 'Mengganti nama komputer'], answer: 2, explain: 'Debugging dilakukan dengan menemukan kesalahan, memperbaikinya, kemudian menguji kembali apakah hasil program sudah sesuai.' },
    { q: 'Sebuah mesin tiket meminta pengguna memilih tujuan, memasukkan uang, lalu mengambil tiket. Susunan itu merupakan contoh…', options: ['Algoritma', 'Warna antarmuka', 'Perangkat keras', 'Daftar acak'], answer: 0, explain: 'Tindakan tersebut disusun sebagai langkah berurutan untuk menghasilkan tujuan, yaitu memperoleh tiket.' },
    { q: 'Komputer sedang mengunduh bahan tugas. Selama unduhan berlangsung, kamu dapat mengetik rangkuman di aplikasi lain. Gagasan penjadwalan yang digunakan adalah ...', options: ['Menunggu satu pekerjaan selesai sebelum memulai apa pun', 'Menjalankan pekerjaan yang tidak saling bergantung secara paralel', 'Mengulang unduhan dari awal setiap menit', 'Menghentikan semua aplikasi lain agar waktu tidak terpakai'], answer: 1, explain: 'Mengunduh dan mengetik rangkuman tidak harus saling menunggu. Keduanya dapat berlangsung bersamaan sehingga waktu lebih efektif digunakan.' },
    { q: 'Sebuah proyek multimedia berisi tulisan, nilai angka, foto, dan rekaman suara. Kesimpulan yang tepat tentang representasi data digital adalah ...', options: ['Semua informasi harus diubah menjadi tulisan biasa', 'Komputer hanya dapat menyimpan angka', 'Informasi digital dapat direpresentasikan dalam beragam bentuk', 'Foto dan suara tidak dapat menjadi bagian dari data'], answer: 2, explain: 'Informasi digital dapat berbentuk teks, angka, gambar, suara, maupun video.' },
    { q: 'Panitia kemah mencatat tenda, senter, kotak P3K, dan botol minum dalam satu kumpulan. Bentuk penyimpanan yang sesuai untuk kumpulan item tersebut adalah ...', options: ['Satu nilai angka tanpa keterangan', 'Daftar yang berisi beberapa item perlengkapan', 'Satu gambar tanpa nama benda', 'Satu instruksi yang tidak menyimpan data'], answer: 1, explain: 'Daftar atau list menyimpan sejumlah item sebagai satu kumpulan yang dapat diperiksa satu per satu.' },
    { q: 'Aplikasi jadwal sekolah perlu menampilkan jam pelajaran, nama mata pelajaran, dan ruang kelas. Mengapa informasi tersebut dipilih?', options: ['Karena semua detail yang tersedia harus ditampilkan', 'Karena ketiganya membantu pengguna memahami jadwal yang perlu diikuti', 'Karena informasi lain harus dihapus dari perangkat', 'Karena tampilan harus dibuat seramai mungkin'], answer: 1, explain: 'Memilih informasi yang relevan merupakan bentuk penyederhanaan: pengguna melihat detail yang dibutuhkan untuk memahami jadwal.' },
    { q: 'Dua cara berbeda dapat menyelesaikan persoalan yang sama. Apa yang perlu dipertimbangkan saat memilih salah satunya?', options: ['Hanya memilih cara dengan nama paling pendek', 'Memilih cara yang paling rumit', 'Mempertimbangkan keberhasilan dan penggunaan waktu atau sumber daya', 'Memilih secara acak'], answer: 2, explain: 'Solusi yang baik perlu efektif dalam mencapai tujuan dan efisien dalam penggunaan waktu, tenaga, atau biaya.' },
    { q: 'Sebelum prosedur pendaftaran digunakan seluruh siswa, guru mencobanya terlebih dahulu pada satu contoh. Tujuan utama percobaan tersebut adalah ...', options: ['Memeriksa apakah setiap langkah menghasilkan keluaran yang diharapkan', 'Menambah langkah meskipun tidak diperlukan', 'Menghilangkan tujuan dari prosedur', 'Memastikan prosedur tidak boleh diperbaiki'], answer: 0, explain: 'Uji coba dapat mengungkap langkah yang membingungkan atau hasil yang belum sesuai sebelum prosedur digunakan lebih luas.' },
    { q: 'Berpikir komputasional bermanfaat dalam kegiatan sehari-hari karena…', options: ['Hanya dapat dilakukan oleh programmer', 'Hanya berguna saat memakai laptop', 'Membantu menyusun langkah dan memilih solusi dalam berbagai persoalan', 'Menggantikan semua keputusan manusia'], answer: 2, explain: 'Berpikir komputasional tidak terbatas pada komputer. Cara berpikir ini juga membantu menyelesaikan persoalan di sekolah, rumah, dan bidang lain.' },
    { q: 'Dalam persoalan membuat biskuit untuk keluarga kecil, cara penyelesaian dapat berbeda dari produksi massal karena ...', options: ['Semua persoalan harus memakai mesin yang sama', 'Skala masalah memengaruhi alat, sumber daya, dan pengaturan proses yang dibutuhkan', 'Produksi kecil tidak membutuhkan langkah', 'Jumlah bahan selalu sama untuk semua skala produksi'], answer: 1, explain: 'Buku menjelaskan bahwa cakupan masalah yang berbeda dapat membutuhkan cara dan peralatan yang berbeda pula.' },
    { q: 'Sebuah pekerjaan memiliki tiga tahap: mengumpulkan bahan, menyusun bahan, lalu mengemas hasil. Jika tahap menyusun membutuhkan bahan yang telah dikumpulkan, urutan yang benar adalah ...', options: ['Mengemas, mengumpulkan, menyusun', 'Menyusun, mengemas, mengumpulkan', 'Mengumpulkan, menyusun, mengemas', 'Mengumpulkan, mengemas, lalu menyusun'], answer: 2, explain: 'Tahap yang menjadi prasyarat perlu dilakukan lebih dahulu agar tahap berikutnya dapat berjalan.' },
    { q: 'Daftar belanja berisi beras, tomat, dan wortel tanpa prioritas tertentu. Apa yang benar tentang urutan mengambil barang?', options: ['Barang dapat diambil dengan urutan berbeda selama semua item tetap tercatat', 'Barang harus selalu diambil sesuai abjad', 'Barang yang ditulis terakhir harus diambil pertama', 'Daftar tersebut tidak dapat digunakan jika urutannya berubah'], answer: 0, explain: 'Daftar yang tidak memiliki aturan keterurutan dapat digunakan dengan urutan pengambilan yang berbeda tanpa mengubah isi kumpulan.' },
    { q: 'Sebuah sensor kelas hanya mencatat apakah pintu tertutup atau terbuka. Bentuk representasi data yang paling sesuai adalah ...', options: ['Daftar nama semua siswa', 'Dua kemungkinan nilai: ya/tidak atau 1/0', 'Angka desimal tanpa batas', 'Paragraf panjang tanpa kategori'], answer: 1, explain: 'Keadaan tertutup atau terbuka memiliki dua kemungkinan, sehingga dapat direpresentasikan dengan dua nilai seperti 1 dan 0.' },
    { q: 'Dalam membuat laporan, data perlu dikumpulkan sebelum jumlahnya dapat dihitung. Hubungan kedua pekerjaan itu adalah ...', options: ['Berurutan karena tahap menghitung bergantung pada data yang terkumpul', 'Paralel karena kedua pekerjaan tidak saling membutuhkan', 'Tidak memiliki urutan sama sekali', 'Keduanya harus dilakukan dua kali'], answer: 0, explain: 'Penghitungan membutuhkan data yang telah dikumpulkan. Karena tahap kedua bergantung pada tahap pertama, keduanya harus mengikuti urutan tersebut.' }
  ];
  // Distribusikan kunci secara seimbang: masing-masing huruf A, B, C, dan D benar lima kali.
  const bab2AnswerPositions = [0,2,1,3,3,0,2,1,2,3,1,0,1,2,0,3,0,1,3,2];
  questions.forEach((question, questionIndex) => {
    const oldOptions = [...question.options];
    const oldCorrect = question.answer;
    const target = bab2AnswerPositions[questionIndex];
    const nextOptions = Array(4);
    const rest = oldOptions.filter((_, index) => index !== oldCorrect);
    nextOptions[target] = oldOptions[oldCorrect];
    let pointer = 0;
    for (let index = 0; index < 4; index++) if (index !== target) nextOptions[index] = rest[pointer++];
    question.options = nextOptions;
    question.answer = target;
  });
  // Bank kuis tersedia untuk pemeriksaan otomatis; UI tetap menyembunyikan kunci sampai kuis dikumpulkan.
  window.MisiBab2QuizBank = questions;
  let current = 0;
  let answers = Array(questions.length).fill(null);
  const questionArea = document.getElementById('quizQuestionArea');
  const prev = document.getElementById('quizPrev');
  const next = document.getElementById('quizNext');

  function updateBab2QuizProgress() {
    const panel = document.getElementById('bab2QuizStatusPanel');
    if (!panel) return;
    const answered = answers.filter(value => value !== null).length;
    const percent = Math.round((answered / questions.length) * 100);
    const count = document.getElementById('bab2QuizAnsweredCount');
    const label = document.getElementById('bab2QuizAnsweredPercent');
    const bar = document.getElementById('bab2QuizAnsweredBar');
    const stamp = document.getElementById('bab2QuizCurrent');
    if (count) count.textContent = `${answered}/${questions.length} TERJAWAB`;
    if (label) label.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;
    if (stamp) stamp.textContent = String(current + 1).padStart(2, '0');
  }

  function renderQuestion() {
    const item = questions[current];
    document.getElementById('quizQuestionCount').textContent = `PERTANYAAN ${String(current + 1).padStart(2, '0')} / ${questions.length}`;
    document.getElementById('quizProgressBar').style.width = `${(current + 1) / questions.length * 100}%`;
    questionArea.innerHTML = '';
    const number = document.createElement('div'); number.className = 'quiz-question-number'; number.textContent = `SOAL ${String(current + 1).padStart(2, '0')}`;
    const title = document.createElement('h2'); title.className = 'quiz-question'; title.textContent = item.q;
    const instruction = document.createElement('p'); instruction.className = 'quiz-instruction'; instruction.textContent = 'Pilih satu jawaban yang paling tepat. Pilihanmu tersimpan; jawaban benar akan ditandai hijau setelah kuis dikumpulkan.';
    const options = document.createElement('div'); options.className = 'quiz-options';
    item.options.forEach((label, index) => {
      const button = document.createElement('button'); button.className = `quiz-option${answers[current] === index ? ' selected' : ''}`;
      const letter = document.createElement('span'); letter.className = 'option-letter'; letter.textContent = String.fromCharCode(65 + index);
      const text = document.createElement('span'); text.textContent = label;
      button.append(letter, text);
      button.addEventListener('click', () => {
        answers[current] = index;
        options.querySelectorAll('.quiz-option').forEach(option => option.classList.toggle('selected', option === button));
        updateBab2QuizProgress();
      });
      options.appendChild(button);
    });
    const warning = document.createElement('p');
    warning.className = 'feedback error quiz-answer-warning';
    warning.id = 'quizAnswerWarning';
    warning.hidden = true;
    warning.textContent = 'Pilih salah satu jawaban terlebih dahulu.';
    questionArea.append(number, title, instruction, options, warning);
    prev.disabled = current === 0;
    next.textContent = current === questions.length - 1 ? 'Kumpulkan jawaban ✓' : 'Berikutnya →';
    updateBab2QuizProgress();
  }

  prev.addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } });
  next.addEventListener('click', () => {
    if (answers[current] === null) {
      const warning = document.getElementById('quizAnswerWarning');
      warning.hidden = false;
      warning.textContent = 'Pilih salah satu jawaban terlebih dahulu sebelum melanjutkan.';
      return;
    }
    if (current < questions.length - 1) { current++; renderQuestion(); }
    else showResult();
  });

  function showResult() {
    const correct = questions.filter((question, index) => question.answer === answers[index]).length;
    const score = Math.round((correct / questions.length) * 100);
    app.progress.quizScore = score;
    app.saveProgress();
    document.getElementById('quizShell').hidden = true;
    const statusPanel = document.getElementById('bab2QuizStatusPanel');
    if (statusPanel) statusPanel.hidden = true;
    const result = document.getElementById('quizResult');
    result.hidden = false;
    const heading = score >= 80 ? 'Hebat, misi pengetahuan berhasil!' : score >= 60 ? 'Bagus, terus tingkatkan!' : 'Ayo pelajari kembali materinya!';
    const intro = score >= 80 ? 'Pemahamanmu sudah kuat. Baca pembahasan untuk mempertajamnya.' : 'Tidak apa-apa. Pelajari pembahasan setiap soal, lalu coba lagi.';
    result.innerHTML = `<div class="result-score"><strong>${score}</strong><span>NILAI KAMU · ${correct} DARI ${questions.length} BENAR</span><h2>${heading}</h2><p>${intro}</p></div><div class="result-review" id="resultReview"></div><div class="quiz-result-actions"><button class="btn btn-primary" id="retryQuiz">Ulangi kuis ↻</button><button class="btn btn-ghost" id="goStudy">Pelajari materi lagi</button></div>`;
    const review = document.getElementById('resultReview');
    questions.forEach((question, index) => {
      const isCorrect = answers[index] === question.answer;
      const item = document.createElement('div'); item.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
      const title = document.createElement('strong'); title.textContent = `${isCorrect ? '✓' : '×'} ${index + 1}. ${question.q}`;
      const detail = document.createElement('small'); detail.textContent = `Jawabanmu: ${question.options[answers[index]]}. ${question.explain}`;
      const optionList = document.createElement('div'); optionList.className = 'quiz-review-options';
      question.options.forEach((optionText, optionIndex) => {
        const row = document.createElement('div');
        row.className = `quiz-review-option ${optionIndex === question.answer ? 'is-correct' : ''} ${answers[index] === optionIndex && answers[index] !== question.answer ? 'is-selected-wrong' : ''}`;
        const letter = document.createElement('span'); letter.textContent = String.fromCharCode(65 + optionIndex);
        const label = document.createElement('b'); label.textContent = optionText;
        const status = document.createElement('em');
        status.textContent = optionIndex === question.answer ? '✓ JAWABAN BENAR' : answers[index] === optionIndex ? 'JAWABANMU' : '';
        row.append(letter, label, status); optionList.appendChild(row);
      });
      item.append(title, detail, optionList); review.appendChild(item);
    });
    document.getElementById('retryQuiz').addEventListener('click', () => {
      current = 0; answers = Array(questions.length).fill(null); result.hidden = true; document.getElementById('quizShell').hidden = false;
      const statusPanel = document.getElementById('bab2QuizStatusPanel'); if (statusPanel) statusPanel.hidden = false;
      renderQuestion();
    });
    document.getElementById('goStudy').addEventListener('click', () => app.showPage('materi'));
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  renderQuestion();
})();
