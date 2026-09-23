// Result sharing: Web Share API with clipboard fallback, copy-to-clipboard,
// and email-via-mailto. Ported from the original single-file app.

import { t, tr } from './i18n';
import { LEVEL_UP_BY_TRAIT, TRAITS } from './data/traits';
import { computeResult, TRAIT_CODES } from './state';
import type { QuizState } from './types';

/** Build the plain-text result summary used by share/copy/email. */
export function makeShareText(state: QuizState): string {
  const { primary, secondary, growthTrait, traitPct } = computeResult(state);
  const name = (state.participantName || '').trim();
  const group = (state.groupName || '').trim();

  const leaderName = tr(primary.name);
  const arch = tr(primary.archetype);

  const head = t('share_head', name);
  const groupLine = t('share_group', group);
  const matchLine = t('share_match', leaderName, arch);

  const secLine = secondary ? t('share_secondary', tr(secondary.name)) : '';
  const sp = tr(primary.superpower);

  const habit = tr(LEVEL_UP_BY_TRAIT[growthTrait]);
  const traitsLine = TRAIT_CODES.map((k) => `${k}:${traitPct[k] || 0}%`).join('  ');

  return `${head}
${groupLine}${matchLine}
${secLine}${t('share_superpower', sp)}
${t('share_levelup', habit)}
${t('share_verse', primary.verse)}${t('share_traits', traitsLine)}`;
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
}

/** Share via the Web Share API; falls back to copying text + link. */
export async function shareResult(state: QuizState): Promise<'shared' | 'copied'> {
  const text = makeShareText(state);
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title: 'Biblical Leadership Match', text, url });
      return 'shared';
    } catch {
      /* user cancelled or share failed — fall through to clipboard */
    }
  }

  await copyToClipboard(`${text}\n\n${url}`);
  return 'copied';
}

/** Copy the result text to the clipboard. */
export async function copyResultText(state: QuizState): Promise<void> {
  await copyToClipboard(makeShareText(state));
}

/** Open the user's mail app with the result pre-filled (mailto). */
export function emailResult(state: QuizState): void {
  const text = makeShareText(state);
  const name = (state.participantName || '').trim();
  const subject = t('email_subject', name);
  const body = `${text}\n\n${window.location.href}`;
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function traitDisplayName(code: (typeof TRAIT_CODES)[number]): string {
  return tr(TRAITS[code].name);
}
