// localStorage persistence. Uses the same storage key as the original
// single-file app so existing saved progress carries over.

import { setLang, t } from './i18n';
import { createInitialState, isFinished, resetTraitsFromAnswers } from './state';
import type { QuizState } from './types';

export const STORAGE_KEY = 'bible_leader_match_v3_teen_i18n';

interface StoredState {
  i?: number;
  answers?: (number | null)[];
  traits?: QuizState['traits'];
  participantName?: string;
  groupName?: string;
  lastSavedISO?: string | null;
  lang?: string;
  haptics?: boolean;
  sound?: boolean;
  finished?: boolean;
}

export function persistState(state: QuizState, extra: Partial<StoredState> = {}): void {
  const payload: StoredState = {
    ...state,
    ...extra,
    lastSavedISO: new Date().toISOString(),
  };
  state.lastSavedISO = payload.lastSavedISO ?? null;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* storage unavailable — the app still works for the session */
  }
  updateSavedBadge(state);
}

export function loadState(state: QuizState): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw) as StoredState | null;
    if (!data || typeof data !== 'object') return false;

    state.participantName = data.participantName ?? '';
    state.groupName = data.groupName ?? '';
    state.i = Number.isFinite(data.i) ? (data.i as number) : 0;
    state.answers = Array.isArray(data.answers) ? data.answers : [];
    state.traits =
      data.traits && typeof data.traits === 'object' ? data.traits : createInitialState().traits;
    state.lastSavedISO = data.lastSavedISO ?? null;
    state.lang = data.lang === 'es' || data.lang === 'en' ? data.lang : 'en';
    state.haptics = data.haptics !== false;
    state.sound = data.sound === true;
    setLang(state.lang);
    resetTraitsFromAnswers(state);
    state.finished = isFinished(state);
    return true;
  } catch {
    return false;
  }
}

export function clearSavedState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** True when there is any saved payload in localStorage. */
export function hasSavedState(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) != null;
  } catch {
    return false;
  }
}

/** Render the "Saved: <date>" badge in the header. */
export function updateSavedBadge(state: QuizState): void {
  const badge = document.getElementById('saved-badge');
  if (!badge) return;
  if (!state.lastSavedISO) {
    badge.textContent = `${t('saved_prefix')}—`;
    return;
  }
  const d = new Date(state.lastSavedISO);
  const nice = d.toLocaleString(undefined, {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  badge.textContent = `${t('saved_prefix')}${nice}`;
}
