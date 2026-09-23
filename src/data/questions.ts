// Ported verbatim from the original single-file BLM app (source/index.html).
// Content and scoring data are intentionally unchanged.
import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    "text": {
      "en": "When something goes wrong in your group (school, church, team), you usually:",
      "es": "Cuando algo sale mal en tu grupo (escuela, iglesia, equipo), tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Pause, pray/think, and figure out what matters most",
          "es": "Pauso, oro/pienso, y decido qué es lo más importante"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Check on people first and make sure everyone’s okay",
          "es": "Primero reviso cómo está la gente y si todos están bien"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Jump in fast and start fixing it",
          "es": "Me meto rápido y empiezo a resolver"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Make a plan so it doesn’t happen again",
          "es": "Hago un plan para que no pase otra vez"
        },
        "points": {
          "S": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "Your friends count on you most for:",
      "es": "Tus amigos cuentan contigo más por:"
    },
    "answers": [
      {
        "text": {
          "en": "Big ideas and motivation",
          "es": "Ideas grandes y motivación"
        },
        "points": {
          "V": 5
        }
      },
      {
        "text": {
          "en": "Being supportive and understanding",
          "es": "Ser apoyo y comprender"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Actually getting things done",
          "es": "De verdad terminar las cosas"
        },
        "points": {
          "E": 5
        }
      },
      {
        "text": {
          "en": "Giving wise advice",
          "es": "Dar consejos sabios"
        },
        "points": {
          "C": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "In a group project, you naturally become the person who:",
      "es": "En un proyecto en grupo, tú normalmente eres quien:"
    },
    "answers": [
      {
        "text": {
          "en": "Keeps everyone focused on the goal",
          "es": "Mantiene a todos enfocados en la meta"
        },
        "points": {
          "V": 5
        }
      },
      {
        "text": {
          "en": "Organizes tasks and deadlines",
          "es": "Organiza tareas y fechas"
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Pushes the team to move faster",
          "es": "Empuja al grupo para avanzar más rápido"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Makes sure everyone feels included",
          "es": "Se asegura que todos se sientan incluidos"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When you have a big decision to make, you usually:",
      "es": "Cuando tienes una decisión grande, tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Think it through carefully and look for wisdom",
          "es": "Lo pienso bien y busco sabiduría"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Talk with someone you trust",
          "es": "Lo hablo con alguien de confianza"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Go with your gut and take action",
          "es": "Me voy por el instinto y actúo"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Write out a plan and options",
          "es": "Escribo un plan y opciones"
        },
        "points": {
          "S": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "If you see someone being left out, you’re most likely to:",
      "es": "Si ves a alguien siendo dejado fuera, lo más probable es que tú:"
    },
    "answers": [
      {
        "text": {
          "en": "Go sit with them and bring them in",
          "es": "Me siento con esa persona y la incluyo"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Speak up and address it",
          "es": "Hablo y lo enfrento"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Talk to a leader/adult and make a plan",
          "es": "Hablo con un líder/adulto y hago un plan"
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Pray and look for the right moment/words",
          "es": "Oro y busco el momento/palabras correctas"
        },
        "points": {
          "C": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When you start something new (club, ministry, team), your first focus is:",
      "es": "Cuando comienzas algo nuevo (club, ministerio, equipo), tu primer enfoque es:"
    },
    "answers": [
      {
        "text": {
          "en": "Why are we doing this? What’s the purpose?",
          "es": "¿Por qué lo hacemos? ¿Cuál es el propósito?"
        },
        "points": {
          "V": 5
        }
      },
      {
        "text": {
          "en": "Who’s doing what? Let’s set roles.",
          "es": "¿Quién hace qué? Definamos roles."
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Let’s start now and adjust later",
          "es": "Empecemos ya y ajustamos después"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Let’s make sure everyone’s connected",
          "es": "Aseguremos que todos estén conectados"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When you’re stressed or under pressure, you tend to:",
      "es": "Cuando estás estresado o bajo presión, tú tiendes a:"
    },
    "answers": [
      {
        "text": {
          "en": "Stay steady and keep pushing",
          "es": "Mantenerme firme y seguir"
        },
        "points": {
          "E": 5
        }
      },
      {
        "text": {
          "en": "Think deeply and process what’s happening",
          "es": "Pensar profundo y procesar lo que pasa"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Get energized and take charge",
          "es": "Activarme y tomar el control"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Talk to someone and get support",
          "es": "Hablar con alguien y buscar apoyo"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "People would describe your leadership vibe as:",
      "es": "La gente describiría tu liderazgo como:"
    },
    "answers": [
      {
        "text": {
          "en": "Calm and wise",
          "es": "Calmo y sabio"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Bold and confident",
          "es": "Valiente y seguro"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Caring and encouraging",
          "es": "Cariñoso y alentador"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Reliable and consistent",
          "es": "Confiable y constante"
        },
        "points": {
          "E": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "If your team is procrastinating, you usually:",
      "es": "Si tu grupo está procrastinando, tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Create a simple plan with deadlines",
          "es": "Hago un plan simple con fechas"
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Push for action and momentum",
          "es": "Empujo para que haya acción e impulso"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Encourage everyone and check in",
          "es": "Animo a todos y hago seguimiento"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Focus on doing your part well and lead by example",
          "es": "Hago mi parte bien y lidero con ejemplo"
        },
        "points": {
          "E": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When you think about your future, you’re most driven by:",
      "es": "Cuando piensas en tu futuro, lo que más te impulsa es:"
    },
    "answers": [
      {
        "text": {
          "en": "A big purpose God is calling me to",
          "es": "Un propósito grande al que Dios me llama"
        },
        "points": {
          "V": 3,
          "C": 2
        }
      },
      {
        "text": {
          "en": "Helping people and building community",
          "es": "Ayudar a la gente y crear comunidad"
        },
        "points": {
          "R": 4,
          "C": 1
        }
      },
      {
        "text": {
          "en": "Making things happen and seeing results",
          "es": "Hacer que las cosas pasen y ver resultados"
        },
        "points": {
          "B": 3,
          "E": 2
        }
      },
      {
        "text": {
          "en": "Making smart choices and a solid plan",
          "es": "Tomar decisiones sabias y tener un plan"
        },
        "points": {
          "S": 4,
          "C": 1
        }
      }
    ]
  },
  {
    "text": {
      "en": "When someone asks you to lead something last-minute, you:",
      "es": "Cuando te piden liderar algo de último minuto, tú:"
    },
    "answers": [
      {
        "text": {
          "en": "Step up—let’s go",
          "es": "Me tiro—vamos arriba"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Ask a few questions and make a quick plan",
          "es": "Hago unas preguntas y armo un plan rápido"
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Make sure everyone is comfortable and included",
          "es": "Me aseguro que todos estén cómodos e incluidos"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Pause and think/pray before deciding",
          "es": "Pauso y pienso/oro antes de decidir"
        },
        "points": {
          "C": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "If you’re given a task, you usually:",
      "es": "Si te asignan una tarea, tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Finish it early and do it well",
          "es": "La termino temprano y bien"
        },
        "points": {
          "E": 5
        }
      },
      {
        "text": {
          "en": "Make a plan and follow it step-by-step",
          "es": "Hago un plan y lo sigo paso a paso"
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Get excited and start right away",
          "es": "Me emociono y empiezo de una"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Ask how it impacts people first",
          "es": "Pregunto primero cómo afecta a la gente"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When someone disagrees with you, you usually:",
      "es": "Cuando alguien no está de acuerdo contigo, tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Try to understand them and keep peace",
          "es": "Trato de entender y mantener la paz"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Stand your ground if it matters",
          "es": "Me mantengo firme si importa"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Look for the wisest choice, even if it’s not yours",
          "es": "Busco la opción más sabia, aunque no sea la mía"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Work toward a practical compromise/plan",
          "es": "Busco un acuerdo práctico/plan"
        },
        "points": {
          "S": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "If you had to plan an event (youth night, hangout, fundraiser), you’d start with:",
      "es": "Si tuvieras que planear un evento (noche de jóvenes, salida, actividad), empezarías por:"
    },
    "answers": [
      {
        "text": {
          "en": "The theme/purpose—what’s the goal?",
          "es": "El tema/propósito—¿cuál es la meta?"
        },
        "points": {
          "V": 5
        }
      },
      {
        "text": {
          "en": "A checklist, budget, and timeline",
          "es": "Lista, presupuesto y calendario"
        },
        "points": {
          "S": 5
        }
      },
      {
        "text": {
          "en": "Getting people hyped and recruiting friends",
          "es": "Motivar a la gente e invitar amigos"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Making sure everyone feels welcome",
          "es": "Que todos se sientan bienvenidos"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "You feel most confident leading when you’re:",
      "es": "Te sientes más confiado liderando cuando estás:"
    },
    "answers": [
      {
        "text": {
          "en": "Casting a vision and inspiring people",
          "es": "Marcando visión e inspirando"
        },
        "points": {
          "V": 5
        }
      },
      {
        "text": {
          "en": "Coaching and encouraging someone",
          "es": "Guiando y animando a alguien"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Executing tasks and making progress",
          "es": "Ejecutando tareas y avanzando"
        },
        "points": {
          "E": 5
        }
      },
      {
        "text": {
          "en": "Solving a tough problem with wisdom",
          "es": "Resolviendo un problema difícil con sabiduría"
        },
        "points": {
          "C": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When you mess up, you usually:",
      "es": "Cuando te equivocas, tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Own it, apologize, and fix it",
          "es": "Lo reconozco, pido perdón y lo arreglo"
        },
        "points": {
          "E": 5
        }
      },
      {
        "text": {
          "en": "Reflect and learn so it doesn’t happen again",
          "es": "Reflexiono y aprendo para no repetirlo"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Move forward fast and try again",
          "es": "Sigo rápido e intento otra vez"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Talk it out with someone you trust",
          "es": "Lo hablo con alguien de confianza"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "When your group is quiet or awkward, you usually:",
      "es": "Cuando el grupo está callado o incómodo, tú normalmente:"
    },
    "answers": [
      {
        "text": {
          "en": "Start the conversation or break the ice",
          "es": "Rompo el hielo y arranco la conversación"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Ask thoughtful questions",
          "es": "Hago preguntas profundas"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Make sure everyone gets a chance to speak",
          "es": "Me aseguro que todos participen"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Guide the group back to the plan",
          "es": "Guío al grupo de vuelta al plan"
        },
        "points": {
          "S": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "If you see a big problem (bullying, drama, unfairness), you’re most likely to:",
      "es": "Si ves un problema grande (bullying, drama, injusticia), lo más probable es que tú:"
    },
    "answers": [
      {
        "text": {
          "en": "Speak up and challenge it",
          "es": "Hablo y lo enfrento"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "Look for the wisest way to respond",
          "es": "Busco la forma más sabia de responder"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "Support the person affected and build unity",
          "es": "Apoyo a la persona afectada y uno al grupo"
        },
        "points": {
          "R": 5
        }
      },
      {
        "text": {
          "en": "Talk to leaders and create a plan to fix it",
          "es": "Hablo con líderes y hago un plan"
        },
        "points": {
          "S": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "Your friends would say your biggest strength is:",
      "es": "Tus amigos dirían que tu mayor fortaleza es:"
    },
    "answers": [
      {
        "text": {
          "en": "You’re consistent—you show up",
          "es": "Eres constante—siempre estás"
        },
        "points": {
          "E": 5
        }
      },
      {
        "text": {
          "en": "You’re brave—you take action",
          "es": "Eres valiente—actúas"
        },
        "points": {
          "B": 5
        }
      },
      {
        "text": {
          "en": "You’re wise—you think deeply",
          "es": "Eres sabio—piensas profundo"
        },
        "points": {
          "C": 5
        }
      },
      {
        "text": {
          "en": "You care—you keep people together",
          "es": "Te importan—mantienes al grupo unido"
        },
        "points": {
          "R": 5
        }
      }
    ]
  },
  {
    "text": {
      "en": "The kind of leader you want to become is someone who:",
      "es": "El tipo de líder que quieres ser es alguien que:"
    },
    "answers": [
      {
        "text": {
          "en": "Builds something lasting for God’s purpose",
          "es": "Construye algo duradero para el propósito de Dios"
        },
        "points": {
          "V": 3,
          "E": 2
        }
      },
      {
        "text": {
          "en": "Fixes what’s broken and brings change",
          "es": "Arregla lo roto y trae cambio"
        },
        "points": {
          "S": 3,
          "B": 2
        }
      },
      {
        "text": {
          "en": "Helps people grow and become leaders too",
          "es": "Ayuda a otros a crecer y ser líderes"
        },
        "points": {
          "R": 3,
          "V": 2
        }
      },
      {
        "text": {
          "en": "Brings wisdom and clarity in tough moments",
          "es": "Trae sabiduría y claridad en momentos duros"
        },
        "points": {
          "C": 3,
          "S": 2
        }
      }
    ]
  }
];
