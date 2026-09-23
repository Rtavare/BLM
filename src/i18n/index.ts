// i18n registry: locale dictionaries, current-language holder, and the t() helper.
// The dictionaries themselves live in ./locales/*.ts and were ported from the
// original single-file app. Function-valued entries are preserved as-is.

import type { Lang, LocalizedText } from '../types';
import { en } from './locales/en';
import { es } from './locales/es';

export interface Locale {
  ui_title: string;
  ui_subtitle: string;
  ui_spanish: string;
  ui_haptics: string;
  ui_sound: string;
  panel_start: string;
  panel_quiz: string;
  panel_result: string;
  step_1: string;
  step_2: string;
  step_3: string;
  name_label: string;
  name_ph: string;
  group_label: string;
  group_ph: string;
  how_title: string;
  how_body: string;
  btn_start: string;
  btn_load: string;
  btn_reset: string;
  tip: string;
  q_meta: (i: number, total: number) => string;
  btn_back: string;
  btn_quit: string;
  confirm_quit: string;
  confirm_reset: string;
  btn_share: string;
  btn_copy: string;
  btn_email: string;
  btn_retake: string;
  alert_nosaved: string;
  alert_copied: string;
  alert_email_invalid: string;
  alert_shared_fallback: string;
  traits_title: string;
  leaders_included: string;
  saved_prefix: string;
  result_title: (name: string, leader: string, arch: string) => string;
  superpower_title: string;
  levelup_title: string;
  verse_title: string;
  secondary_title: string;
  footer: string;
  growth_focus_prefix: string;
  secondary_line: (leader: string, blurb: string) => string;
  share_head: (name: string) => string;
  email_subject: (name: string) => string;
  share_group: (group: string) => string;
  share_match: (leader: string, arch: string) => string;
  share_secondary: (leader: string) => string;
  share_superpower: (sp: string) => string;
  share_levelup: (txt: string) => string;
  share_verse: (v: string) => string;
  share_traits: (line: string) => string;
  // New chrome strings added for the refreshed navigation (not in the original).
  tab_home: string;
  tab_quiz: string;
  tab_traits: string;
  tab_result: string;
  result_empty_title: string;
  result_empty_body: string;
  quiz_notstarted_title: string;
  quiz_notstarted_body: string;
  trait_mix_title: string;
  settings_saved: string;
}

const LOCALES: Record<Lang, Locale> = { en, es };

let currentLang: Lang = 'en';

export function setLang(lang: Lang): void {
  currentLang = lang;
}

export function getLang(): Lang {
  return currentLang;
}

/** Resolve a bilingual string for the current language (English fallback). */
export function tr(text: LocalizedText): string {
  return text[currentLang] || text.en;
}

/**
 * Translate a UI key. Function-valued entries are called with the
 * supplied args — same behavior as the original app's t().
 */
export function t(key: keyof Locale, ...args: (string | number)[]): string {
  const val: string | ((...a: (string | number)[]) => string) = LOCALES[currentLang][
    key
  ] as string | ((...a: (string | number)[]) => string);
  if (typeof val === 'function') {
    return val(...args);
  }
  return val;
}
