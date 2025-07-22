

export interface Pista {
  question: string;
  answer: string;
  letter: string;
  title: string;
}

const pistas: Record<number, Pista> = {
  1: {
    title:'Inscripción en el primer árbol:',
    question: "Recuerda el mes que marcó el inicio de nuestra aventura juntos.",
    answer: "marzo",
    letter: "m",
  },
  2: {
    title:'Segundo árbol, sus ramas dibujan un arco digital y susurra:',
    question: "¿Cómo llamo al lugar virtual donde nuestras miradas se cruzaron por primera vez?",
    answer: "internet",
    letter: "i",
  },
  3: {
    title:'Tercer tronco, cubierto de musgo dice:',
    question: "¿Cómo llamamos al almuerzo que hacemos juntos bajo los árboles?",
    answer: "picnic",
    letter: " p",
  },
  4: {
    title:'Cuarto árbol te reta con un enigma:',
    question: "Cada vez que me tropiezo, tú estallas en…",
    answer: "risa",
    letter: "r",
  },
  5: {
    title:'En el quinto torso de madera aparece:',
    question: "¿Cómo llamas al cosquilleo que me invade antes de verte?",
    answer: "ilusión",
    letter: "i",
  },
  6: {
    title:'Sexto árbol muestra un grabado:',
    question: "¿Con qué cariñoso título me recuerdas cuando pienso en ti?",
    answer: "novio",
    letter: "n",
  },
  7: {
    title:'Séptimo tronco, una partitura tallada pregunta:',
    question: "¿Qué verbo describe nuestra pasión por el micrófono?",
    answer: "cantar",
    letter: "c",
  },
  8: {
    title:'Octavo árbol, cubierto de enredaderas, indica:',
    question: "¿Qué sientes cuando bailamos juntos bajo la luz del sol?",
    answer: "emoción",
    letter: "e",
  },
  9: {
    title:'Noveno tronco, casi caído, susurra:',
    question: "¿Qué es lo primero que me enamora al mirarte despertar?",
    answer: "sonrisa",
    letter: "s",
  },
  10: {
    title:'Décimo y último árbol, sus raíces abrazan la esencia del bosque y susurra:', 
    question: "¿Qué palabra define lo que siento por ti, más fuerte que cualquier otro sentimiento?",
    answer: "amor",
    letter: "a",
  },
};

export default pistas;
