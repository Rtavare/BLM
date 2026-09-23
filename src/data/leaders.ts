// Ported verbatim from the original single-file BLM app (source/index.html).
// Content and scoring data are intentionally unchanged.
import type { Leader } from '../types';

export const LEADERS: Leader[] = [
  {
    "id": "moses",
    "name": {
      "en": "Moses",
      "es": "Moisés"
    },
    "archetype": {
      "en": "Visionary Leader",
      "es": "Líder visionario"
    },
    "weights": {
      "V": 30,
      "S": 20,
      "R": 20,
      "C": 15,
      "B": 10,
      "E": 5
    },
    "why": {
      "en": "You’re the type who can carry a big mission. You think about purpose, direction, and helping people move forward.",
      "es": "Eres de los que pueden cargar una misión grande. Piensas en propósito, dirección y cómo ayudar a otros a avanzar."
    },
    "superpower": {
      "en": "Big-picture faith + leading through change (you can guide people when life feels messy).",
      "es": "Fe en grande + guiar cambios (puedes liderar cuando la vida se pone complicada)."
    },
    "verse": "Exodus 3:10–12",
    "secondaryBlurb": {
      "en": "When you’re locked in, you’re great at guiding a team through a new season.",
      "es": "Cuando te enfocas, eres excelente guiando a un grupo hacia una nueva etapa."
    }
  },
  {
    "id": "nehemiah",
    "name": {
      "en": "Nehemiah",
      "es": "Nehemías"
    },
    "archetype": {
      "en": "Builder / Reformer",
      "es": "Constructor / Reformador"
    },
    "weights": {
      "S": 30,
      "B": 25,
      "E": 20,
      "V": 15,
      "R": 5,
      "C": 5
    },
    "why": {
      "en": "You notice what’s broken and you actually want to fix it. You’re a builder: prayer + plan + action.",
      "es": "Ves lo que está roto y quieres arreglarlo. Eres constructor: oración + plan + acción."
    },
    "superpower": {
      "en": "Turning problems into progress (you rebuild, organize, and keep moving).",
      "es": "Convertir problemas en progreso (reconstruyes, organizas y sigues avanzando)."
    },
    "verse": "Nehemiah 2:17–18",
    "secondaryBlurb": {
      "en": "You’re strong at taking an idea and making it real.",
      "es": "Eres fuerte tomando una idea y haciéndola realidad."
    }
  },
  {
    "id": "joseph",
    "name": {
      "en": "Joseph",
      "es": "José"
    },
    "archetype": {
      "en": "Faithful Executor",
      "es": "Ejecutor fiel"
    },
    "weights": {
      "E": 35,
      "S": 25,
      "C": 20,
      "R": 10,
      "V": 5,
      "B": 5
    },
    "why": {
      "en": "You’re steady. Even when life is unfair, you keep your character and keep doing the right thing.",
      "es": "Eres estable. Aun cuando la vida es injusta, mantienes tu carácter y sigues haciendo lo correcto."
    },
    "superpower": {
      "en": "Consistency under pressure (you don’t fold—you grow).",
      "es": "Constancia bajo presión (no te rompes—creces)."
    },
    "verse": "Genesis 41:39–40",
    "secondaryBlurb": {
      "en": "You’re built for responsibility—people trust you with real stuff.",
      "es": "Estás hecho para responsabilidad—la gente confía en ti para cosas importantes."
    }
  },
  {
    "id": "david",
    "name": {
      "en": "David",
      "es": "David"
    },
    "archetype": {
      "en": "Courageous Shepherd",
      "es": "Pastor valiente"
    },
    "weights": {
      "B": 30,
      "R": 25,
      "V": 20,
      "E": 15,
      "C": 5,
      "S": 5
    },
    "why": {
      "en": "You lead with heart and courage. You’re the person who steps up when others hesitate.",
      "es": "Lideras con corazón y valentía. Eres quien se levanta cuando otros dudan."
    },
    "superpower": {
      "en": "Brave heart + strong influence (people follow your energy and faith).",
      "es": "Corazón valiente + influencia (la gente sigue tu energía y fe)."
    },
    "verse": "1 Samuel 16:12–13",
    "secondaryBlurb": {
      "en": "You can lift a room’s confidence fast.",
      "es": "Puedes subir la confianza del grupo rápido."
    }
  },
  {
    "id": "solomon",
    "name": {
      "en": "Solomon",
      "es": "Salomón"
    },
    "archetype": {
      "en": "Wise Strategist",
      "es": "Estratega sabio"
    },
    "weights": {
      "C": 35,
      "S": 30,
      "V": 15,
      "E": 10,
      "R": 5,
      "B": 5
    },
    "why": {
      "en": "You’re a thinker. You like understanding what’s really going on before making a move.",
      "es": "Eres pensador. Te gusta entender bien lo que pasa antes de actuar."
    },
    "superpower": {
      "en": "Wisdom and clarity (you help people make smarter decisions).",
      "es": "Sabiduría y claridad (ayudas a otros a decidir mejor)."
    },
    "verse": "1 Kings 3:9–12",
    "secondaryBlurb": {
      "en": "You’re great at seeing angles other people miss.",
      "es": "Eres buenísimo viendo cosas que otros no ven."
    }
  },
  {
    "id": "peter",
    "name": {
      "en": "Peter",
      "es": "Pedro"
    },
    "archetype": {
      "en": "Bold Influencer",
      "es": "Influenciador valiente"
    },
    "weights": {
      "B": 35,
      "R": 30,
      "V": 15,
      "E": 10,
      "S": 5,
      "C": 5
    },
    "why": {
      "en": "You’ve got energy and courage. You’re not afraid to speak up, try, and lead out loud.",
      "es": "Tienes energía y valentía. No te da miedo hablar, intentar y liderar en voz alta."
    },
    "superpower": {
      "en": "Momentum (you get things moving and bring people with you).",
      "es": "Impulso (pones las cosas en movimiento y traes a otros contigo)."
    },
    "verse": "Acts 2:14",
    "secondaryBlurb": {
      "en": "You can rally people quickly—just aim it with purpose.",
      "es": "Puedes motivar al grupo rápido—solo enfócalo con propósito."
    }
  },
  {
    "id": "paul",
    "name": {
      "en": "Paul",
      "es": "Pablo"
    },
    "archetype": {
      "en": "Developer / Multiplier",
      "es": "Formador / Multiplicador"
    },
    "weights": {
      "V": 25,
      "E": 25,
      "R": 20,
      "S": 15,
      "B": 10,
      "C": 5
    },
    "why": {
      "en": "You’re a builder of people. You want others to grow, get better, and step into purpose.",
      "es": "Eres formador de personas. Quieres que otros crezcan, mejoren y entren en su propósito."
    },
    "superpower": {
      "en": "Leader-maker (you grow other leaders and keep the mission strong).",
      "es": "Hacedor de líderes (formas líderes y fortaleces la misión)."
    },
    "verse": "2 Timothy 2:2",
    "secondaryBlurb": {
      "en": "You’re the type who turns a team into a movement.",
      "es": "Eres de los que convierten un equipo en un movimiento."
    }
  },
  {
    "id": "deborah",
    "name": {
      "en": "Deborah",
      "es": "Débora"
    },
    "archetype": {
      "en": "Decisive Judge",
      "es": "Jueza decisiva"
    },
    "weights": {
      "B": 30,
      "C": 25,
      "V": 20,
      "R": 15,
      "S": 5,
      "E": 5
    },
    "why": {
      "en": "You’re bold *and* wise. You can make hard calls while keeping things grounded and fair.",
      "es": "Eres valiente *y* sabia. Puedes tomar decisiones difíciles manteniendo todo justo y firme."
    },
    "superpower": {
      "en": "Courage + discernment (you stand up for what’s right).",
      "es": "Valentía + discernimiento (defiendes lo correcto)."
    },
    "verse": "Judges 4:14",
    "secondaryBlurb": {
      "en": "You’re strong in moments that require truth and bravery.",
      "es": "Eres fuerte cuando se necesita verdad y valentía."
    }
  }
];
