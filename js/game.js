(() => {
  'use strict';
  const app = window.MisiApp;
  const missionResetters = [];
  const sleep = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds));

  function lockChoiceGroup(containerSelector) {
    document.querySelectorAll(`${containerSelector} button`).forEach(button => { button.disabled = true; });
  }

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

  // MISI 1 — Robot berjalan pada grid, satu petak setiap langkah.
  const rows = 5, cols = 5;
  const start = { x: 0, y: 3 }, goal = { x: 4, y: 1 };
  const walls = new Set(['1,3','2,3','3,3','4,3','0,4','1,4','2,4','3,4','4,4','1,1','3,2','4,2','3,0']);
  const delta = { U: [0,-1], D: [0,1], L: [-1,0], R: [1,0] };
  const arrows = { U: '↑', D: '↓', L: '←', R: '→' };
  const directionNames = { U: 'atas', D: 'bawah', L: 'kiri', R: 'kanan' };
  let commands = [];
  let robot = { ...start };
  let trail = [`${start.x},${start.y}`];
  let activeCommand = -1;
  let mazeRunning = false;
  let mazeCompleted = Boolean(app.progress.missions.route);
  const grid = document.getElementById('mazeGrid');
  const mazeStatus = document.getElementById('mazeStatus');
  const mazeControls = [...document.querySelectorAll('[data-dir]'), document.getElementById('undoCommand'), document.getElementById('clearCommands'), document.getElementById('runMaze')];

  function renderMaze() {
    grid.innerHTML = '';
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cell = document.createElement('div');
        cell.className = 'maze-cell';
        const key = `${x},${y}`;
        if (walls.has(key)) { cell.classList.add('wall'); cell.textContent = '▪'; }
        if (x === start.x && y === start.y) { cell.classList.add('start'); cell.textContent = '●'; }
        if (x === goal.x && y === goal.y) { cell.classList.add('goal'); cell.textContent = '⚑'; }
        if (trail.includes(key) && !(x === robot.x && y === robot.y)) cell.classList.add('robot-trail');
        if (x === robot.x && y === robot.y) { cell.classList.add('robot'); cell.textContent = '🤖'; }
        grid.appendChild(cell);
      }
    }
    document.getElementById('commandCount').textContent = `${commands.length} / 10`;
    const list = document.getElementById('commandList');
    list.innerHTML = '';
    if (!commands.length) {
      const empty = document.createElement('span'); empty.className = 'empty-command'; empty.textContent = 'Belum ada perintah…'; list.appendChild(empty);
    } else {
      commands.forEach((command, index) => {
        const chip = document.createElement('span');
        chip.className = `command-chip${index === activeCommand ? ' active' : ''}${index === commands.length - 1 && !mazeRunning ? ' command-new' : ''}`;
        chip.title = `Langkah ${index + 1}: gerak ke ${directionNames[command]}`;
        const number = document.createElement('span');
        number.className = 'command-step-number';
        number.textContent = String(index + 1).padStart(2, '0');
        const arrow = document.createElement('span');
        arrow.className = 'command-step-arrow';
        arrow.textContent = arrows[command];
        chip.append(number, arrow);
        list.appendChild(chip);
      });
    }
  }

  function resetRobot() {
    robot = { ...start };
    trail = [`${start.x},${start.y}`];
    activeCommand = -1;
  }
  function setMazeMessage(message, type = '') {
    mazeStatus.textContent = message;
    mazeStatus.style.color = type === 'success' ? 'var(--green)' : type === 'error' ? 'var(--danger)' : 'var(--muted)';
  }
  function setMazeRunning(running) {
    mazeRunning = running;
    mazeControls.forEach(control => { control.disabled = running || mazeCompleted; });
    grid.classList.toggle('is-running', running);
  }

  document.querySelectorAll('[data-dir]').forEach(button => button.addEventListener('click', () => {
    if (mazeRunning || mazeCompleted) return;
    if (commands.length >= 10) { setMazeMessage('Maksimal 10 instruksi. Urungkan atau hapus beberapa perintah.'); return; }
    commands.push(button.dataset.dir);
    button.classList.remove('command-added');
    void button.offsetWidth;
    button.classList.add('command-added');
    window.setTimeout(() => button.classList.remove('command-added'), 460);
    button.blur();
    resetRobot();
    renderMaze();
    setMazeMessage(`Perintah ${arrows[button.dataset.dir]} ditambahkan. Susun urutannya sampai ke bendera.`);
  }));
  document.getElementById('undoCommand').addEventListener('click', () => {
    if (mazeRunning || mazeCompleted) return;
    commands.pop(); resetRobot(); renderMaze(); setMazeMessage('Perintah terakhir diurungkan. Susun kembali langkahmu.');
  });
  document.getElementById('clearCommands').addEventListener('click', () => {
    if (mazeRunning || mazeCompleted) return;
    commands = []; resetRobot(); renderMaze(); setMazeMessage('Semua instruksi dihapus. Kamu bisa mulai menyusun dari awal.');
  });

  document.getElementById('runMaze').addEventListener('click', async () => {
    if (mazeRunning || mazeCompleted) return;
    if (!commands.length) { setMazeMessage('Tambahkan instruksi terlebih dahulu.', 'error'); return; }
    resetRobot();
    renderMaze();
    setMazeRunning(true);
    setMazeMessage('Robot sedang membaca instruksi. Perhatikan gerakannya satu per satu!');

    for (let i = 0; i < commands.length; i++) {
      await sleep(560);
      const direction = commands[i];
      const [dx, dy] = delta[direction];
      const next = { x: robot.x + dx, y: robot.y + dy };
      activeCommand = i;
      renderMaze();
      const directionButton = document.querySelector(`[data-dir="${direction}"]`);
      directionButton.classList.remove('executing');
      void directionButton.offsetWidth;
      directionButton.classList.add('executing');
      window.setTimeout(() => directionButton.classList.remove('executing'), 420);
      directionButton.blur();

      if (next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows) {
        renderMaze();
        setMazeRunning(false);
        setMazeMessage('Belum berhasil. Ada langkah yang membuat robot keluar dari jalur. Susun ulang perintah dan coba lagi.', 'error');
        return;
      }
      if (walls.has(`${next.x},${next.y}`)) {
        renderMaze();
        setMazeRunning(false);
        setMazeMessage('Belum berhasil. Robot menabrak penghalang. Periksa kembali susunan perintahmu dan coba lagi.', 'error');
        return;
      }

      robot = next;
      trail.push(`${robot.x},${robot.y}`);
      renderMaze();
      setMazeMessage(`Langkah ${i + 1} dari ${commands.length}: robot bergerak ${directionNames[direction]}.`);
    }

    activeCommand = -1;
    renderMaze();
    const reachedGoal = robot.x === goal.x && robot.y === goal.y;
    setMazeRunning(false);
    if (reachedGoal) {
      mazeCompleted = true;
      setMazeRunning(false);
      setMazeMessage('Berhasil! Robot tiba di perpustakaan. Urutan perintahmu membawa robot melewati petak yang aman tanpa menabrak rintangan. 🎉', 'success');
      app.markMissionDone('route', commands.slice());
    } else {
      setMazeMessage('Belum berhasil. Robot belum sampai di tujuan. Susun kembali langkah-langkahmu dan coba lagi.', 'error');
    }
  });
  renderMaze();


  if (app.progress.missions.route && Array.isArray(app.progress.missionAnswers?.route)) {
    commands = app.progress.missionAnswers.route.slice();
    resetRobot();
    let valid = true;
    for (const direction of commands) {
      const movement = delta[direction];
      if (!movement) { valid = false; break; }
      const next = { x: robot.x + movement[0], y: robot.y + movement[1] };
      if (next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows || walls.has(`${next.x},${next.y}`)) { valid = false; break; }
      robot = next;
      trail.push(`${robot.x},${robot.y}`);
    }
    if (valid && robot.x === goal.x && robot.y === goal.y) {
      renderMaze();
      mazeCompleted = true;
      setMazeRunning(false);
      setMazeMessage('Jawaban benar tersimpan. Robot telah mencapai perpustakaan.', 'success');
    } else {
      commands = []; resetRobot(); renderMaze();
    }
  } else if (app.progress.missions.route) {
    mazeCompleted = true;
    setMazeRunning(false);
    setMazeMessage('Misi ini sudah pernah diselesaikan. Jawaban terkunci. Gunakan Reset Misi untuk mengulang dari awal.', 'success');
  }
  if (mazeCompleted) setMazeRunning(false);

    // MISI 2 — Gelang warna-warni sesuai aktivitas buku siswa.
  const beads = [
    { key: 'M', name: 'Merah', color: 'red', amount: 5 },
    { key: 'H', name: 'Hijau', color: 'green', amount: 3 },
    { key: 'K', name: 'Kuning', color: 'yellow', amount: 7 },
    { key: 'B', name: 'Biru', color: 'blue', amount: 2 }
  ];
  function makeBracelet(stockOverride = null) {
    const remaining = Object.fromEntries(beads.map(bead => [bead.key, stockOverride ? stockOverride[bead.key] : bead.amount]));
    const sequence = [];
    let last = null;
    let changed = true;
    while (changed) {
      changed = false;
      for (const bead of beads) {
        if (remaining[bead.key] > 0 && bead.key !== last) {
          sequence.push(bead);
          remaining[bead.key]--;
          last = bead.key;
          changed = true;
        }
      }
    }
    return { sequence, remaining };
  }
  const braceletResult = makeBracelet();
  const bonusResult = makeBracelet({ M: 20, H: 23, K: 18, B: 22 });
  const bracelet = braceletResult.sequence;
  const bonusBracelet = bonusResult.sequence;

  document.querySelectorAll('#beadOptions button').forEach(button => button.addEventListener('click', () => {
    const correct = Number(button.dataset.answer) === bracelet.length;
    setChoiceState('#beadOptions', button, correct);
    const feedback = document.getElementById('beadFeedback');
    if (correct) {
      feedback.className = 'feedback success';
      feedback.textContent = `Benar, jawabannya ${bracelet.length}. Alasannya: dua putaran pertama memakai M-H-K-B (8 manik-manik). Setelah biru habis, urutan berlanjut M-H-K, lalu M-K dan M-K. Ketika merah habis, dua kuning yang tersisa tidak bisa dipasang berurutan karena warna yang sama tidak boleh berdampingan. Jadi jumlah yang dapat dirangkai adalah 15.`;
      document.getElementById('showBeads').hidden = false;
      lockChoiceGroup('#beadOptions');
      app.markMissionDone('pattern', button.dataset.answer);
    } else {
      feedback.className = 'feedback error';
      feedback.textContent = 'Belum tepat. Coba lagi, periksa aturan tantangan, lalu pilih jawaban yang menurutmu paling sesuai.';
      document.getElementById('showBeads').hidden = true;
      document.getElementById('beadSequence').hidden = true;
    }
  }));

  document.getElementById('showBeads').addEventListener('click', () => {
    const sequence = document.getElementById('beadSequence');
    sequence.innerHTML = '';
    bracelet.forEach((bead, index) => {
      const dot = document.createElement('span');
      dot.className = `bead ${bead.color} bead-reveal-dot`;
      dot.title = `${index + 1}. ${bead.name}`;
      dot.style.animationDelay = `${index * 35}ms`;
      sequence.appendChild(dot);
    });
    sequence.hidden = false;
  });

  document.querySelectorAll('#beadBonusOptions button').forEach(button => button.addEventListener('click', () => {
    const feedback = document.getElementById('beadBonusFeedback');
    const correct = Number(button.dataset.answer) === bonusBracelet.length;
    setChoiceState('#beadBonusOptions', button, correct);
    if (correct) {
      feedback.className = 'feedback success';
      feedback.textContent = `Tepat, jawabannya ${bonusBracelet.length}. Alasannya: seluruh stok berjumlah 20 + 23 + 18 + 22 = 83 manik-manik. Dengan mengikuti urutan warna dan melewati warna yang sudah habis, tidak ada dua warna sama yang berdampingan dan seluruh 83 manik-manik dapat digunakan.`;
      lockChoiceGroup('#beadBonusOptions');
      app.markMissionDone('patternBonus', button.dataset.answer);
    } else {
      feedback.className = 'feedback error';
      feedback.textContent = 'Belum tepat. Coba lagi dan periksa kembali pilihanmu berdasarkan aturan yang tersedia.';
    }
  }));

  // MISI 5 — Optimasi penjadwalan: membagi pekerjaan ke dua pancuran.
  document.querySelectorAll('#bucketOptions button').forEach(button => button.addEventListener('click', () => {
    const feedback = document.getElementById('bucketFeedback');
    const correct = Number(button.dataset.answer) === 90;
    setChoiceState('#bucketOptions', button, correct);
    if (correct) {
      feedback.className = 'feedback success';
      feedback.textContent = 'Tepat, 90 menit! Contoh pembagian waktunya: menit 0–30, pancuran mengisi ember A dan B; menit 30–60, mengisi A dan C; menit 60–90, mengisi B dan C. Setiap ember mendapat total 60 menit pengisian. Dua pancuran bekerja secara paralel sehingga pekerjaan selesai lebih cepat.';
      lockChoiceGroup('#bucketOptions');
      app.markMissionDone('schedule', button.dataset.answer);
    } else {
      feedback.className = 'feedback error';
      feedback.textContent = 'Belum tepat. Belum menyerah, ya! Coba pilih kemungkinan lain.';
    }
  }));

  // MISI 6 — representasi data dengan jawaban biner ya/tidak.
  document.querySelectorAll('#yesNoOptions button').forEach(button => button.addEventListener('click', () => {
    const feedback = document.getElementById('yesNoFeedback');
    const correct = button.dataset.choice === 'c';
    setChoiceState('#yesNoOptions', button, correct);
    if (correct) {
      feedback.className = 'feedback success';
      feedback.textContent = 'Benar! “Apakah hari ini turun hujan?” hanya memiliki dua kemungkinan jawaban: ya atau tidak. Pertanyaan tentang warna kesukaan, nama teman, atau jumlah buku memiliki lebih banyak kemungkinan jawaban.';
      lockChoiceGroup('#yesNoOptions');
      app.markMissionDone('representation', button.dataset.choice);
    } else {
      feedback.className = 'feedback error';
      feedback.textContent = 'Belum tepat. Coba lagi dan periksa pilihan yang lain.';
    }
  }));

  // MISI 4 — Debugging algoritma mencuci tangan.
  const correctSteps = [
    'Basahi tangan dengan air',
    'Gunakan sabun',
    'Gosok seluruh bagian tangan',
    'Bilas hingga bersih',
    'Keringkan tangan'
  ];
  const stepReasons = [
    'Tangan dibasahi terlebih dahulu agar sabun mudah diratakan ke seluruh permukaan.',
    'Sabun digunakan setelah tangan basah supaya dapat membantu membersihkan kotoran.',
    'Sabun perlu digosok ke telapak, punggung tangan, sela-sela jari, dan bagian lain sebelum dibilas.',
    'Pembilasan dilakukan setelah digosok agar sabun dan kotoran terangkat oleh air.',
    'Tangan dikeringkan setelah dibilas agar urutan mencuci tangan selesai dengan benar.'
  ];
  const shuffledSteps = [correctSteps[3], correctSteps[0], correctSteps[4], correctSteps[2], correctSteps[1]];
  let debugIndex = 0;
  let debugCompleted = false;
  function renderDebug() {
    const options = document.getElementById('debugOptions');
    options.innerHTML = '';
    shuffledSteps.forEach(step => {
      const button = document.createElement('button');
      button.textContent = step;
      button.disabled = correctSteps.slice(0, debugIndex).includes(step);
      if (button.disabled) button.classList.add('is-correct');
      button.addEventListener('click', () => chooseDebugStep(step));
      options.appendChild(button);
    });
    const answer = document.getElementById('debugAnswer');
    answer.innerHTML = '';
    if (!debugIndex) {
      const placeholder = document.createElement('li');
      placeholder.className = 'placeholder-step';
      placeholder.textContent = 'Langkah yang dipilih akan muncul di sini.';
      answer.appendChild(placeholder);
    } else {
      correctSteps.slice(0, debugIndex).forEach((step, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${index + 1}. ${step}</strong><small>${stepReasons[index]}</small>`;
        answer.appendChild(li);
      });
    }
    document.getElementById('debugProgress').textContent = `${debugIndex} dari 5 langkah benar`;
    document.getElementById('debugBar').style.width = `${debugIndex / 5 * 100}%`;
  }
  function chooseDebugStep(step) {
    if (debugCompleted) return;
    const feedback = document.getElementById('debugFeedback');
    if (step === correctSteps[debugIndex]) {
      const reason = stepReasons[debugIndex];
      debugIndex++;
      feedback.className = 'feedback success';
      feedback.textContent = `Benar! ${reason}`;
      renderDebug();
      if (debugIndex === 5) {
        debugCompleted = true;
        document.getElementById('resetDebug').disabled = true;
        feedback.textContent += ' Seluruh urutan sudah benar, sehingga algoritma mencuci tangan berhasil diperbaiki.';
        app.markMissionDone('debug', correctSteps.slice());
      }
    } else {
      const wrongButton = [...document.querySelectorAll('#debugOptions button')].find(button => button.textContent === step);
      if (wrongButton) wrongButton.classList.add('is-wrong');
      feedback.className = 'feedback error';
      feedback.textContent = 'Belum tepat. Langkah itu belum sesuai dengan urutan yang dibutuhkan. Silakan coba pilihan lain.';
    }
  }
  function resetDebug(force = false) {
    if (debugCompleted && !force) return;
    debugCompleted = false;
    document.getElementById('resetDebug').disabled = false;
    debugIndex = 0;
    document.getElementById('debugFeedback').textContent = '';
    document.getElementById('debugFeedback').className = 'feedback';
    renderDebug();
  }
  document.getElementById('resetDebug').addEventListener('click', resetDebug);
  renderDebug();

  // MISI 2 & 3 — permainan navigasi robot dengan aturan yang sama seperti Misi 1.
  function createRouteChallenge(root, config) {
    if (!root) return;
    const grid = root.querySelector('[data-maze-grid]');
    const status = root.querySelector('[data-maze-status]');
    const count = root.querySelector('[data-maze-count]');
    const list = root.querySelector('[data-maze-list]');
    const directionButtons = [...root.querySelectorAll('[data-maze-dir]')];
    const undo = root.querySelector('[data-maze-undo]');
    const clear = root.querySelector('[data-maze-clear]');
    const run = root.querySelector('[data-maze-run]');
    const rows = 5, cols = 5, maxCommands = 12;
    const directions = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] };
    const arrows = { U: '↑', D: '↓', L: '←', R: '→' };
    const names = { U: 'atas', D: 'bawah', L: 'kiri', R: 'kanan' };
    const blocked = new Set(config.walls.map(([x, y]) => `${x},${y}`));
    let commands = [];
    let robot = { ...config.start };
    let trail = [`${robot.x},${robot.y}`];
    let active = -1;
    let running = false;
    let completed = Boolean(app.progress.missions[config.key]);
    const controls = [...directionButtons, undo, clear, run];

    function say(message, kind = '') {
      status.textContent = message;
      status.style.color = kind === 'success' ? 'var(--green)' : kind === 'error' ? 'var(--danger)' : 'var(--muted)';
    }
    function render() {
      grid.innerHTML = '';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const key = `${x},${y}`;
          const cell = document.createElement('div');
          cell.className = 'maze-cell';
          if (blocked.has(key)) { cell.classList.add('wall'); cell.textContent = '▪'; }
          if (x === config.start.x && y === config.start.y) cell.classList.add('start');
          if (x === config.goal.x && y === config.goal.y) { cell.classList.add('goal'); cell.textContent = '⚑'; }
          if (trail.includes(key) && !(x === robot.x && y === robot.y)) cell.classList.add('robot-trail');
          if (x === robot.x && y === robot.y) { cell.classList.add('robot'); cell.textContent = '🤖'; }
          grid.appendChild(cell);
        }
      }
      count.textContent = `${commands.length} / ${maxCommands}`;
      list.innerHTML = '';
      if (!commands.length) {
        const empty = document.createElement('span'); empty.className = 'empty-command'; empty.textContent = 'Belum ada perintah…'; list.appendChild(empty);
      } else {
        commands.forEach((direction, index) => {
          const chip = document.createElement('span');
          chip.className = `command-chip${index === active ? ' active' : ''}${index === commands.length - 1 && !running ? ' command-new' : ''}`;
          const number = document.createElement('span'); number.className = 'command-step-number'; number.textContent = String(index + 1).padStart(2, '0');
          const arrow = document.createElement('span'); arrow.className = 'command-step-arrow'; arrow.textContent = arrows[direction];
          chip.append(number, arrow); list.appendChild(chip);
        });
      }
    }
    function resetRobot() {
      robot = { ...config.start };
      trail = [`${robot.x},${robot.y}`];
      active = -1;
    }
    function resetChallenge() {
      if (running) return false;
      completed = false;
      commands = [];
      resetRobot();
      render();
      setRunning(false);
      say('Tantangan direset. Susun kembali instruksi dari awal.');
      return true;
    }
    function restoreSavedChallenge() {
      if (!app.progress.missions[config.key]) return;
      const savedCommands = app.progress.missionAnswers?.[config.key];
      if (!Array.isArray(savedCommands)) {
        say('Misi ini sudah pernah diselesaikan. Progres tersimpan di perangkat ini.', 'success');
        return;
      }
      commands = savedCommands.slice();
      resetRobot();
      for (const direction of commands) {
        const movement = directions[direction];
        if (!movement) { resetRobot(); commands = []; render(); return; }
        const next = { x: robot.x + movement[0], y: robot.y + movement[1] };
        if (next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows || blocked.has(`${next.x},${next.y}`)) {
          resetRobot(); commands = []; render(); return;
        }
        robot = next;
        trail.push(`${robot.x},${robot.y}`);
      }
      render();
      if (robot.x === config.goal.x && robot.y === config.goal.y) {
        completed = true;
        setRunning(false);
        say(`Jawaban benar tersimpan. Robot telah mencapai ${config.destination}.`, 'success');
      }
      else { resetRobot(); commands = []; render(); }
    }
    missionResetters.push(resetChallenge);
    function setRunning(value) {
      running = value;
      controls.forEach(control => { control.disabled = running || completed; });
      grid.classList.toggle('is-running', running);
    }
    directionButtons.forEach(button => button.addEventListener('click', () => {
      if (running || completed) return;
      if (commands.length >= maxCommands) { say('Maksimal 12 instruksi. Urungkan atau hapus beberapa perintah.'); return; }
      commands.push(button.dataset.mazeDir);
      button.classList.remove('command-added');
      void button.offsetWidth;
      button.classList.add('command-added');
      window.setTimeout(() => button.classList.remove('command-added'), 460);
      button.blur();
      resetRobot(); render();
      say(`Perintah ${arrows[button.dataset.mazeDir]} ditambahkan.`);
    }));
    undo.addEventListener('click', () => {
      if (running || completed) return;
      commands.pop(); resetRobot(); render(); say('Perintah terakhir diurungkan.');
    });
    clear.addEventListener('click', () => {
      if (running || completed) return;
      commands = []; resetRobot(); render(); say('Semua perintah dihapus. Mulai susun jalur dari awal.');
    });
    run.addEventListener('click', async () => {
      if (running || completed) return;
      if (!commands.length) { say('Tambahkan perintah terlebih dahulu.', 'error'); return; }
      resetRobot(); render(); setRunning(true); say('Robot sedang menjalankan perintah satu per satu.');
      for (let index = 0; index < commands.length; index++) {
        await sleep(540);
        const direction = commands[index];
        const [dx, dy] = directions[direction];
        const next = { x: robot.x + dx, y: robot.y + dy };
        active = index; render();
        const button = root.querySelector(`[data-maze-dir="${direction}"]`);
        button.classList.remove('executing'); void button.offsetWidth; button.classList.add('executing');
        window.setTimeout(() => button.classList.remove('executing'), 420);
        button.blur();
        if (next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows || blocked.has(`${next.x},${next.y}`)) {
          setRunning(false);
          say('Belum berhasil. Robot tidak dapat melewati langkah tersebut. Susun ulang perintah dan coba lagi.', 'error');
          return;
        }
        robot = next; trail.push(`${robot.x},${robot.y}`); render();
        say(`Langkah ${index + 1} dari ${commands.length}: robot bergerak ${names[direction]}.`);
      }
      active = -1; render();
      const reached = robot.x === config.goal.x && robot.y === config.goal.y;
      setRunning(false);
      if (reached) {
        completed = true;
        setRunning(false);
        say(`Berhasil! Robot tiba di ${config.destination}. Hebat!`, 'success');
        app.markMissionDone(config.key, commands.slice());
      } else {
        say('Belum berhasil. Robot belum sampai di tujuan. Periksa kembali susunan perintahmu dan coba lagi.', 'error');
      }
    });
    render();
    restoreSavedChallenge();
    if (completed) setRunning(false);
  }

  function resetMissionChoiceGroup(selector, feedbackId) {
    const container = document.querySelector(selector);
    if (container) container.querySelectorAll('button').forEach(button => {
      button.classList.remove('selected', 'is-correct', 'is-wrong');
      button.setAttribute('aria-pressed', 'false');
      button.disabled = false;
    });
    const feedback = document.getElementById(feedbackId);
    if (feedback) { feedback.className = 'feedback'; feedback.textContent = ''; }
  }

  function restoreMissionChoice(selector, feedbackId, key, fallback, message) {
    if (!app.progress.missions[key]) return;
    const container = document.querySelector(selector);
    const answer = String(app.progress.missionAnswers?.[key] ?? fallback);
    const button = container && [...container.querySelectorAll('button')].find(item => item.dataset.answer === answer || item.dataset.choice === answer);
    if (button) setChoiceState(selector, button, true);
    lockChoiceGroup(selector);
    const feedback = document.getElementById(feedbackId);
    if (feedback) { feedback.className = 'feedback success'; feedback.textContent = `Jawaban benar tersimpan. ${message}`; }
  }

  function resetAllMissions() {
    if (mazeRunning || document.querySelector('.maze-grid.is-running')) return false;
    commands = [];
    mazeCompleted = false;
    setMazeRunning(false);
    resetRobot();
    renderMaze();
    setMazeMessage('Misi direset. Susun instruksi dari awal.', '');

    resetMissionChoiceGroup('#beadOptions', 'beadFeedback');
    document.getElementById('showBeads').hidden = true;
    document.getElementById('beadSequence').hidden = true;
    document.getElementById('beadSequence').innerHTML = '';
    resetMissionChoiceGroup('#beadBonusOptions', 'beadBonusFeedback');
    resetMissionChoiceGroup('#bucketOptions', 'bucketFeedback');
    resetMissionChoiceGroup('#yesNoOptions', 'yesNoFeedback');
    resetDebug(true);
    missionResetters.forEach(reset => reset());
    return true;
  }

  // Pulihkan jawaban dan penanda benar dari penyimpanan lokal setelah refresh.
  restoreMissionChoice('#beadOptions', 'beadFeedback', 'pattern', String(bracelet.length), `Jumlah manik-manik yang dapat dirangkai adalah ${bracelet.length}.`);
  if (app.progress.missions.pattern) document.getElementById('showBeads').hidden = false;
  restoreMissionChoice('#beadBonusOptions', 'beadBonusFeedback', 'patternBonus', String(bonusBracelet.length), `Seluruh ${bonusBracelet.length} manik-manik dapat digunakan sesuai aturan urutan warna.`);
  restoreMissionChoice('#bucketOptions', 'bucketFeedback', 'schedule', '90', 'Waktu tercepat untuk mengisi ketiga ember adalah 90 menit.');
  restoreMissionChoice('#yesNoOptions', 'yesNoFeedback', 'representation', 'c', 'Pertanyaan tersebut hanya memiliki jawaban ya atau tidak.');
  if (app.progress.missions.debug) {
    debugIndex = correctSteps.length;
    debugCompleted = true;
    document.getElementById('resetDebug').disabled = true;
    renderDebug();
    const feedback = document.getElementById('debugFeedback');
    feedback.className = 'feedback success';
    feedback.textContent = 'Jawaban benar tersimpan. Seluruh lima langkah sudah tersusun dalam urutan yang tepat.';
  }

  window.MisiGame = { resetAll: resetAllMissions };

  document.querySelectorAll('[data-maze-game="routeCampus"]').forEach(root => createRouteChallenge(root, {
    key: 'routeCampus', destination: 'gudang olahraga', start: { x: 0, y: 0 }, goal: { x: 4, y: 4 },
    walls: [[1,0],[2,0],[3,0],[2,1],[0,3],[1,3],[2,3],[4,2]]
  }));
  document.querySelectorAll('[data-maze-game="routeMusic"]').forEach(root => createRouteChallenge(root, {
    key: 'routeMusic', destination: 'ruang musik', start: { x: 0, y: 4 }, goal: { x: 4, y: 0 },
    walls: [[0,3],[1,3],[3,4],[4,4],[1,2],[3,1],[2,1],[0,1]]
  }));
})();
