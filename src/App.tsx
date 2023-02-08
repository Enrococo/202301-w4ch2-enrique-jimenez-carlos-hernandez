import { useState } from "react";
import "./App.css";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const [letters, updateLetters] = useState<string[]>([]);

  const updateUsedLetters = (letter: string) => {
    if (letters.indexOf(letter) === -1) {
      updateLetters([...letters, letter]);
    }
  };
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters letters={letters} />
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <Letters onUpdate={updateUsedLetters} />
      </div>
    </>
  );
}

export default App;
