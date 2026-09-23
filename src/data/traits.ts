// Ported verbatim from the original single-file BLM app (source/index.html).
// Content and scoring data are intentionally unchanged.
import type { LocalizedText, TraitCode, TraitMeta } from '../types';

export const TRAITS: Record<TraitCode, TraitMeta> = {
  "V": {
    "name": {
      "en": "Visionary",
      "es": "Visionario"
    },
    "desc": {
      "en": "Big-picture, future-focused",
      "es": "Ve el panorama completo"
    }
  },
  "S": {
    "name": {
      "en": "Strategic",
      "es": "Estratégico"
    },
    "desc": {
      "en": "Plans, organizes, thinks long-term",
      "es": "Planifica y organiza"
    }
  },
  "R": {
    "name": {
      "en": "Relational",
      "es": "Relacional"
    },
    "desc": {
      "en": "People-first, encouraging, unifying",
      "es": "Prioriza a las personas"
    }
  },
  "B": {
    "name": {
      "en": "Bold",
      "es": "Valiente"
    },
    "desc": {
      "en": "Takes action, speaks up, steps out",
      "es": "Actúa y se atreve"
    }
  },
  "E": {
    "name": {
      "en": "Executor",
      "es": "Ejecutor"
    },
    "desc": {
      "en": "Reliable, consistent, gets it done",
      "es": "Constante y cumplidor"
    }
  },
  "C": {
    "name": {
      "en": "Counselor",
      "es": "Consejero"
    },
    "desc": {
      "en": "Wise, thoughtful, discerning",
      "es": "Sabio y reflexivo"
    }
  }
};

export const LEVEL_UP_BY_TRAIT: Record<TraitCode, LocalizedText> = {
  "V": {
    "en": "Write a 1-sentence goal for your week. Each morning ask: “What’s one step toward it today?”",
    "es": "Escribe una meta en 1 oración para tu semana. Cada mañana pregunta: “¿Cuál es un paso hoy?”"
  },
  "S": {
    "en": "Make a mini-plan: 3 steps + 1 deadline. Then do step 1 within 10 minutes.",
    "es": "Haz un mini-plan: 3 pasos + 1 fecha. Luego haz el paso 1 en 10 minutos."
  },
  "R": {
    "en": "Start 1 real convo daily: ask “How are you—really?” and listen without interrupting.",
    "es": "Inicia 1 conversación real diaria: “¿Cómo estás—de verdad?” y escucha sin interrumpir."
  },
  "B": {
    "en": "Do one brave thing daily (small counts): speak up, volunteer, invite someone, or try something new.",
    "es": "Haz una cosa valiente al día (pequeña cuenta): habla, ofrece ayuda, invita a alguien o intenta algo nuevo."
  },
  "E": {
    "en": "Choose one habit and do it for 7 days (prayer, reading, workout, homework block). Track it.",
    "es": "Elige un hábito y hazlo 7 días (oración, lectura, ejercicio, estudio). Márcalo cada día."
  },
  "C": {
    "en": "Before reacting, pause 10 seconds. Ask: “What’s the wisest next move?” Then respond.",
    "es": "Antes de reaccionar, pausa 10 segundos. Pregunta: “¿Cuál es el paso más sabio?” y responde."
  }
};
