import { useState } from "react";
import "./Letters.css";

let choosenLetterA: string[] = [];

export const chooseLetter = (x: string) => {
  choosenLetterA.push(x);
  console.log(choosenLetterA);
};

const Letters = () => {
  let [choosenLetter, updateChoosenLetters] = useState(choosenLetterA);
  return (
    <ul className="letters">
      <li className="letter">
        <span
          onClick={(event) => {
            updateChoosenLetters(choosenLetter.concat("A"));
            console.log(choosenLetter);
            choosenLetterA = choosenLetter;
          }}
        >
          A
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("B");
          }}
        >
          B
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("C");
          }}
        >
          C
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("D");
          }}
        >
          D
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("E");
          }}
        >
          E
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("F");
          }}
        >
          F
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("G");
          }}
        >
          G
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("H");
          }}
        >
          H
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("I");
          }}
        >
          I
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("J");
          }}
        >
          J
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("K");
          }}
        >
          K
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("L");
          }}
        >
          L
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("M");
          }}
        >
          M
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("N");
          }}
        >
          N
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("Ñ");
          }}
        >
          Ñ
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("O");
          }}
        >
          O
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("P");
          }}
        >
          P
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("Q");
          }}
        >
          Q
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("R");
          }}
        >
          R
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("S");
          }}
        >
          S
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("T");
          }}
        >
          T
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("U");
          }}
        >
          U
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("V");
          }}
        >
          V
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("W");
          }}
        >
          W
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("X");
          }}
        >
          X
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("Y");
          }}
        >
          Y
        </span>
      </li>
      <li className="letter">
        <span
          onClick={(event) => {
            chooseLetter("Z");
          }}
        >
          Z
        </span>
      </li>
    </ul>
  );
};
export const usedLetters = choosenLetterA;
console.log(usedLetters);
export default Letters;
