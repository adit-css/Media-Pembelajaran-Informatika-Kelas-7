(() => {
  'use strict';
  const app = window.MisiApp;
  const questions = [
    { q: 'Apa tujuan utama berpikir komputasional ketika menghadapi persoalan yang rumit?', options: ['Menghafal semua kemungkinan jawaban', 'Menyusun cara penyelesaian yang sistematis', 'Menghindari penggunaan aturan', 'Membuat persoalan menjadi lebih panjang'], answer: 1, explain: 'Berpikir komputasional membantu kita merumuskan persoalan dan menyusun langkah penyelesaian yang dapat dijalankan.' },
    { q: 'Instruksi yang baik dalam sebuah algoritma seharusnya…', options: ['Memiliki arti yang jelas dan tidak membingungkan', 'Boleh ditafsirkan dengan banyak cara', 'Tidak memiliki urutan', 'Selalu ditulis sepanjang mungkin'], answer: 0, explain: 'Instruksi yang jelas membantu orang atau komputer menjalankan proses sesuai tujuan tanpa menebak-nebak maksudnya.' },
    { q: 'Perhatikan pola simbol: ● ▲ ▲ | ● ▲ ▲ | ● … Simbol berikutnya adalah…', options: ['Lingkaran', 'Segitiga', 'Persegi', 'Bintang'], answer: 1, explain: 'Pola yang berulang adalah satu lingkaran diikuti dua segitiga. Setelah lingkaran ketiga, pola berlanjut dengan segitiga.' },
    { q: 'Sekolah membuat ringkasan kehadiran bulanan. Informasi apa yang paling penting ditampilkan?', options: ['Jumlah siswa hadir dan tidak hadir', 'Warna latar halaman', 'Merek sepatu siswa', 'Lagu yang diputar saat istirahat'], answer: 0, explain: 'Ringkasan kehadiran berfokus pada jumlah siswa yang hadir dan tidak hadir. Informasi yang tidak berkaitan dengan tujuan laporan dapat diabaikan.' },
    { q: 'Mengapa urutan lagu dalam sebuah daftar putar termasuk contoh struktur data yang terurut?', options: ['Karena semua lagu harus sama panjang', 'Karena posisi lagu menentukan lagu mana yang diputar lebih dahulu', 'Karena daftar tidak boleh diubah', 'Karena daftar hanya dapat berisi satu lagu'], answer: 1, explain: 'Dalam daftar putar, posisi setiap lagu memiliki arti. Lagu pada urutan pertama diputar sebelum lagu pada urutan berikutnya.' },
    { q: 'Kelompok berhasil menyelesaikan dekorasi kelas sesuai rencana, tetapi menggunakan bahan jauh lebih banyak dari yang dibutuhkan. Kegiatan itu…', options: ['Tidak efektif dan tidak memiliki tujuan', 'Efisien tetapi tidak efektif', 'Efektif, tetapi belum efisien', 'Tidak dapat disebut proses'], answer: 2, explain: 'Kegiatan tersebut berhasil mencapai tujuan sehingga efektif. Namun, penggunaan bahan berlebihan menunjukkan prosesnya belum efisien.' },
    { q: 'Setelah mengubah beberapa baris kode, hasil program menjadi berbeda dari yang diharapkan. Apa tindakan yang tepat?', options: ['Mengabaikan hasilnya', 'Menghapus seluruh program tanpa pemeriksaan', 'Mencari bagian yang berubah, memperbaiki kesalahan, lalu menguji kembali', 'Mengganti nama komputer'], answer: 2, explain: 'Debugging dilakukan dengan menemukan kesalahan, memperbaikinya, kemudian menguji kembali apakah hasil program sudah sesuai.' },
    { q: 'Sebuah mesin tiket meminta pengguna memilih tujuan, memasukkan uang, lalu mengambil tiket. Susunan itu merupakan contoh…', options: ['Algoritma', 'Warna antarmuka', 'Perangkat keras', 'Daftar acak'], answer: 0, explain: 'Tindakan tersebut disusun sebagai langkah berurutan untuk menghasilkan tujuan, yaitu memperoleh tiket.' },
    { q: 'Saat komputer mengunduh berkas, pengguna dapat sambil menulis catatan. Mengapa kedua kegiatan itu dapat dilakukan bersamaan?', options: ['Karena keduanya tidak membutuhkan waktu', 'Karena pekerjaan yang berbeda dapat berlangsung secara paralel', 'Karena salah satu kegiatan harus dihentikan', 'Karena urutan kegiatan tidak penting'], answer: 1, explain: 'Optimasi penjadwalan dapat memanfaatkan waktu dengan menjalankan kegiatan yang tidak saling bergantung secara bersamaan.' },
    { q: 'Sebuah aplikasi menyimpan informasi dalam bentuk teks, angka, gambar, dan suara. Hal ini menunjukkan bahwa informasi digital…', options: ['Hanya dapat berbentuk angka', 'Tidak dapat disimpan', 'Dapat disajikan dalam berbagai bentuk data', 'Selalu harus dicetak dahulu'], answer: 2, explain: 'Informasi digital dapat direpresentasikan dalam berbagai bentuk, seperti teks, angka, gambar, grafis, suara, atau video.' },
    { q: 'Manakah contoh kumpulan data yang dapat disimpan sebagai sebuah daftar?', options: ['Satu bunyi bel sekolah', 'Satu foto lapangan', 'Daftar perlengkapan untuk kegiatan kemah', 'Satu warna pada layar'], answer: 2, explain: 'Daftar perlengkapan berisi beberapa item yang dikumpulkan dalam satu susunan. Setiap item dapat dicatat dan diperiksa satu per satu.' },
    { q: 'Ketika membuat rancangan aplikasi, mengapa pengembang perlu menentukan informasi yang benar-benar dibutuhkan pengguna?', options: ['Agar tampilan dipenuhi semua detail', 'Agar masalah utama dan informasi penting menjadi lebih mudah dipahami', 'Agar aplikasi tidak memiliki tujuan', 'Agar semua data dihapus'], answer: 1, explain: 'Memusatkan perhatian pada informasi penting membantu menyederhanakan persoalan dan menghindari detail yang tidak relevan.' },
    { q: 'Dua cara berbeda dapat menyelesaikan persoalan yang sama. Apa yang perlu dipertimbangkan saat memilih salah satunya?', options: ['Hanya memilih cara dengan nama paling pendek', 'Memilih cara yang paling rumit', 'Mempertimbangkan keberhasilan dan penggunaan waktu atau sumber daya', 'Memilih secara acak'], answer: 2, explain: 'Solusi yang baik perlu efektif dalam mencapai tujuan dan efisien dalam penggunaan waktu, tenaga, atau biaya.' },
    { q: 'Apa manfaat menguji algoritma sebelum digunakan untuk pekerjaan sebenarnya?', options: ['Mengetahui apakah langkah-langkahnya menghasilkan keluaran yang diharapkan', 'Membuat jumlah instruksi selalu bertambah', 'Menghilangkan kebutuhan akan tujuan', 'Memastikan tidak ada perubahan yang boleh dilakukan'], answer: 0, explain: 'Pengujian membantu memeriksa apakah algoritma bekerja sesuai rancangan dan menemukan bagian yang perlu diperbaiki.' },
    { q: 'Berpikir komputasional bermanfaat dalam kegiatan sehari-hari karena…', options: ['Hanya dapat dilakukan oleh programmer', 'Hanya berguna saat memakai laptop', 'Membantu menyusun langkah dan memilih solusi dalam berbagai persoalan', 'Menggantikan semua keputusan manusia'], answer: 2, explain: 'Berpikir komputasional tidak terbatas pada komputer. Cara berpikir ini juga membantu menyelesaikan persoalan di sekolah, rumah, dan bidang lain.' },
    { q: 'Dalam persoalan membuat biskuit untuk keluarga kecil, cara penyelesaian dapat berbeda dari produksi massal karena ...', options: ['Semua persoalan harus memakai mesin yang sama', 'Skala masalah memengaruhi alat, sumber daya, dan pengaturan proses yang dibutuhkan', 'Produksi kecil tidak membutuhkan langkah', 'Jumlah bahan selalu sama untuk semua skala produksi'], answer: 1, explain: 'Buku menjelaskan bahwa cakupan masalah yang berbeda dapat membutuhkan cara dan peralatan yang berbeda pula.' },
    { q: 'Sebuah pekerjaan memiliki tiga tahap: mengumpulkan bahan, menyusun bahan, lalu mengemas hasil. Jika tahap menyusun membutuhkan bahan yang telah dikumpulkan, urutan yang benar adalah ...', options: ['Mengemas, mengumpulkan, menyusun', 'Menyusun, mengemas, mengumpulkan', 'Mengumpulkan, menyusun, mengemas', 'Mengumpulkan, mengemas, lalu menyusun'], answer: 2, explain: 'Tahap yang menjadi prasyarat perlu dilakukan lebih dahulu agar tahap berikutnya dapat berjalan.' },
    { q: 'Data daftar belanja ibu berisi tomat, wortel, dan beras. Jika tidak ada aturan urutan, daftar tersebut ...', options: ['Dapat dibeli dengan urutan berbeda tanpa mengubah isi daftar', 'Harus selalu dibeli menurut abjad', 'Tidak dapat disebut kumpulan data', 'Hanya boleh dibeli sesuai urutan saat ditulis'], answer: 0, explain: 'Daftar belanja dapat tidak memiliki keterurutan; posisi item tidak menentukan arti daftar.' },
    { q: 'Manakah contoh pertanyaan yang dapat direpresentasikan dengan dua kemungkinan nilai?', options: ['Berapa usia kakak?', 'Apakah pintu kelas tertutup?', 'Apa nama ketua kelas?', 'Berapa jumlah buku di tas?'], answer: 1, explain: 'Pertanyaan tersebut dapat dijawab dengan ya atau tidak, sehingga sesuai untuk representasi dua nilai.' },
    { q: 'Ketika dua kegiatan dapat dilakukan secara paralel, tujuan utama pengaturan tersebut adalah ...', options: ['Membuat seluruh pekerjaan saling menunggu', 'Menambah jumlah langkah tanpa alasan', 'Memanfaatkan waktu dengan mengerjakan kegiatan yang tidak saling bergantung secara bersamaan', 'Memaksa semua kegiatan memakai alat yang sama'], answer: 2, explain: 'Kegiatan yang tidak saling bergantung dapat berjalan bersamaan untuk menggunakan waktu lebih efisien.' }
  ];
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
    const options = document.createElement('div'); options.className = 'quiz-options';
    item.options.forEach((label, index) => {
      const button = document.createElement('button'); button.className = `quiz-option${answers[current] === index ? ' selected' : ''}`;
      const letter = document.createElement('span'); letter.className = 'option-letter'; letter.textContent = String.fromCharCode(65 + index);
      const text = document.createElement('span'); text.textContent = label;
      button.append(letter, text);
      button.addEventListener('click', () => { answers[current] = index; renderQuestion(); });
      options.appendChild(button);
    });
    const warning = document.createElement('p');
    warning.className = 'feedback error quiz-answer-warning';
    warning.id = 'quizAnswerWarning';
    warning.hidden = true;
    warning.textContent = 'Pilih salah satu jawaban terlebih dahulu.';
    questionArea.append(number, title, options, warning);
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
      const detail = document.createElement('small'); detail.textContent = `Jawaban benar: ${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]} — ${question.explain}`;
      item.append(title, detail); review.appendChild(item);
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
