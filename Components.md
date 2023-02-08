App:
·Needs: Child components and logic
·Responsabilities: Contain the rest of the components to render the game
·Execution Changes:

GuessedLetters:
·Needs: Input letter
·Responsabilities: renders underline spots with the same length of the word to guess
·Execution Changes: subtstitutes underlines for the guessed letters

UsedLetters:
·Needs: Input letter
·Responsabilities: renders the used letters (no repeat)
·Execution Changes:

Result:
·Needs: The guessed word
·Responsabilities: Render the guessed word, if the user wins, will render "You're alive!", else will render "You're dead!"
·Execution Changes: end game

Letters:
·Needs:
·Responsabilities: Alphabet clickable letters to play.
·Execution Changes: if the selected letter is included in the word it will render on the right spot/s of the word

Hangman:
·Needs: A letter clicked
·Responsabilities: render the hangman on the app
·Execution Changes:if the choosen letter is not on the word, the hangman will loose a limb, if the letter is on the word, it will remain the same (no changes)
