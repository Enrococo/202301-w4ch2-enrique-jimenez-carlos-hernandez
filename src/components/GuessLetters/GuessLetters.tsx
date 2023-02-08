import { FC } from "react";
import "./GuessLetters.css";

interface GuessLettersProps {
  partialHiddenWord: string;
}

const GuessLetters: FC<GuessLettersProps> = ({ partialHiddenWord }) => {
  const wordSplitted = partialHiddenWord.split("");
  return (
    <ul className="guess-letters">
      {wordSplitted.map((letter, i) => (
        <li key={i} className={`guess-letter ${letter === "_" ? "empty" : ""}`}>
          {letter === "_" ? "" : letter.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default GuessLetters;
