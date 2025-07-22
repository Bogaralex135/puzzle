"use client";

import Quizz from "./Quizz";
import { useState } from "react";

export default function Start() {
  const [start, setStart] = useState<boolean>(false);

  return (
    <div className="absolute min-h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col">
      {start ? (
        <Quizz />
      ) : (
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full text-center">
          <p className=" font-bold md:text-3xl mb-4 text-lg">
            Bienvenida a descubrir tu verdadera identidad!
          </p>

          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            onClick={() => {
              setStart(true);
            }}
          >
            Comenzar
          </button>
        </div>
      )}
    </div>
  );
}
