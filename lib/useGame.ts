import { useState } from "react";

const targetPhrase = "mi princesa";

export function useGame() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const revealed = targetPhrase
    .split("")
    .map((char, i) => (i <= currentIndex - 1 ? char : "_"));

  const revealNextLetter = () => {
    if (currentIndex < targetPhrase.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const resetGame = () => setCurrentIndex(0);

  return {
    revealedPhrase: revealed.join(" "),
    revealNextLetter,
    resetGame,
    currentIndex
  };
}
