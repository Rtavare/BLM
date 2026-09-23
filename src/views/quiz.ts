// Quiz view: sticky progress, live trait strip, question card with answers
// (each showing its trait-point chips, as in the original), Back / Quit.

import type { Actions } from '../app';
import { QUESTIONS } from '../data/questions';
import { TRAITS } from '../data/traits';
import { t, tr } from '../i18n';
import { computeResult, isFinished, TRAIT_CODES } from '../state';
import type { QuizState, TraitCode } from '../types';

const LETTERS = ['A', 'B', 'C', 'D'];

export function renderQuiz(root: HTMLElement, state: QuizState, actions: Actions): void {
  const total = QUESTIONS.length;

  if (isFinished(state)) {
    const done = computeResult(state);
    root.innerHTML = `
      <div class="card empty">
        <div class="card-bd">
          <div class="empty-mark" aria-hidden="true">✅</div>
          <h2>${t('result_title', '', tr(done.primary.name), tr(done.primary.archetype))}</h2>
          <div class="btn-row">
            <button type="button" class="btn primary" id="btn-view-result">${t(
              'panel_result',
            )}</button>
            <button type="button" class="btn" id="btn-retake2">${t('btn_retake')}</button>
          </div>
        </div>
      </div>`;
    (root.querySelector('#btn-view-result') as HTMLButtonElement).addEventListener('click', () => {
      actions.setView('result');
    });
    (root.querySelector('#btn-retake2') as HTMLButtonElement).addEventListener('click', () => {
      actions.retake();
    });
    return;
  }

  if (state.answers.length === 0 && state.i === 0) {
    root.innerHTML = `
      <div class="card empty">
        <div class="card-bd">
          <div class="empty-mark" aria-hidden="true">❓</div>
          <h2>${t('quiz_notstarted_title')}</h2>
          <p class="muted">${t('quiz_notstarted_body')}</p>
          <div class="btn-row">
            <button type="button" class="btn primary" id="btn-begin">${t('btn_start')}</button>
          </div>
        </div>
      </div>`;
    (root.querySelector('#btn-begin') as HTMLButtonElement).addEventListener('click', () => {
      actions.startQuiz();
    });
    return;
  }

  const i = Math.min(state.i, total - 1);
  const q = QUESTIONS[i];
  const answered = state.answers.filter((a) => a != null).length;
  const pct = Math.round((answered / total) * 100);

  const answersHtml = q.answers
    .map((a, idx) => {
      const chips = (Object.entries(a.points) as [TraitCode, number][])
        .map(([k, v]) => `<span class="chip-point">${k}+${v}</span>`)
        .join('');
      return `
        <button type="button" class="btn ans" data-idx="${idx}">
          <span class="ans-letter" aria-hidden="true">${LETTERS[idx]}</span>
          <span class="ans-text">${tr(a.text)}</span>
          <span class="ans-chips">${chips}</span>
        </button>`;
    })
    .join('');

  root.innerHTML = `
    <div class="quiz-top">
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"
           aria-valuenow="${pct}" aria-label="${t('q_meta', i + 1, total)}">
        <div id="quiz-progress-fill" style="width:${pct}%"></div>
      </div>
      <p class="q-meta muted" id="q-meta">${t('q_meta', i + 1, total)}</p>
      <div class="live-traits" id="live-traits" aria-hidden="true"></div>
    </div>
    <div class="card quiz-card">
      <div class="card-bd">
        <h2 class="q-title">${tr(q.text)}</h2>
        <div class="answers">${answersHtml}</div>
        <div class="btn-row quiz-nav">
          <button type="button" class="btn" id="btn-back" ${i === 0 ? 'disabled' : ''}>${t(
            'btn_back',
          )}</button>
          <button type="button" class="btn danger" id="btn-quit">${t('btn_quit')}</button>
        </div>
      </div>
    </div>`;

  root.querySelectorAll<HTMLButtonElement>('.ans').forEach((btn) => {
    btn.addEventListener('click', () => {
      actions.selectAnswer(Number(btn.dataset.idx));
    });
  });
  (root.querySelector('#btn-back') as HTMLButtonElement).addEventListener('click', () => {
    actions.goBack();
  });
  (root.querySelector('#btn-quit') as HTMLButtonElement).addEventListener('click', () => {
    actions.quitQuiz();
  });

  // Compact live trait strip — the refreshed take on the original side panel
  // that updated as you answered. Small chips, top trait first.
  const live = root.querySelector('#live-traits') as HTMLElement;
  const max = total * 5;
  const chips = [...TRAIT_CODES]
    .map((code) => {
      const val = state.traits[code] || 0;
      const pct = Math.max(0, Math.min(100, Math.round((val / max) * 100)));
      return { code, pct };
    })
    .sort((a, b) => b.pct - a.pct)
    .map(
      ({ code, pct }) =>
        `<span class="live-chip"><b>${code}</b> ${tr(TRAITS[code].name)} · ${pct}%</span>`,
    )
    .join('');
  live.innerHTML = chips;
}
