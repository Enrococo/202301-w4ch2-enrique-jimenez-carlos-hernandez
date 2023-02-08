import "./UsedLetters.css";
import { FC } from "react";

interface UsedLettersProps {
  letters: string[];
}

const UsedLetters: FC<UsedLettersProps> = ({ letters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {letters.map((letter, i) => (
          <li key={letter} className="used-letters">
            {letter}
            {i < letters.length - 1 ? ", " : ""}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
