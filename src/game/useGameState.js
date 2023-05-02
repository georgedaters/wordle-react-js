import { useState } from "react";

const useGameState = (currentWord) => {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [solvedState, setSolvedState] = useState(false);

    const giveUp = () => {
        setSolvedState("lost");
    };

    const addToGuess = (letter) => {
        if (currentGuess.length < 5) {
            console.log(`Adding ${letter} to guess`);

            setCurrentGuess(currentGuess + letter);
        }
    }

    const deleteFromGuess = () => {
        if (currentGuess.length > 0) {
            setCurrentGuess(currentGuess.substring(0, currentGuess.length - 1));
        }
    };

    const reset = () => {
        setGuesses([]);
        setCurrentGuess("");
        setSolvedState(false);
    }

    const guessWord = (guessedWord) => {

        console.log('guessWord: ' + guessedWord);

        if (!guessedWord) {
            return false;
        }

        if (guesses.length >= 5) {
            return false;
        }

        guessedWord = guessedWord.toLowerCase();

        console.log(`Guessing '${guessedWord}' Current word: '${currentWord}'`);

        console.log(currentWord);

        guesses.push(guessedWord);
        setGuesses(guesses);

        console.log(`${guesses.length} have been made`);

        setCurrentGuess("");

        if (guessedWord === currentWord) {
            console.log("The correct word was guessed");
            setSolvedState("won");
            return true;
        }
        else if (guesses.length >= 5) {
            setSolvedState("lost");
        }

        return true;
    };

    return {
        guesses,
        currentGuess,
        addToGuess,
        deleteFromGuess,
        guessWord,
        solvedState,
        giveUp,
        reset,
    };
};

export default useGameState;
