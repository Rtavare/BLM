// Shared domain types for the BLM app. Content itself lives in src/data/.

export type Lang = 'en' | 'es';
export type TraitCode = 'V' | 'S' | 'R' | 'B' | 'E' | 'C';
export type View = 'home' | 'quiz' | 'traits' | 'result';

export interface LocalizedText {
  en: string;
  es: string;
}

export interface TraitMeta {
  name: LocalizedText;
  desc: LocalizedText;
}

export interface Answer {
  text: LocalizedText;
  points: Partial<Record<TraitCode, number>>;
}

export interface Question {
  text: LocalizedText;
  answers: Answer[];
}

export interface Leader {
  id: string;
  name: LocalizedText;
  archetype: LocalizedText;
  weights: Record<TraitCode, number>;
  why: LocalizedText;
  superpower: LocalizedText;
  verse: string;
  secondaryBlurb: LocalizedText;
}

export interface QuizState {
  view: View;
  i: number;
  answers: (number | null)[];
  traits: Record<TraitCode, number>;
  participantName: string;
  groupName: string;
  lastSavedISO: string | null;
  lang: Lang;
  haptics: boolean;
  sound: boolean;
  finished: boolean;
}

export interface Result {
  primary: Leader;
  secondary: Leader | null;
  growthTrait: TraitCode;
  traitPct: Record<TraitCode, number>;
}
