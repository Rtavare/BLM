// Subtle tactile/audio feedback on interactions (ported from the original).

let audioCtx: AudioContext | null = null;

export function haptic(ms = 18, enabled: boolean): void {
  if (!enabled) return;
  if (navigator.vibrate) navigator.vibrate(ms);
}

export function beep(enabled: boolean): void {
  if (!enabled) return;
  try {
    const Ctor: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    audioCtx = audioCtx ?? new Ctor();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'sine';
    o.frequency.value = 880;
    g.gain.value = 0.06;
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    window.setTimeout(() => o.stop(), 70);
  } catch {
    /* audio not available — stay silent */
  }
}

export type FeedbackKind = 'tap' | 'good' | 'bad';

export function feedback(kind: FeedbackKind, haptics: boolean, sound: boolean): void {
  if (kind === 'good') {
    haptic(28, haptics);
    beep(sound);
  } else if (kind === 'bad') {
    haptic(55, haptics);
  } else {
    haptic(12, haptics);
  }
}
