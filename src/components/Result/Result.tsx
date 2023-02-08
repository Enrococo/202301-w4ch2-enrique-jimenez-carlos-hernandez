import { FC } from "react";
import "./Result.css";

interface ResultProps {
  errorCount: number;
  wordToGuess: string;
}

const Result: FC<ResultProps> = ({ errorCount, wordToGuess }) => {
  const hasFinished = errorCount === 6 || !wordToGuess.includes("_");
  return (
    <>
      {hasFinished ? (
        <section className="game-result">
          {errorCount === 6 ? "You're dead!" : "You Survived!"}
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
export default Result;
