// Result view: leader match hero, animated trait mix, superpower,
// level-up habit, key verse, secondary vibe, and share actions.

import type { Actions } from '../app';
import { LEVEL_UP_BY_TRAIT, TRAITS } from '../data/traits';
import { t, tr } from '../i18n';
import { computeResult, isFinished } from '../state';
import type { QuizState } from '../types';
import { renderTraitBars } from './traits';

export function renderResult(root: HTMLElement, state: QuizState, actions: Actions): void {
  if (!isFinished(state)) {
    root.innerHTML = `
      <div class="card empty">
        <div class="card-bd">
          <div class="empty-mark" aria-hidden="true">🏆</div>
          <h2>${t('result_empty_title')}</h2>
          <p class="muted">${t('result_empty_body')}</p>
          <div class="btn-row">
            <button type="button" class="btn primary" id="btn-go-quiz">${t('btn_start')}</button>
          </div>
        </div>
      </div>`;
    (root.querySelector('#btn-go-quiz') as HTMLButtonElement).addEventListener('click', () => {
      actions.setView('quiz');
    });
    return;
  }

  const { primary, secondary, growthTrait, traitPct } = computeResult(state);
  const name = (state.participantName || '').trim();
  const growthName = tr(TRAITS[growthTrait].name);
  const habit = tr(LEVEL_UP_BY_TRAIT[growthTrait]);

  root.innerHTML = `
    <div class="card match-hero">
      <div class="card-bd">
        <p class="match-kicker">${t('panel_result')}</p>
        <h2 class="match-name">${tr(primary.name)}</h2>
        <p class="match-arch pill-gold">${tr(primary.archetype)}</p>
        <p class="match-why">${tr(primary.why)}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-hd"><h2>${t('trait_mix_title')}</h2></div>
      <div class="card-bd"><div id="result-bars"></div></div>
    </div>

    <div class="card">
      <div class="card-bd callout">
        <h3>${t('superpower_title')}</h3>
        <p>${tr(primary.superpower)}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-bd callout">
        <h3>${t('levelup_title')}</h3>
        <p><b>${t('growth_focus_prefix')}${growthName}.</b> ${habit}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-bd callout">
        <h3>${t('verse_title')}</h3>
        <p class="verse">“${primary.verse}”</p>
      </div>
    </div>

    <div class="card">
      <div class="card-bd callout">
        <h3>${t('secondary_title')}</h3>
        <p>${
          secondary ? t('secondary_line', tr(secondary.name), tr(secondary.secondaryBlurb)) : '—'
        }</p>
      </div>
    </div>

    <div class="card">
      <div class="card-bd">
        <div class="btn-row">
          <button type="button" class="btn good" id="btn-share">${t('btn_share')}</button>
          <button type="button" class="btn" id="btn-copy">${t('btn_copy')}</button>
          <button type="button" class="btn" id="btn-email">${t('btn_email')}</button>
          <button type="button" class="btn primary" id="btn-retake">${t('btn_retake')}</button>
        </div>
        ${name ? `<p class="muted fine-print">${t('share_head', name)}</p>` : ''}
      </div>
    </div>`;

  const bars = root.querySelector('#result-bars') as HTMLElement;
  renderTraitBars(bars, { values: traitPct, unit: '%', max: 100, highlightTop: true });

  (root.querySelector('#btn-share') as HTMLButtonElement).addEventListener('click', () => {
    void actions.share();
  });
  (root.querySelector('#btn-copy') as HTMLButtonElement).addEventListener('click', () => {
    void actions.copy();
  });
  (root.querySelector('#btn-email') as HTMLButtonElement).addEventListener('click', () => {
    actions.email();
  });
  (root.querySelector('#btn-retake') as HTMLButtonElement).addEventListener('click', () => {
    actions.retake();
  });
}
