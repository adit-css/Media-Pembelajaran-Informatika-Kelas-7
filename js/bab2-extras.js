(() => {
  'use strict';
  const data = window.MisiBab2Extras;
  const app = window.MisiApp;
  if (!data || !app) return;

  const missionKeys = ['bab2SecretWord', 'bab2ParallelPlan'];
  const practiceKeys = ['bab2Effective', 'bab2Dependency', 'bab2OrderedList', 'bab2UnorderedList', 'bab2SecretChain', 'bab2ParallelWork', 'bab2YesNo'];

  function missionPanel(task, index) {
    const key = missionKeys[index];
    const done = Boolean(app.progress.missions[key]);
    if (index === 0) {
      const letters = ['P','K','A','O','S','I','M','U','T'];
      const answer = done ? 'KOMPUTASI'.split('') : [];
      return `<article class="mission-panel bab2-extra-game-panel ${done?'is-complete':''}" id="mission-${key}">
        <div class="mission-heading"><div><span class="pill pill-violet">MISI 09 · PUZZLE KATA RAHASIA</span><h2>Rangkai kata rahasia</h2><p>Xixi mengirim sembilan kartu huruf. Setiap kartu harus disusun mengikuti hubungan huruf bawah ke huruf atas. Temukan kata yang tersembunyi!</p></div><div class="mission-score"><strong>09</strong><small>WORD QUEST</small></div></div>
        <div class="bab2-word-game" data-bab2-word-game="${key}">
          <div class="bab2-game-instruction"><span>🧩</span><div><b>TARGET: TEMUKAN KATA RAHASIA</b><small>Pilih kepingan huruf satu per satu. Jika urutan belum pas, coba susun ulang.</small></div></div>
          <div class="bab2-word-slots" data-bab2-word-slots>${Array.from({length:9},(_,i)=>`<span class="bab2-word-slot ${done?'filled':''}">${done?answer[i]:String(i+1).padStart(2,'0')}</span>`).join('')}</div>
          <div class="bab2-letter-tray">${letters.map((letter,i)=>`<button type="button" class="bab2-letter-tile" data-bab2-word-letter="${letter}" data-bab2-letter-index="${i}" ${done?'disabled':''}>${letter}</button>`).join('')}</div>
          <div class="bab2-game-feedback" data-bab2-word-feedback aria-live="polite">${done?`✓ Kata berhasil ditemukan. ${task.explain}`:'Kumpulkan sembilan huruf pada slot di atas.'}</div>
          <button type="button" class="btn btn-ghost btn-small" data-bab2-word-reset ${done?'hidden':''}>↻ Susun ulang</button>
        </div>
      </article>`;
    }
    const steps=[
      {key:'download',label:'Mulai unduhan',detail:'Video pembelajaran · 10 menit',icon:'⬇️'},
      {key:'read',label:'Baca instruksi sambil menunggu',detail:'Petunjuk tugas · 5 menit',icon:'📖'},
      {key:'summary',label:'Tulis rangkuman',detail:'Rangkuman materi · 15 menit',icon:'✍️'}
    ];
    const tileOrder=['summary','download','read'];
    return `<article class="mission-panel bab2-extra-game-panel ${done?'is-complete':''}" id="mission-${key}">
      <div class="mission-heading"><div><span class="pill pill-orange">MISI 10 · TIME STRATEGY</span><h2>Atur jadwal tanpa membuang waktu</h2><p>Rani memiliki tiga tugas. Unduhan dapat berjalan saat ia membaca instruksi, tetapi rangkuman baru bisa ditulis setelah instruksi dipahami.</p></div><div class="mission-score"><strong>10</strong><small>TIME QUEST</small></div></div>
      <div class="bab2-schedule-game" data-bab2-schedule-game="${key}">
        <div class="bab2-game-instruction"><span>⏱️</span><div><b>TARGET: SUSUN JADWAL PALING EFISIEN</b><small>Susun aktivitas dalam urutan yang memungkinkan pekerjaan berjalan paralel.</small></div></div>
        <div class="bab2-schedule-slots" data-bab2-schedule-slots>${Array.from({length:3},(_,i)=>`<div class="bab2-schedule-slot"><small>LANGKAH ${i+1}</small><b>${done?steps[i].label:'Pilih kartu aktivitas'}</b></div>`).join('')}</div>
        <div class="bab2-schedule-tray">${tileOrder.map((keyName,i)=>{const step=steps.find(x=>x.key===keyName);return `<button type="button" class="bab2-schedule-tile" data-bab2-schedule-step="${step.key}" ${done?'disabled':''}><span>${step.icon}</span><b>${step.label}</b><small>${step.detail}</small></button>`;}).join('')}</div>
        <div class="bab2-game-feedback" data-bab2-schedule-feedback aria-live="polite">${done?`✓ Jadwal berhasil disusun. ${task.explain}`:'Klik aktivitas sesuai urutan yang paling efisien.'}</div>
        <button type="button" class="btn btn-ghost btn-small" data-bab2-schedule-reset ${done?'hidden':''}>↻ Atur ulang</button>
      </div>
    </article>`;
  }

  function practiceCard(task, index) {
    const key = practiceKeys[index];
    const done = Boolean(app.progress.practice[key]);
    const selected = app.progress.practiceAnswers?.[key];
    return `<article class="practice-card bab2-extra-practice-card ${done?'is-complete':''}"><div class="practice-number">${String(index+9).padStart(2,'0')}</div><div class="practice-content"><span class="pill pill-violet">LATIHAN BAB 2</span><h2>${task.title.replace(/^Latihan \d+ · /,'')}</h2><p>${task.prompt}</p><div class="choice-stack" data-bab2-extra-practice-options="${key}">${task.options.map((option, optionIndex)=>`<button type="button" data-bab2-extra-practice-answer="${key}" data-option="${optionIndex}" ${done?'disabled':''} class="${done&&optionIndex===task.correct?'is-correct':''} ${done&&Number(selected)===optionIndex?'selected':''}">${option}</button>`).join('')}</div><div class="feedback ${done?'success':''}" data-bab2-extra-practice-feedback="${key}" aria-live="polite">${done?`Benar! ${task.explain}`:''}</div></div></article>`;
  }

  function render() {
    const missionRoot = document.getElementById('bab2MissionExtras');
    const practiceRoot = document.getElementById('bab2PracticeExtras');
    if (missionRoot) {
      const tabs = data.missions.map((task,index)=>{
        const key=missionKeys[index];
        return `<button type="button" class="mission-tab ${app.progress.missions[key]?'is-complete':''}" data-bab2-extra-mission-tab="${key}" data-mission="${key}"><span>${String(index+9).padStart(2,'0')}</span> ${task.title.replace(/^Misi \d+ · /,'')}</button>`;
      }).join('');
      missionRoot.innerHTML = `<div class="mission-tabs bab2-extra-tabs" role="tablist" aria-label="Misi tambahan Bab 2">${tabs}</div>${data.missions.map(missionPanel).join('')}`;
      const activeTab = document.querySelector('.mission-tab.active');
      const activeKey = activeTab?.dataset.mission;
      missionRoot.querySelectorAll('.mission-panel').forEach(panel=>panel.classList.toggle('active',panel.id===`mission-${activeKey}`));
      missionRoot.querySelectorAll('.mission-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.mission===activeKey));
    }
    if (practiceRoot) {
      // Sisipkan tujuh latihan tambahan langsung setelah delapan latihan awal.
      // Tidak ada heading/subbagian terpisah agar seluruh 15 latihan terbaca sebagai satu rangkaian.
      const stack = document.querySelector('#legacy-bab2-latihan .practice-stack');
      if (stack && practiceRoot.parentElement !== stack) stack.appendChild(practiceRoot);
      practiceRoot.className = 'bab2-extra-practice-inline';
      practiceRoot.innerHTML = data.practice.map(practiceCard).join('');
    }
  }

  function colorWrong(button, options, feedback) {
    options.querySelectorAll('button').forEach(item=>item.classList.remove('is-wrong','selected'));
    button.classList.add('is-wrong','selected');
    feedback.className='feedback error';
    feedback.textContent='Belum tepat. Coba periksa kembali aturan pada soal dan pilih jawaban lain.';
  }

  document.addEventListener('click', event => {
    const target=event.target.closest('button');
    if(!target)return;

    if(target.dataset.bab2ExtraMissionTab){
      app.showMission(target.dataset.bab2ExtraMissionTab,true);
      return;
    }
    if(target.dataset.bab2WordLetter!==undefined){
      const key='bab2SecretWord';if(app.progress.missions[key])return;
      const root=target.closest('[data-bab2-word-game]');const feedback=root?.querySelector('[data-bab2-word-feedback]');
      const chosen=Array.from(root.querySelectorAll('.bab2-word-slot.filled')).map(x=>x.textContent).join('');
      const answer='KOMPUTASI';const expected=answer[chosen.length];
      if(target.dataset.bab2WordLetter!==expected){target.classList.add('is-wrong');if(feedback){feedback.className='bab2-game-feedback error';feedback.textContent='Belum pas. Coba kepingan huruf lain.';}window.setTimeout(()=>target.classList.remove('is-wrong'),500);return;}
      target.disabled=true;target.classList.add('is-used');
      const slots=root.querySelectorAll('.bab2-word-slot');slots[chosen.length].textContent=expected;slots[chosen.length].classList.add('filled','pop-in');
      if(chosen.length+1===answer.length){if(feedback){feedback.className='bab2-game-feedback success';feedback.textContent='Kata berhasil ditemukan! '+data.missions[0].explain;}app.markMissionDone(key,answer);render();}
      else if(feedback){feedback.className='bab2-game-feedback';feedback.textContent=`${chosen.length+1} dari ${answer.length} huruf berhasil dirangkai.`;}
      return;
    }
    if(target.dataset.bab2WordReset!==undefined){
      const root=target.closest('[data-bab2-word-game]');root?.querySelectorAll('.bab2-word-slot').forEach((slot,i)=>{slot.textContent=String(i+1).padStart(2,'0');slot.classList.remove('filled','pop-in');});root?.querySelectorAll('.bab2-letter-tile').forEach(tile=>{tile.disabled=false;tile.classList.remove('is-used','is-wrong');});const f=root?.querySelector('[data-bab2-word-feedback]');if(f){f.className='bab2-game-feedback';f.textContent='Kumpulkan sembilan huruf pada slot di atas.';}return;
    }
    if(target.dataset.bab2ScheduleStep!==undefined){
      const key='bab2ParallelPlan';if(app.progress.missions[key])return;
      const root=target.closest('[data-bab2-schedule-game]');const feedback=root?.querySelector('[data-bab2-schedule-feedback]');
      const expected=['download','read','summary'];
      const selected=Array.from(root.querySelectorAll('.bab2-schedule-slot[data-filled]')).map(x=>x.dataset.filled);
      const next=expected[selected.length];
      if(target.dataset.bab2ScheduleStep!==next){root?.querySelectorAll('.bab2-schedule-slot').forEach(slot=>{slot.removeAttribute('data-filled');slot.querySelector('b').textContent='Pilih kartu aktivitas';});root?.querySelectorAll('.bab2-schedule-tile').forEach(tile=>{tile.disabled=false;tile.classList.remove('is-used','is-wrong');});target.classList.add('is-wrong');if(feedback){feedback.className='bab2-game-feedback error';feedback.textContent='Jadwal belum tepat. Coba susun lagi dari awal.';}window.setTimeout(()=>target.classList.remove('is-wrong'),500);return;}
      const step=target.dataset.bab2ScheduleStep;const stepIndex=selected.length;const slot=root.querySelectorAll('.bab2-schedule-slot')[stepIndex];const label=target.querySelector('b').textContent;slot.dataset.filled=step;slot.querySelector('b').textContent=label;target.disabled=true;target.classList.add('is-used');
      if(stepIndex+1===expected.length){if(feedback){feedback.className='bab2-game-feedback success';feedback.textContent='Jadwal berhasil disusun! '+data.missions[1].explain;}app.markMissionDone(key,expected.join('|'));render();}
      else if(feedback){feedback.className='bab2-game-feedback';feedback.textContent=`${stepIndex+1} dari ${expected.length} aktivitas tersusun.`;}
      return;
    }
    if(target.dataset.bab2ScheduleReset!==undefined){
      const root=target.closest('[data-bab2-schedule-game]');root?.querySelectorAll('.bab2-schedule-slot').forEach(slot=>{slot.removeAttribute('data-filled');slot.querySelector('b').textContent='Pilih kartu aktivitas';});root?.querySelectorAll('.bab2-schedule-tile').forEach(tile=>{tile.disabled=false;tile.classList.remove('is-used','is-wrong');});const f=root?.querySelector('[data-bab2-schedule-feedback]');if(f){f.className='bab2-game-feedback';f.textContent='Klik aktivitas sesuai urutan yang paling efisien.';}return;
    }
    if(target.dataset.bab2ExtraPracticeAnswer!==undefined){
      const key=target.dataset.bab2ExtraPracticeAnswer;
      if(app.progress.practice[key])return;
      const task=data.practice[practiceKeys.indexOf(key)];
      const options=document.querySelector(`[data-bab2-extra-practice-options="${key}"]`);
      const feedback=document.querySelector(`[data-bab2-extra-practice-feedback="${key}"]`);
      const selected=Number(target.dataset.option);
      if(selected!==task.correct){colorWrong(target,options,feedback);return;}
      options.querySelectorAll('button').forEach(button=>{button.disabled=true;button.classList.remove('is-wrong');button.classList.toggle('is-correct',button===target);button.classList.toggle('selected',button===target);});
      feedback.className='feedback success';feedback.textContent=`Benar! ${task.explain}`;
      app.markPracticeDone(key,selected);
    }
  });

  render();
  // Terapkan status hijau pada tab Misi tambahan yang sudah selesai sebelum refresh.
  app.saveProgress();
  window.MisiBab2ExtrasUI={render};
})();
