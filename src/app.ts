// App orchestrator: view switching, quiz actions, header/tab wiring,
// keyboard shortcuts, and init. Views call back through the Actions
// interface (imported as type-only, so there is no runtime import cycle).

import { feedback } from './feedback';
import { getLang, setLang as setI18nLang, t } from './i18n';
import { copyResultText, emailResult, shareResult } from './share';
import {
  clearSavedState,
  loadState,
  persistState,
  updateSavedBadge,
} from './storage';
import { createInitialState, isFinished, resetTraitsFromAnswers } from './state';
import { QUESTIONS } from './data/questions';
import type { Lang, QuizState, View } from './types';
import { renderHome } from './views/home';
import { renderQuiz } from './views/quiz';
import { renderResult } from './views/result';
import { renderTraitsView } from './views/traits';

export interface Actions {
  startQuiz(): void;
  loadSaved(): void;
  resetSaved(): void;
  selectAnswer(idx: number): void;
  goBack(): void;
  quitQuiz(): void;
  retake(): void;
  share(): Promise<void>;
  copy(): Promise<void>;
  email(): void;
  setView(v: View): void;
}

export const state: QuizState = createInitialState();

function el<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id);
  if (!node) throw new Error(`missing element #${id}`);
  return node as T;
}

const viewEls: Record<View, HTMLElement> = {
  home: el('view-home'),
  quiz: el('view-quiz'),
  traits: el('view-traits'),
  result: el('view-result'),
};

function renderCurrent(): void {
  const root = viewEls[state.view];
  if (state.view === 'home') renderHome(root, state, actions);
  else if (state.view === 'quiz') renderQuiz(root, state, actions);
  else if (state.view === 'traits') renderTraitsView(root, state);
  else renderResult(root, state, actions);
  updateResultDot();
}

function setView(v: View): void {
  state.view = v;
  for (const [key, section] of Object.entries(viewEls) as [View, HTMLElement][]) {
    section.hidden = key !== v;
    section.classList.remove('view-enter');
    if (key === v) {
      // Restart the enter animation on each switch.
      void section.offsetWidth;
      section.classList.add('view-enter');
    }
  }
  document.querySelectorAll<HTMLButtonElement>('#tabbar .tab').forEach((tab) => {
    const active = tab.dataset.tab === v;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-current', active ? 'page' : 'false');
  });
  renderCurrent();
  window.scrollTo({ top: 0 });
}

function updateResultDot(): void {
  const dot = el('result-dot');
  dot.hidden = !state.finished;
}

/** Apply the current language to all static chrome (header, tabs, toggles). */
function applyTranslations(): void {
  document.documentElement.lang = getLang();
  el('ui-title').textContent = t('ui_title');
  el('ui-subtitle').textContent = t('ui_subtitle');
  el('tab-home-label').textContent = t('tab_home');
  el('tab-quiz-label').textContent = t('tab_quiz');
  el('tab-traits-label').textContent = t('tab_traits');
  el('tab-result-label').textContent = t('tab_result');

  const langEn = el<HTMLButtonElement>('lang-en');
  const langEs = el<HTMLButtonElement>('lang-es');
  langEn.setAttribute('aria-pressed', String(getLang() === 'en'));
  langEs.setAttribute('aria-pressed', String(getLang() === 'es'));

  const haptics = el<HTMLButtonElement>('haptics-toggle');
  const sound = el<HTMLButtonElement>('sound-toggle');
  haptics.textContent = state.haptics ? '📳' : '🚫';
  haptics.title = t('ui_haptics');
  haptics.setAttribute('aria-pressed', String(state.haptics));
  haptics.setAttribute('aria-label', t('ui_haptics'));
  sound.textContent = state.sound ? '🔊' : '🔇';
  sound.title = t('ui_sound');
  sound.setAttribute('aria-pressed', String(state.sound));
  sound.setAttribute('aria-label', t('ui_sound'));

  updateSavedBadge(state);
}

function setLanguage(lang: Lang): void {
  if (state.lang === lang) return;
  state.lang = lang;
  setI18nLang(lang);
  persistState(state);
  applyTranslations();
  renderCurrent();
  feedback('tap', state.haptics, state.sound);
}

const actions: Actions = {
  setView,

  startQuiz(): void {
    state.i = 0;
    state.answers = [];
    state.traits = createInitialState().traits;
    state.finished = false;
    persistState(state);
    setView('quiz');
    feedback('good', state.haptics, state.sound);
  },

  selectAnswer(idx: number): void {
    state.answers[state.i] = idx;
    resetTraitsFromAnswers(state);
    persistState(state);
    feedback('tap', state.haptics, state.sound);

    if (state.i < QUESTIONS.length - 1) {
      state.i += 1;
      renderCurrent();
    } else {
      state.finished = isFinished(state);
      persistState(state, { finished: state.finished });
      setView('result');
      feedback('good', state.haptics, state.sound);
    }
  },

  goBack(): void {
    if (state.i === 0) return;
    state.i -= 1;
    renderCurrent();
    feedback('tap', state.haptics, state.sound);
  },

  quitQuiz(): void {
    if (!window.confirm(t('confirm_quit'))) return;
    setView('home');
    feedback('bad', state.haptics, state.sound);
  },

  retake(): void {
    state.i = 0;
    state.answers = [];
    state.traits = createInitialState().traits;
    state.finished = false;
    persistState(state);
    setView('quiz');
    feedback('good', state.haptics, state.sound);
  },

  resetSaved(): void {
    if (!window.confirm(t('confirm_reset'))) return;
    clearSavedState();
    const lang = state.lang;
    const haptics = state.haptics;
    const sound = state.sound;
    Object.assign(state, createInitialState(), { lang, haptics, sound });
    setView('home');
    feedback('bad', state.haptics, state.sound);
  },

  loadSaved(): void {
    const ok = loadState(state);
    if (!ok) {
      window.alert(t('alert_nosaved'));
      return;
    }
    applyTranslations();
    if (state.finished) setView('result');
    else {
      state.i = Math.min(state.i || 0, QUESTIONS.length - 1);
      setView('quiz');
    }
    feedback('good', state.haptics, state.sound);
  },

  async share(): Promise<void> {
    const outcome = await shareResult(state);
    if (outcome === 'copied') window.alert(t('alert_shared_fallback'));
    feedback('good', state.haptics, state.sound);
  },

  async copy(): Promise<void> {
    await copyResultText(state);
    window.alert(t('alert_copied'));
    feedback('good', state.haptics, state.sound);
  },

  email(): void {
    emailResult(state);
    feedback('good', state.haptics, state.sound);
  },
};

function wireChrome(): void {
  el<HTMLButtonElement>('lang-en').addEventListener('click', () => setLanguage('en'));
  el<HTMLButtonElement>('lang-es').addEventListener('click', () => setLanguage('es'));

  el<HTMLButtonElement>('haptics-toggle').addEventListener('click', () => {
    state.haptics = !state.haptics;
    persistState(state);
    applyTranslations();
    feedback('tap', state.haptics, state.sound);
  });
  el<HTMLButtonElement>('sound-toggle').addEventListener('click', () => {
    state.sound = !state.sound;
    persistState(state);
    applyTranslations();
    feedback('tap', state.haptics, state.sound);
  });

  document.querySelectorAll<HTMLButtonElement>('#tabbar .tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const v = tab.dataset.tab as View;
      feedback('tap', state.haptics, state.sound);
      setView(v);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (state.view !== 'quiz' || isFinished(state)) return;
    if (e.key === 'ArrowLeft') actions.goBack();
    else if (e.key === 'Escape') actions.quitQuiz();
    else if (['1', '2', '3', '4'].includes(e.key)) {
      const idx = Number(e.key) - 1;
      if (QUESTIONS[state.i]?.answers[idx]) actions.selectAnswer(idx);
    }
  });
}

export function init(): void {
  loadState(state);
  wireChrome();
  applyTranslations();
  setView('home');
}
