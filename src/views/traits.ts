// Traits explorer view + a shared animated trait-bar renderer reused by
// the quiz view (live scores) and the result view (final mix).

import { QUESTIONS } from '../data/questions';
import { LEVEL_UP_BY_TRAIT, TRAITS } from '../data/traits';
import { t, tr } from '../i18n';
import { TRAIT_CODES } from '../state';
import { LEADERS } from '../data/leaders';
import type { QuizState, TraitCode } from '../types';

export interface TraitBarOptions {
  /** Values keyed by trait code, e.g. raw points or normalized percents. */
  values: Record<TraitCode, number>;
  /** Suffix shown next to each value, e.g. "pts" or "%". */
  unit: string;
  /** Scale: values are divided by this to get bar width (0-100%). */
  max: number;
  /** Highlight the top trait with the gold treatment. */
  highlightTop?: boolean;
}

function pctOf(value: number, max: number): number {
  return Math.max(0, Math.min(100, Math.round((value / max) * 100)));
}

/**
 * Render animated trait score bars into `root`. Bars start at 0 width and
 * animate to their target on the next frame (CSS transition).
 */
export function renderTraitBars(root: HTMLElement, opts: TraitBarOptions): void {
  root.innerHTML = '';
  const entries = TRAIT_CODES.map((code) => ({ code, pct: pctOf(opts.values[code] || 0, opts.max) }));
  const top = entries.reduce((a, b) => (b.pct > a.pct ? b : a), entries[0]);

  for (const { code, pct } of entries) {
    const meta = TRAITS[code];
    const row = document.createElement('div');
    row.className = 'stat' + (opts.highlightTop && code === top.code ? ' stat-top' : '');
    const name = tr(meta.name);
    row.innerHTML = `
      <div class="stat-label">
        <div class="stat-name"><span class="trait-code">${code}</span> ${name}</div>
        <div class="stat-value muted">${opts.values[code] || 0} ${opts.unit}</div>
      </div>
      <div class="bar" role="img" aria-label="${name}: ${pct} percent"><div style="width:0%"></div></div>
      <div class="pill">${pct}%</div>`;
    root.appendChild(row);
    const fill = row.querySelector('.bar > div') as HTMLElement | null;
    if (fill) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fill.style.width = `${pct}%`;
        });
      });
    }
  }
}

export function renderTraitsView(root: HTMLElement, state: QuizState): void {
  const cards = TRAIT_CODES.map((code) => {
    const meta = TRAITS[code];
    return `
      <article class="card trait-card">
        <div class="trait-card-head">
          <span class="trait-code big">${code}</span>
          <div>
            <h3>${tr(meta.name)}</h3>
            <p class="muted">${tr(meta.desc)}</p>
          </div>
        </div>
        <div class="callout habit">
          <h4>🎯 ${t('levelup_title')}</h4>
          <p>${tr(LEVEL_UP_BY_TRAIT[code])}</p>
        </div>
      </article>`;
  }).join('');

  const leadersLine = LEADERS.map((l) => `${tr(l.name)} (${tr(l.archetype)})`).join(' • ');

  root.innerHTML = `
    <div class="card">
      <div class="card-hd"><h2>${t('traits_title')}</h2></div>
      <div class="card-bd"><div id="trait-bars-live"></div></div>
    </div>
    <div class="trait-grid">${cards}</div>
    <div class="card">
      <div class="card-bd">
        <div class="callout">
          <h3>${t('leaders_included')}</h3>
          <p class="muted">${leadersLine}</p>
        </div>
      </div>
    </div>`;

  const live = root.querySelector('#trait-bars-live') as HTMLElement | null;
  if (live) {
    // Live scores use the same scale as the original app: max possible raw points.
    renderTraitBars(live, {
      values: state.traits,
      unit: 'pts',
      max: QUESTIONS.length * 5,
    });
  }
}
