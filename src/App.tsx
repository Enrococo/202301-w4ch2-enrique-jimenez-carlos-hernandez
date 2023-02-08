import { useState } from "react";
import "./App.css";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

const originalWord = "JETAIME";

function App() {
  const [letters, updateLetters] = useState<string[]>([]);
  const [currentWord, updateCurrentWord] = useState(
    originalWord.replaceAll(/./g, "_")
  );

  const [errorCount, updateErrorCount] = useState(0);

  const updateUsedLetters = (letter: string) => {
    const hasFinished = errorCount === 6 || !currentWord.includes("_");
    if (letters.indexOf(letter) === -1 && !hasFinished) {
      let newCurrentWord = "";
      for (let i = 0; i < originalWord.length; i++) {
        newCurrentWord += letter === originalWord[i] ? letter : currentWord[i];
      }
      const newErrorCount =
        errorCount + (originalWord.includes(letter) ? 0 : 1);
      updateErrorCount(newErrorCount);
      updateCurrentWord(newCurrentWord);
      updateLetters([...letters, letter]);
    }
  };
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters letters={letters} />
          <Hangman errors={errorCount} />
        </div>
        <GuessLetters partialHiddenWord={currentWord} />
        <Result errorCount={errorCount} wordToGuess={currentWord} />
        <Letters onUpdate={updateUsedLetters} />
      </div>
    </>
  );
}

export default App;
