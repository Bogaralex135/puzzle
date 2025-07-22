"use client";
import { useEffect, useState } from "react";

const message = `Desde que llegaste, todo cambió para bien.

A veces no entiendo cómo en tan poco tiempo lograste hacerme sentir tanto. Eres mi risa favorita, mi paz en días pesados, mi razón para esforzarme y mi lugar seguro.

Gracias por cada momento, por cada mirada, por cada abrazo que me calma.

Amo tu sonrisa, tu forma de ver la vida, y cómo haces que todo tenga sentido solo con estar.

No sé cómo será el futuro, pero si es contigo, estoy listo para todo.

Te amo, mi princesa hermosa. Feliz 4 meses. 💖`;

export default function TypingMessage() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex((prev) => prev + 1);
      }, 70); // Velocidad de escritura (ms por letra)

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="whitespace-pre-wrap tracking-widest  text-lg sm:text-xl  font-medium max-w-2xl mx-auto mt-10 text-center">
      {displayedText}
    </div>
  );
}
