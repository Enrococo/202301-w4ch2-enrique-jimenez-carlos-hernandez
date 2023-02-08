import { FC } from "react";
import "./Letters.css";

const alphabetLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

interface LettersProps {
  onUpdate: (letter: string) => void;
}

const Letters: FC<LettersProps> = ({ onUpdate }) => {
  const handleLetterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const selectedLetter = event.currentTarget.textContent ?? "";
    onUpdate(selectedLetter);
  };

  return (
    <ul className="letters">
      {alphabetLetters.map((letter) => (
        <li key={letter} className="letter">
          <a onClick={handleLetterClick} href={letter.toLocaleLowerCase()}>
            {letter}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
