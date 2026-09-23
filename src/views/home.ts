// Home / start view: hero, name+group fields, how-it-works, and the
// Start / Load saved / Reset actions.

import type { Actions } from '../app';
import { LEADERS } from '../data/leaders';
import { t, tr } from '../i18n';
import { hasSavedState } from '../storage';
import type { QuizState } from '../types';

export function renderHome(root: HTMLElement, state: QuizState, actions: Actions): void {
  const leadersLine = LEADERS.map((l) => `${tr(l.name)} (${tr(l.archetype)})`).join(' • ');

  root.innerHTML = `
    <div class="hero card">
      <div class="card-bd">
        <div class="hero-mark" aria-hidden="true">🛡️</div>
        <h2 class="hero-title">${t('how_title')}</h2>
        <p class="hero-body">${t('how_body')}</p>
        <div class="field-row">
          <div class="field">
            <label for="participant-name">${t('name_label')}</label>
            <input id="participant-name" type="text" autocomplete="off" />
          </div>
          <div class="field">
            <label for="group-name">${t('group_label')}</label>
            <input id="group-name" type="text" autocomplete="off" />
          </div>
        </div>
        <div class="btn-row">
          <button type="button" class="btn primary" id="btn-start">${t('btn_start')}</button>
          <button type="button" class="btn" id="btn-load" ${
            hasSavedState() ? '' : 'disabled'
          }>${t('btn_load')}</button>
          <button type="button" class="btn danger" id="btn-reset">${t('btn_reset')}</button>
        </div>
        <p class="tip muted">${t('tip')}</p>
      </div>
    </div>
    <div class="card">
      <div class="card-bd">
        <div class="callout">
          <h3>${t('leaders_included')}</h3>
          <p class="muted">${leadersLine}</p>
        </div>
        <p class="muted fine-print">${t('settings_saved')}</p>
      </div>
    </div>
    <p class="footer">${t('footer')}</p>`;

  const nameInput = root.querySelector('#participant-name') as HTMLInputElement;
  const groupInput = root.querySelector('#group-name') as HTMLInputElement;
  nameInput.placeholder = t('name_ph');
  nameInput.value = state.participantName || '';
  groupInput.placeholder = t('group_ph');
  groupInput.value = state.groupName || '';

  // Keep state in sync as the user types so Start picks up the values.
  nameInput.addEventListener('input', () => {
    state.participantName = nameInput.value;
  });
  groupInput.addEventListener('input', () => {
    state.groupName = groupInput.value;
  });

  (root.querySelector('#btn-start') as HTMLButtonElement).addEventListener('click', () => {
    state.participantName = nameInput.value.trim();
    state.groupName = groupInput.value.trim();
    actions.startQuiz();
  });
  (root.querySelector('#btn-load') as HTMLButtonElement).addEventListener('click', () => {
    actions.loadSaved();
  });
  (root.querySelector('#btn-reset') as HTMLButtonElement).addEventListener('click', () => {
    actions.resetSaved();
  });
}
