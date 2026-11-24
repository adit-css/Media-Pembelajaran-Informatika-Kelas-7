(() => {
  'use strict';
  const api = window.MisiChapters;
  if (!api?.chapters) return;

  // Five correct answers per letter across each 20-question quiz.
  const answerPositions = [0,2,1,3,3,0,2,1,2,3,1,0,1,2,0,3,0,1,3,2];

  // Soal dan pilihan kuis telah ditinjau ulang. Reset hanya jawaban/hasil kuis lama
  // sekali agar tidak mencampur jawaban dari bank soal sebelumnya; Misi/Latihan tetap aman.
  const contentVersion = 'quiz-bank-reviewed-2026-11';
  try {
    if (localStorage.getItem('misiAlgoritmaQuizContentVersion') !== contentVersion) {
      api.resetQuizAttemptsForContentUpdate?.();
      localStorage.setItem('misiAlgoritmaQuizContentVersion', contentVersion);
      const app = window.MisiApp;
      if (app?.progress) { app.progress.quizScore = null; app.saveProgress?.(); }
    }
  } catch (error) { console.warn('Versi penyimpanan kuis tidak dapat diperbarui:', error); }

  Object.entries(api.chapters).forEach(([chapterId, chapter]) => {
    chapter.quiz.forEach((question, questionIndex) => {
      const oldOptions = [...question.options];
      const oldCorrect = Number(question.correct);
      if (oldOptions.length !== 4 || !Number.isInteger(oldCorrect) || oldCorrect < 0 || oldCorrect > 3) return;

      const target = answerPositions[questionIndex % answerPositions.length];
      const nextOptions = Array(4);
      const oldToNew = {};
      nextOptions[target] = oldOptions[oldCorrect];
      const remaining = oldOptions.map((value, oldIndex) => ({ value, oldIndex })).filter(item => item.oldIndex !== oldCorrect);
      let pointer = 0;
      for (let nextIndex = 0; nextIndex < 4; nextIndex++) {
        if (nextIndex === target) continue;
        const item = remaining[pointer++];
        nextOptions[nextIndex] = item.value;
      }
      question.options = nextOptions;
      question.correct = target;
    });
  });

  api.renderMenu('kuis');
})();
