// Quiz state + scoring. The scoring algorithm is ported faithfully from the
// original single-file app: answers award raw trait points, the trait mix is
// normalized to 100, leaders are ranked by Manhattan distance to their
// weight vectors, and the growth trait is the lowest-scoring raw trait.

import { LEADERS } from './data/leaders';
import { QUESTIONS } from './data/questions';
import { TRAITS } from './data/traits';
import type { Leader, QuizState, Result, TraitCode } from './types';

export const TRAIT_CODES = Object.keys(TRAITS) as TraitCode[];

export function initTraits(): Record<TraitCode, number> {
  const t = {} as Record<TraitCode, number>;
  for (const k of TRAIT_CODES) t[k] = 0;
  return t;
}

export function createInitialState(): QuizState {
  return {
    view: 'home',
    i: 0,
    answers: [],
    traits: initTraits(),
    participantName: '',
    groupName: '',
    lastSavedISO: null,
    lang: 'en',
    haptics: true,
    sound: false,
    finished: false,
  };
}

/** Recompute raw trait totals from the recorded answers. */
export function resetTraitsFromAnswers(state: QuizState): void {
  state.traits = initTraits();
  for (let qi = 0; qi < state.answers.length; qi++) {
    const optIdx = state.answers[qi];
    if (optIdx == null) continue;
    const answer = QUESTIONS[qi]?.answers[optIdx];
    if (!answer) continue;
    for (const [k, v] of Object.entries(answer.points) as [TraitCode, number][]) {
      state.traits[k] = (state.traits[k] || 0) + v;
    }
  }
}

/** Normalize raw trait points to percentages summing to ~100. */
export function normalizeTo100(traitsRaw: Record<TraitCode, number>): Record<TraitCode, number> {
  const sum = Object.values(traitsRaw).reduce((a, b) => a + b, 0) || 1;
  const pct = {} as Record<TraitCode, number>;
  for (const k of TRAIT_CODES) pct[k] = Math.round((traitsRaw[k] / sum) * 100);
  return pct;
}

function distance(aPct: Record<TraitCode, number>, leaderWeights: Record<TraitCode, number>): number {
  let d = 0;
  for (const k of TRAIT_CODES) d += Math.abs((aPct[k] || 0) - (leaderWeights[k] || 0));
  return d;
}

export function computeResult(state: QuizState): Result {
  const traitPct = normalizeTo100(state.traits);
  const ranked = LEADERS.map((leader) => ({ leader, d: distance(traitPct, leader.weights) })).sort(
    (x, y) => x.d - y.d,
  );

  const primary: Leader = ranked[0]?.leader ?? LEADERS[0];
  const secondary: Leader | null = ranked[1]?.leader ?? null;

  let growthTrait: TraitCode = TRAIT_CODES[0];
  for (const k of TRAIT_CODES) {
    if ((state.traits[k] || 0) < (state.traits[growthTrait] || 0)) growthTrait = k;
  }
  return { primary, secondary, growthTrait, traitPct };
}

/** True when every question has a recorded answer. */
export function isFinished(state: QuizState): boolean {
  return (
    state.answers.length >= QUESTIONS.length && state.answers.every((v) => v != null)
  );
}
