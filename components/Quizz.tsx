"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import pistas, { Pista } from "@/lib/questions";
import { mensajesError } from "@/lib/mensajesError";
import { useGame } from "@/lib/useGame";
import TypingMessage from "./TypingMessage";

export default function Quizz() {
  const [step, setStep] = useState<number>(11);
  const [input, setInput] = useState<string>("");
  const [letras, setLetras] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const { revealedPhrase, revealNextLetter, currentIndex } = useGame();

  const pista: Pista | undefined = pistas[step];

  const getRandomMensaje = () => {
    const index = Math.floor(Math.random() * mensajesError.length);
    return mensajesError[index];
  };

  const handleSubmit = () => {
    if (!pista) return;

    if (input.trim().toLowerCase() === pista.answer.toLowerCase()) {
      setLetras([...letras, pista.letter]);
      setInput("");
      setError("");
      setStep(step + 1);
      revealNextLetter();
    } else {
      setError(getRandomMensaje());
    }
  };

  if (step > 10) {
    return (
      <div className=" flex flex-col items-center justify-center  text-center bg-white rounded-xl shadow-xl p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">
          💖 ¡Descubriste tu identidad secreta! 💖
        </h1>
        <p className="text-2xl">
          Eres... <span className="font-bold italic text-violet-600">"Mi Princesa"</span>
        </p>
        <TypingMessage />
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center justify-center p-4">
      <form
        className="bg-white rounded-xl shadow-xl p-6 max-w-xl text-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="md:text-3xl text-2xl font-semibold mb-4">Pista {step} de 10</h2>
        <p className="mb-4 text-xl md:text-2xl font-semibold">{pista?.title}</p>
        <p className="mb-4 text-xl text-violet-600">Eres <span className="font-bold">{letras.concat()}</span></p>
        <Image
          src={"/arbol.png"}
          alt={"arbol magico"}
          width={600}
          height={600}
          className="mx-auto"
        />
        <p className="mb-4 text-lg">{pista?.question}</p>
        <Input
          autoFocus
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu respuesta aquí"
          className="border p-2 w-full rounded mb-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition mt-4"
        >
          Enviar
        </button>
        {error && (
          <p className="mt-2 text-red-500 text-lg font-semibold">{error}</p>
        )}
      </form>
    </div>
  );
}
