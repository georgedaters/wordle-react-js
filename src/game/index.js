import WordGrid from "./WordGrid";
import useGameState from "./useGameState";
import useKeyDown from "./useKeyDown";
import useKeyPress from "./useKeyPress";

const Game = ({ currentWord, onPickNewWord }) => {

    const {
        guesses,
        currentGuess,
        addToGuess,
        deleteFromGuess,
        guessWord,
        solvedState,
        giveUp,
        reset,
    } = useGameState(currentWord);

    let words = [];

    useKeyDown((key, event) => {

        if (solvedState) {
            return;
        }

        if (event.keyCode == 8) {
            console.log('deleteFromGuess');
            deleteFromGuess();

            event.preventDefault();
        }

        if (key.length == 1 && key.search(/^[a-zA-Z]*$/) == 0 && currentGuess.length < 5) {
            addToGuess(key);

            event.preventDefault();
        }
    }, []);

    useKeyPress((key, event) => {

        if (solvedState) {
            return;
        }

        console.log(event.keyCode);

        if (event.keyCode == 13 && currentGuess.length == 5) {
            guessWord(currentGuess);

            event.preventDefault();
        }

    }, []);

    const GetStateFromGuess = (currentWord, guess, i) => {
        if (currentWord[i] == guess[i]) {
            return 1;
        }

        // If the letter appears anywhere else in the word then it is misplaced
        for (let j = 0; j < 5; j++) {
            if (currentWord[j] == guess[i]) {
                return 3;
            }
        }

        return 2;
    };

    const GetWordFromGuess = (guess) => {

        // A word is defined by an array of 5 letter objects
        let wordArray = [];
        for (let i = 0; i < 5; i++) {
            let state = GetStateFromGuess(currentWord, guess, i);

            wordArray.push({ Letter: guess[i], State: state });
        }

        return wordArray;
    };

    guesses.forEach((item) => {
        words.push(GetWordFromGuess(item));
    });

    if (currentGuess) {
        let currentGuessWord = [];
        for (let i = 0; i < currentGuess.length; i++) {
            currentGuessWord.push({ Letter: currentGuess[i], State: 0 });
        }
        while (currentGuessWord.length < 5) {
            currentGuessWord.push({ Letter: " ", State: 0 });
        };

        words.push(currentGuessWord);
    }

    // Pad the amount words so that there are always 5
    for (let i = words.length; i < 5; i++) {
        words.push([
            { Letter: " ", State: 0 },
            { Letter: " ", State: 0 },
            { Letter: " ", State: 0 },
            { Letter: " ", State: 0 },
            { Letter: " ", State: 0 }]);
    }


    const pickAnotherWord = () => {
        reset();
        onPickNewWord();
    };

    return (

        <div>
            <WordGrid Words={words} />

            <div className="end-game-container">
                {solvedState == "lost" && <div>You lost :( The correct word was "{currentWord.toUpperCase()}"</div>}
                {solvedState == "won" && <div>Well done, you guessed the correct word!</div>}
                {!solvedState && guesses.length > 0 && (<button onClick={giveUp} className="big-button">Give up</button>)}
                {solvedState && (<button onClick={pickAnotherWord} className="big-button button-green">Play Again</button>)}
            </div>
        </div>
    );
};

export default Game;
