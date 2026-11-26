(() => {
  'use strict';

  const STORAGE_KEY = 'misiAlgoritmaProgressV6';
  const defaultProgress = {
    lessonDone: false,
    missions: { route: false, routeCampus: false, routeMusic: false, pattern: false, patternBonus: false, debug: false, schedule: false, representation: false, bab2SecretWord: false, bab2ParallelPlan: false },
    practice: { pattern: false, bag: false, route: false, sequence: false, tea: false, binary: false, list: false, bucket: false, bab2Effective: false, bab2Dependency: false, bab2OrderedList: false, bab2UnorderedList: false, bab2SecretChain: false, bab2ParallelWork: false, bab2YesNo: false },
    missionAnswers: {},
    practiceAnswers: {},
    quizScore: null,
    quizQuestionCount: 20
  };
  let progress = loadProgress();
  let modalAction = null;
  let modalOpen = false;
  let nextMissionTimer = null;
  let pendingMissionKey = null;
  let nextMissionCountdown = null;
  let practiceCompletionTimer = null;
  let practiceCompletionCountdown = null;

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!saved || typeof saved !== 'object') return structuredClone(defaultProgress);
      return {
        lessonDone: Boolean(saved.lessonDone),
        missions: { ...defaultProgress.missions, ...(saved.missions || {}) },
        practice: { ...defaultProgress.practice, ...(saved.practice || {}) },
        missionAnswers: saved.missionAnswers && typeof saved.missionAnswers === 'object' ? saved.missionAnswers : {},
        practiceAnswers: saved.practiceAnswers && typeof saved.practiceAnswers === 'object' ? saved.practiceAnswers : {},
        // Skor V11 berasal dari kuis 15 soal; V12 memakai 20 soal sehingga
        // skor lama dikosongkan agar tidak ditampilkan sebagai hasil kuis baru.
        quizScore: saved.quizQuestionCount === 20 && Number.isFinite(saved.quizScore) ? saved.quizScore : null,
        quizQuestionCount: 20
      };
    } catch (error) {
      console.warn('Progres lokal tidak dapat dibaca:', error);
      return structuredClone(defaultProgress);
    }
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch (error) { console.warn('Progres tidak dapat disimpan pada browser ini:', error); }
    updateProgressUI();
    updatePracticeProgressUI();
  }

  function updateProgressUI() {
    const done = Object.keys(defaultProgress.missions).filter(key => Boolean(progress.missions[key])).length;
    const total = Object.keys(defaultProgress.missions).length;
    const percentage = Math.round((done / total) * 100);
    document.getElementById('progressMissions').textContent = `${done}/${total}`;
    document.getElementById('progressQuiz').textContent = progress.quizScore === null ? '—' : `${progress.quizScore}/100`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = done === total ? 'Semua misi telah diselesaikan!' : `${percentage}% misi selesai · terus lanjutkan!`;
    document.getElementById('missionDoneCount').textContent = `${done}/${total} SELESAI`;
    const legacyCount = document.getElementById('bab2MissionToolbarCount');
    const legacyBar = document.getElementById('bab2MissionToolbarBar');
    if (legacyCount) legacyCount.textContent = `${done}/${total} misi ditaklukkan`;
    if (legacyBar) legacyBar.style.width = `${percentage}%`;
    document.querySelectorAll('.mission-tab').forEach(tab => {
      tab.classList.toggle('is-complete', Boolean(progress.missions[tab.dataset.mission]));
    });
  }

  function updatePracticeProgressUI() {
    const done = Object.keys(defaultProgress.practice).filter(key => Boolean(progress.practice[key])).length;
    const total = Object.keys(defaultProgress.practice).length;
    const count = document.getElementById('practiceDoneCount');
    const bar = document.getElementById('practiceDoneBar');
    if (count) count.textContent = `${done}/${total} LATIHAN SELESAI`;
    if (bar) bar.style.width = `${done / total * 100}%`;
  }

  function showTransferModal({ eyebrow = 'TAHAP SELESAI', title, message, continueLabel, laterLabel = 'Nanti saja', onContinue }) {
    const modal = document.getElementById('transitionModal');
    document.getElementById('transitionEyebrow').textContent = eyebrow;
    document.getElementById('transitionTitle').textContent = title;
    document.getElementById('transitionMessage').textContent = message;
    document.getElementById('transitionContinue').textContent = continueLabel;
    document.getElementById('transitionLater').textContent = laterLabel;
    modalAction = onContinue;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    modalOpen = true;
    document.body.classList.add('modal-open');
    window.setTimeout(() => document.getElementById('transitionContinue').focus(), 30);
  }

  function closeTransferModal(runAction = false) {
    const modal = document.getElementById('transitionModal');
    if (modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    modalOpen = false;
    document.body.classList.remove('modal-open');
    const action = modalAction;
    modalAction = null;
    if (runAction && typeof action === 'function') action();
  }

  document.getElementById('transitionContinue').addEventListener('click', () => closeTransferModal(true));
  document.getElementById('transitionLater').addEventListener('click', () => closeTransferModal(false));
  document.getElementById('transitionModal').addEventListener('click', event => {
    if (event.target.id === 'transitionModal') closeTransferModal(false);
  });
  document.addEventListener('keydown', event => {
    if (modalOpen && event.key === 'Escape') closeTransferModal(false);
  });

  function clearMissionAdvance() {
    if (nextMissionTimer) window.clearTimeout(nextMissionTimer);
    if (nextMissionCountdown) window.clearInterval(nextMissionCountdown);
    nextMissionTimer = null;
    nextMissionCountdown = null;
    pendingMissionKey = null;
  }

  function clearPracticeCompletionNotice() {
    if (practiceCompletionTimer) window.clearTimeout(practiceCompletionTimer);
    if (practiceCompletionCountdown) window.clearInterval(practiceCompletionCountdown);
    practiceCompletionTimer = null;
    practiceCompletionCountdown = null;
    const notice = document.getElementById('practiceCompletionNotice');
    if (notice) notice.hidden = true;
  }

  function showPage(pageName) {
    if (pageName !== 'misi' && nextMissionTimer) {
      clearMissionAdvance();
      const notice = document.getElementById('missionAutoNext');
      if (notice) notice.hidden = true;
    }
    if (pageName !== 'latihan' && practiceCompletionTimer) clearPracticeCompletionNotice();
    const target = document.getElementById(`page-${pageName}`);
    if (!target) return;
    document.querySelectorAll('.page').forEach(page => page.classList.toggle('active', page === target));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === pageName));
    document.getElementById('mainNav').classList.remove('open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
    window.MisiChapters?.onNavigate?.(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showMission(key, shouldScroll = false) {
    if (nextMissionTimer || nextMissionCountdown) clearMissionAdvance();
    const notice = document.getElementById('missionAutoNext');
    if (notice) notice.hidden = true;
    document.querySelectorAll('.mission-tab').forEach(tab => {
      const active = tab.dataset.mission === key;
      tab.classList.toggle('active', active);
      tab.classList.toggle('is-complete', Boolean(progress.missions[tab.dataset.mission]));
    });
    document.querySelectorAll('.mission-panel').forEach(panel => panel.classList.toggle('active', panel.id === `mission-${key}`));
    if (shouldScroll) {
      window.setTimeout(() => {
        document.getElementById(`mission-${key}`)?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
      }, 80);
    }
  }

  function markMissionDone(key, answer = null) {
    const sequence = ['route', 'routeCampus', 'routeMusic', 'pattern', 'patternBonus', 'debug', 'schedule', 'representation', 'bab2SecretWord', 'bab2ParallelPlan'];
    if (!sequence.includes(key)) return;

    const wasAlreadyDone = Boolean(progress.missions[key]);
    let changed = false;
    if (!wasAlreadyDone) { progress.missions[key] = true; changed = true; }
    if (answer !== null && JSON.stringify(progress.missionAnswers[key]) !== JSON.stringify(answer)) {
      progress.missionAnswers[key] = answer;
      changed = true;
    }
    if (changed) saveProgress();
    // Jawaban yang sudah benar dikunci. Pemanggilan ganda tidak boleh memicu
    // perpindahan atau pop-up baru; siswa perlu menekan Reset Misi untuk mengulang.
    if (wasAlreadyDone) return;

    clearMissionAdvance();

    const missionNames = {
      route: 'Jalur Perpustakaan',
      routeCampus: 'Jalur Gudang',
      routeMusic: 'Jalur Ruang Musik',
      pattern: 'Gelang Warna',
      patternBonus: 'Gelang Lanjutan',
      debug: 'Detektif Bug',
      schedule: 'Optimasi Ember',
      representation: 'Data Ya/Tidak',
      bab2SecretWord: 'Kata Rahasia',
      bab2ParallelPlan: 'Jadwal Paralel'
    };
    const missionReasons = {
      route: 'Robot mencapai perpustakaan karena instruksi membawanya melewati petak yang aman. Urutan perintah menentukan apakah tujuan dapat dicapai tanpa menabrak rintangan.',
      routeCampus: 'Robot berhasil mengantar perlengkapan karena urutan langkah membawanya melalui jalur yang tidak terhalang. Menyusun dan menguji instruksi membantu memastikan tujuan tercapai.',
      routeMusic: 'Robot berhasil menemukan ruang musik. Tantangan ini menunjukkan bahwa urutan perintah harus diperiksa agar gerakan mencapai titik tujuan dengan aman.',
      pattern: 'Gelang pertama dapat dirangkai sebanyak 15 manik-manik. Urutan M-H-K-B diikuti selama stok tersedia. Ketika warna habis, warna itu dilewati. Dua manik-manik kuning yang tersisa tidak dapat dipasang berdampingan.',
      patternBonus: 'Gelang kedua dapat menggunakan seluruh 83 manik-manik. Jumlah stoknya 20 + 23 + 18 + 22 = 83, dan urutan warna dapat dijalankan tanpa dua warna sama berdampingan.',
      debug: 'Urutan mencuci tangan sudah diperbaiki: basahi tangan, gunakan sabun, gosok seluruh bagian, bilas, lalu keringkan. Setiap langkah dilakukan setelah langkah sebelumnya agar proses berjalan benar.',
      schedule: 'Waktu tercepat adalah 90 menit. Setiap ember memerlukan 60 menit, sehingga total pekerjaan 180 menit-pancuran. Dua pancuran dapat bekerja bersamaan. Contohnya, isi A dan B selama 30 menit, A dan C selama 30 menit berikutnya, lalu B dan C selama 30 menit terakhir.',
      representation: '“Apakah hari ini turun hujan?” hanya memiliki dua kemungkinan jawaban, yaitu ya atau tidak. Pertanyaan seperti warna kesukaan atau jumlah buku memiliki lebih dari dua kemungkinan jawaban.',
      bab2SecretWord: 'Hubungan huruf pada kartu harus diikuti dari huruf bawah ke huruf atas. Rangkaian yang terbentuk adalah K–O–M–P–U–T–A–S–I.',
      bab2ParallelPlan: 'Unduhan dan membaca instruksi tidak saling bergantung, sehingga dapat berjalan bersamaan. Rangkuman dikerjakan setelah instruksi dibaca.'
    };

    const currentIndex = sequence.indexOf(key);
    const notice = document.getElementById('missionAutoNext');
    const allDone = sequence.every(item => Boolean(progress.missions[item]));

    if (allDone) {
      notice.hidden = false;
      notice.innerHTML = `<span class="next-check">✓</span><div class="auto-next-copy"><strong>Semua misi berhasil diselesaikan!</strong><small>Hebat! Sepuluh tantangan sudah kamu tuntaskan. Bersiap menuju Latihan.</small><b>Pop-up menuju Latihan akan muncul dalam <span id="missionNextCountdown">3</span> detik. Setelah itu, tekan tombol lanjut untuk berpindah.</b><div class="auto-next-track"><i id="missionNextCountdownBar"></i></div></div>`;
      pendingMissionKey = key;
      let remaining = 3;
      nextMissionCountdown = window.setInterval(() => {
        remaining = Math.max(0, remaining - 1);
        const label = document.getElementById('missionNextCountdown');
        const bar = document.getElementById('missionNextCountdownBar');
        if (label) label.textContent = String(remaining);
        if (bar) bar.style.width = `${remaining / 3 * 100}%`;
      }, 1000);
      nextMissionTimer = window.setTimeout(() => {
        clearMissionAdvance();
        notice.hidden = true;
        showTransferModal({
          eyebrow: 'SEMUA MISI SELESAI',
          title: 'Sepuluh misi berhasil dituntaskan!',
          message: 'Keren! Kamu sudah menyelesaikan seluruh sepuluh tantangan petualangan algoritma. Siap menguji kemampuanmu melalui latihan berikutnya?',
          continueLabel: 'Lanjut ke Latihan →',
          onContinue: () => showPage('latihan')
        });
      }, 3000);
      return;
    }

    const nextKey = sequence[currentIndex + 1];
    if (!nextKey) return;

    notice.hidden = false;
    notice.innerHTML = `<span class="next-check">✓</span><div class="auto-next-copy"><strong>${missionNames[key]} berhasil diselesaikan.</strong><small>${missionReasons[key]}</small><b>Misi berikutnya: ${missionNames[nextKey]}. Akan dibuka otomatis dalam <span id="missionNextCountdown">5</span> detik. Kamu tidak perlu menekan apa pun.</b><div class="auto-next-track"><i id="missionNextCountdownBar"></i></div></div>`;

    pendingMissionKey = key;
    let remaining = 5;
    nextMissionCountdown = window.setInterval(() => {
      remaining = Math.max(0, remaining - 1);
      const label = document.getElementById('missionNextCountdown');
      const bar = document.getElementById('missionNextCountdownBar');
      if (label) label.textContent = String(remaining);
      if (bar) bar.style.width = `${remaining / 5 * 100}%`;
    }, 1000);
    nextMissionTimer = window.setTimeout(() => {
      clearMissionAdvance();
      showMission(nextKey, true);
    }, 5000);
  }

  function markPracticeDone(key, answer = null) {
    if (!Object.prototype.hasOwnProperty.call(progress.practice, key)) return;
    const wasAllComplete = Object.keys(defaultProgress.practice).every(item => Boolean(progress.practice[item]));
    const wasAlreadyDone = Boolean(progress.practice[key]);
    let changed = false;
    if (!wasAlreadyDone) { progress.practice[key] = true; changed = true; }
    if (answer !== null && JSON.stringify(progress.practiceAnswers[key]) !== JSON.stringify(answer)) {
      progress.practiceAnswers[key] = answer;
      changed = true;
    }
    if (changed) saveProgress();

    const nowAllComplete = Object.keys(defaultProgress.practice).every(item => Boolean(progress.practice[item]));
    // Pop-up hanya dijadwalkan ketika jawaban terakhir baru saja diselesaikan,
    // bukan setiap kali siswa menjawab ulang saat progres lama sudah 10/10.
    if (!wasAllComplete && nowAllComplete) {
      clearPracticeCompletionNotice();
      const notice = document.getElementById('practiceCompletionNotice');
      if (!notice) return;
      notice.hidden = false;
      notice.innerHTML = `<span class="next-check">✓</span><div class="auto-next-copy"><strong>Semua latihan berhasil diselesaikan!</strong><small>Lima belas latihan sudah tuntas. Keren! Kamu siap mencoba kuis akhir.</small><b>Pop-up menuju Kuis akan muncul dalam <span id="practiceNextCountdown">3</span> detik.</b><div class="auto-next-track"><i id="practiceNextCountdownBar"></i></div></div>`;
      let remaining = 3;
      practiceCompletionCountdown = window.setInterval(() => {
        remaining = Math.max(0, remaining - 1);
        const label = document.getElementById('practiceNextCountdown');
        const bar = document.getElementById('practiceNextCountdownBar');
        if (label) label.textContent = String(remaining);
        if (bar) bar.style.width = `${remaining / 3 * 100}%`;
      }, 1000);
      practiceCompletionTimer = window.setTimeout(() => {
        clearPracticeCompletionNotice();
        showTransferModal({
          eyebrow: 'LATIHAN LENGKAP',
          title: 'Semua latihan berhasil!',
          message: 'Hebat! Semua lima belas latihan sudah kamu tuntaskan. Sekarang saatnya menghadapi kuis akhir!',
          continueLabel: 'Lanjut ke Kuis →',
          onContinue: () => showPage('kuis')
        });
      }, 3000);
    }
  }

  document.querySelectorAll('[data-page]').forEach(link => link.addEventListener('click', () => showPage(link.dataset.page)));
  document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showPage(button.dataset.go)));
  document.querySelectorAll('.mission-tab').forEach(tab => tab.addEventListener('click', () => showMission(tab.dataset.mission)));
  document.getElementById('menuToggle').addEventListener('click', event => {
    const nav = document.getElementById('mainNav');
    const open = nav.classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });

  document.getElementById('completeLesson').addEventListener('click', () => {
    progress.lessonDone = true;
    saveProgress();
    showTransferModal({
      eyebrow: 'MATERI SELESAI',
      title: 'Bekal petualangan sudah siap!',
      message: 'Kamu sudah mempelajari berpikir komputasional, algoritma, pola, solusi efektif dan efisien, optimasi penjadwalan, struktur data, representasi data, serta abstraksi. Sekarang waktunya mencoba menerapkan konsep tersebut.',
      continueLabel: 'Mulai Misi 1 →',
      onContinue: () => { showPage('misi'); showMission('route'); }
    });
  });

  // Tandai jawaban yang dipilih agar siswa langsung melihat umpan balik visual.
  function setChoiceState(containerSelector, selectedButton, isCorrect) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.querySelectorAll('button').forEach(item => {
      item.classList.remove('selected', 'is-correct', 'is-wrong');
      item.setAttribute('aria-pressed', 'false');
    });
    selectedButton.classList.add('selected', isCorrect ? 'is-correct' : 'is-wrong');
    selectedButton.setAttribute('aria-pressed', 'true');
  }

  function lockChoiceGroup(containerSelector) {
    document.querySelectorAll(`${containerSelector} button`).forEach(button => { button.disabled = true; });
  }

  function setInputState(input, isCorrect) {
    input.classList.remove('answer-correct', 'answer-wrong');
    input.classList.add(isCorrect ? 'answer-correct' : 'answer-wrong');
  }

  document.querySelectorAll('#patternInput, #sequenceInput').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('answer-correct', 'answer-wrong'));
  });

  // Latihan 1 — pola jumlah stiker bertambah empat.
  document.getElementById('checkPattern').addEventListener('click', () => {
    const input = document.getElementById('patternInput');
    const value = input.value.trim();
    const output = document.getElementById('patternPracticeFeedback');
    if (!value) { output.className = 'feedback error'; output.textContent = 'Isi jawabanmu terlebih dahulu.'; return; }
    if (Number(value) === 21) {
      setInputState(input, true);
      input.disabled = true;
      document.getElementById('checkPattern').disabled = true;
      output.className = 'feedback success';
      output.textContent = 'Benar! Jawabannya 21 karena jumlah stiker bertambah 4 setiap langkah: 5, 9, 13, 17, lalu 21. Selisih yang tetap menjadi aturan pola.';
      markPracticeDone('pattern', value);
    } else {
      setInputState(input, false);
      output.className = 'feedback error';
      output.textContent = 'Belum tepat. Bandingkan jumlah stiker dari satu tahap ke tahap berikutnya dan cari perubahan yang berulang.';
    }
  });

  // Latihan 2 — pemeriksaan sebelum pengiriman tugas digital.
  document.querySelectorAll('#bagChoices button').forEach(button => button.addEventListener('click', () => {
    const output = document.getElementById('bagFeedback');
    setChoiceState('#bagChoices', button, button.dataset.choice === 'a');
    if (button.dataset.choice === 'a') {
      output.className = 'feedback success';
      output.textContent = 'Tepat! Sebelum mengirim tugas, pastikan berkas sudah terlampir dan bisa dibuka. Pemeriksaan ini mencegah tugas terkirim tanpa berkas atau dengan berkas yang keliru.';
      lockChoiceGroup('#bagChoices');
      markPracticeDone('bag', button.dataset.choice);
    } else {
      output.className = 'feedback error';
      output.textContent = 'Belum tepat. Pikirkan pemeriksaan terakhir yang sebaiknya dilakukan sebelum sebuah tugas dikirim.';
    }
  }));

  // Latihan 3 — membandingkan efisiensi pengelompokan kartu.
  document.querySelectorAll('#routeChoices button').forEach(button => button.addEventListener('click', () => {
    const output = document.getElementById('routeFeedback');
    setChoiceState('#routeChoices', button, button.dataset.choice === 'b');
    if (button.dataset.choice === 'b') {
      output.className = 'feedback success';
      output.textContent = 'Tepat! Cara B lebih efisien karena pengelompokan berdasarkan huruf awal mengurangi pemeriksaan berulang. Kedua cara tetap dapat menghasilkan kartu yang rapi, tetapi Cara B membutuhkan waktu lebih singkat.';
      lockChoiceGroup('#routeChoices');
      markPracticeDone('route', button.dataset.choice);
    } else {
      output.className = 'feedback error';
      output.textContent = 'Cara tersebut tetap bisa menghasilkan kartu rapi, tetapi belum menggunakan waktu sehemat pilihan lainnya.';
    }
  }));

  // Latihan 4 — pola bilangan bertambah tiga.
  document.getElementById('checkSequence').addEventListener('click', () => {
    const input = document.getElementById('sequenceInput');
    const value = input.value.trim();
    const output = document.getElementById('sequenceFeedback');
    if (!value) { output.className = 'feedback error'; output.textContent = 'Masukkan angka jawabanmu terlebih dahulu.'; return; }
    if (Number(value) === 15) {
      setInputState(input, true);
      input.disabled = true;
      document.getElementById('checkSequence').disabled = true;
      output.className = 'feedback success';
      output.textContent = 'Benar! Jawabannya 15. Setiap angka bertambah 3: 3 menjadi 6, 6 menjadi 9, dan 9 menjadi 12. Jadi, 12 + 3 = 15.';
      markPracticeDone('sequence', value);
    } else {
      setInputState(input, false);
      output.className = 'feedback error';
      output.textContent = 'Belum tepat. Amati selisih antara dua angka yang berurutan, lalu gunakan aturan yang sama untuk angka berikutnya.';
    }
  });

  // Latihan 5 — langkah awal membuat teh hangat.
  document.querySelectorAll('#teaChoices button').forEach(button => button.addEventListener('click', () => {
    const output = document.getElementById('teaFeedback');
    setChoiceState('#teaChoices', button, button.dataset.choice === 'a');
    if (button.dataset.choice === 'a') {
      output.className = 'feedback success';
      output.textContent = 'Betul! Air harus dipanaskan terlebih dahulu agar tersedia air panas untuk menyeduh teh. Urutan ini masuk akal karena langkah berikutnya bergantung pada hasil langkah sebelumnya.';
      lockChoiceGroup('#teaChoices');
      markPracticeDone('tea', button.dataset.choice);
    } else {
      output.className = 'feedback error';
      output.textContent = 'Pikirkan urutan prosesnya. Teh hangat membutuhkan air panas, jadi air perlu dipanaskan sebelum digunakan untuk menyeduh.';
    }
  }));


  // Latihan 6 — memilih visualisasi data pengunjung.
  document.querySelectorAll('#binaryChoices button').forEach(button => button.addEventListener('click', () => {
    const output = document.getElementById('binaryFeedback');
    setChoiceState('#binaryChoices', button, button.dataset.choice === 'a');
    if (button.dataset.choice === 'a') {
      output.className = 'feedback success';
      output.textContent = 'Benar! Grafik batang memudahkan pembaca membandingkan jumlah pengunjung dari hari ke hari karena tinggi setiap batang mewakili nilai yang berbeda.';
      lockChoiceGroup('#binaryChoices');
      markPracticeDone('binary', button.dataset.choice);
    } else {
      output.className = 'feedback error';
      output.textContent = 'Belum tepat. Pilih penyajian yang membuat perbedaan jumlah pada setiap hari mudah dibandingkan.';
    }
  }));

  // Latihan 7 — struktur data berupa daftar yang memiliki aturan urutan.
  document.querySelectorAll('#listChoices button').forEach(button => button.addEventListener('click', () => {
    const output = document.getElementById('listFeedback');
    setChoiceState('#listChoices', button, button.dataset.choice === 'a');
    if (button.dataset.choice === 'a') {
      output.className = 'feedback success';
      output.textContent = 'Tepat! Daftar nama berdasarkan alfabet memiliki aturan yang jelas, yaitu A sampai Z. Aturan tersebut membuat nama lebih mudah ditemukan.';
      lockChoiceGroup('#listChoices');
      markPracticeDone('list', button.dataset.choice);
    } else {
      output.className = 'feedback error';
      output.textContent = 'Perhatikan pilihan yang memiliki aturan urutan tertentu. Pengurutan alfabet adalah salah satu contoh aturan pada sebuah daftar.';
    }
  }));

  // Latihan 8 — abstraksi dalam penyederhanaan denah.
  document.querySelectorAll('#bucketPracticeChoices button').forEach(button => button.addEventListener('click', () => {
    const output = document.getElementById('bucketPracticeFeedback');
    setChoiceState('#bucketPracticeChoices', button, button.dataset.choice === 'b');
    if (button.dataset.choice === 'b') {
      output.className = 'feedback success';
      output.textContent = 'Benar! Letak gerbang, koridor, dan ruang kelas merupakan informasi utama untuk memahami rute. Warna cat, hiasan, atau merek meja tidak diperlukan untuk tujuan denah tersebut.';
      lockChoiceGroup('#bucketPracticeChoices');
      markPracticeDone('bucket', button.dataset.choice);
    } else {
      output.className = 'feedback error';
      output.textContent = 'Belum tepat. Pilih informasi yang benar-benar membantu seseorang menemukan jalan menuju ruang kelas.';
    }
  }));

  function clearChoiceGroup(selector) {
    document.querySelectorAll(`${selector} button`).forEach(button => {
      button.classList.remove('selected', 'is-correct', 'is-wrong');
      button.setAttribute('aria-pressed', 'false');
      button.disabled = false;
    });
  }

  function clearPracticeUI() {
    document.querySelectorAll('#page-latihan .practice-card .feedback').forEach(feedback => {
      feedback.className = 'feedback';
      feedback.textContent = '';
    });
    document.querySelectorAll('#page-latihan .choice-stack').forEach(group => clearChoiceGroup(`#${group.id}`));
    document.getElementById('checkPattern').disabled = false;
    document.getElementById('checkSequence').disabled = false;
    clearPracticeCompletionNotice();
    ['patternInput', 'sequenceInput'].forEach(id => {
      const input = document.getElementById(id);
      if (input) { input.value = ''; input.disabled = false; input.classList.remove('answer-correct', 'answer-wrong'); }
    });
  }

  function restorePracticeUI() {
    const saved = progress.practiceAnswers || {};
    const restoreChoice = (key, selector, feedbackId, fallback, explanation) => {
      if (!progress.practice[key]) return;
      const group = document.querySelector(selector);
      const answer = String(saved[key] ?? fallback);
      const button = group && [...group.querySelectorAll('button')].find(item => item.dataset.choice === answer);
      if (button) setChoiceState(selector, button, true);
      lockChoiceGroup(selector);
      const feedback = document.getElementById(feedbackId);
      if (feedback) { feedback.className = 'feedback success'; feedback.textContent = `Jawaban benar tersimpan. ${explanation}`; }
    };
    const restoreInput = (key, inputId, feedbackId, fallback, explanation) => {
      if (!progress.practice[key]) return;
      const input = document.getElementById(inputId);
      const feedback = document.getElementById(feedbackId);
      if (input) { input.value = saved[key] ?? fallback; setInputState(input, true); input.disabled = true; }
      const checkId = inputId === 'patternInput' ? 'checkPattern' : 'checkSequence';
      const checkButton = document.getElementById(checkId);
      if (checkButton) checkButton.disabled = true;
      if (feedback) { feedback.className = 'feedback success'; feedback.textContent = `Jawaban benar tersimpan. ${explanation}`; }
    };

    restoreInput('pattern', 'patternInput', 'patternPracticeFeedback', '21', 'Pola bertambah 4 pada setiap langkah.');
    restoreChoice('bag', '#bagChoices', 'bagFeedback', 'a', 'Berkas perlu dipastikan terlampir dan dapat dibuka sebelum tugas dikirim.');
    restoreChoice('route', '#routeChoices', 'routeFeedback', 'b', 'Pengelompokan kartu berdasarkan huruf awal membutuhkan waktu lebih singkat.');
    restoreInput('sequence', 'sequenceInput', 'sequenceFeedback', '15', 'Setiap angka bertambah 3, sehingga angka berikutnya adalah 15.');
    restoreChoice('tea', '#teaChoices', 'teaFeedback', 'a', 'Air dipanaskan terlebih dahulu sebelum digunakan untuk menyeduh teh.');
    restoreChoice('binary', '#binaryChoices', 'binaryFeedback', 'a', 'Grafik batang memudahkan perbandingan jumlah pengunjung tiap hari.');
    restoreChoice('list', '#listChoices', 'listFeedback', 'a', 'Daftar nama berdasarkan alfabet mempunyai aturan urutan yang jelas.');
    restoreChoice('bucket', '#bucketPracticeChoices', 'bucketPracticeFeedback', 'b', 'Letak gerbang, koridor, dan ruang kelas adalah informasi utama untuk membaca rute.');
  }

  function requestReset(kind) {
    const isMission = kind === 'missions';
    showTransferModal({
      eyebrow: 'ATUR ULANG PROGRES',
      title: isMission ? 'Ulangi semua misi?' : 'Ulangi semua latihan?',
      message: isMission
        ? 'Status hijau dan jawaban tersimpan untuk sepuluh misi akan dihapus. Setelah reset, kamu bisa mengerjakan semuanya dari awal. Progres Latihan dan nilai Kuis tidak berubah.'
        : 'Status selesai dan jawaban tersimpan untuk lima belas latihan akan dihapus. Setelah reset, kamu bisa mengerjakan semuanya dari awal. Progres Misi dan nilai Kuis tidak berubah.',
      continueLabel: isMission ? 'Reset Misi' : 'Reset Latihan',
      laterLabel: 'Batal',
      onContinue: () => {
        if (isMission) {
          if (document.querySelector('.maze-grid.is-running')) {
            showTransferModal({ eyebrow: 'ROBOT MASIH BERGERAK', title: 'Tunggu sampai robot selesai', message: 'Progres belum direset. Tunggu robot menyelesaikan gerakannya, lalu tekan Reset Misi kembali.', continueLabel: 'Mengerti', laterLabel: 'Tutup', onContinue: null });
            return;
          }
          // Reset tampilan tantangan terlebih dahulu. Jika robot masih berjalan,
          // hentikan proses reset sebelum mengubah data progres tersimpan.
          if (window.MisiGame && !window.MisiGame.resetAll()) {
            showTransferModal({ eyebrow: 'ROBOT MASIH BERGERAK', title: 'Tunggu sampai robot selesai', message: 'Progres belum direset. Tunggu robot menyelesaikan gerakannya, lalu tekan Reset Misi kembali.', continueLabel: 'Mengerti', laterLabel: 'Tutup', onContinue: null });
            return;
          }
          clearMissionAdvance();
          const notice = document.getElementById('missionAutoNext');
          if (notice) notice.hidden = true;
          progress.missions = { ...defaultProgress.missions };
          progress.missionAnswers = {};
          saveProgress();
          showMission('route');
          window.MisiBab2ExtrasUI?.render?.();
        } else {
          progress.practice = { ...defaultProgress.practice };
          progress.practiceAnswers = {};
          clearPracticeUI();
          saveProgress();
          window.MisiBab2ExtrasUI?.render?.();
        }
      }
    });
  }

  document.getElementById('resetMissions')?.addEventListener('click', () => requestReset('missions'));
  document.getElementById('resetPractice')?.addEventListener('click', () => requestReset('practice'));

  restorePracticeUI();
  window.MisiApp = { progress, saveProgress, markMissionDone, markPracticeDone, showPage, showMission, showTransferModal };
  updateProgressUI();
  updatePracticeProgressUI();
})();
