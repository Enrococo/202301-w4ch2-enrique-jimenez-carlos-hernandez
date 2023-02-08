import { FC } from "react";
import "./Hangman.css";
import { hangManElements } from "./hang-man-body";

interface HangmanProps {
  errors: number;
}

const Hangman: FC<HangmanProps> = ({ errors }) => {
  return (
    <div className="hangman-container">
      <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
        {hangManElements.slice(0, errors)}
        <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
        <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
        <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
        <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
        <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
      </svg>
    </div>
  );
};

export default Hangman;
