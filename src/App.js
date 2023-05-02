import "./App.css";
import Game from "./game/";
import AppHeading from "./AppHeading";
import PossibleWords from "./PossibleWords";
import { useState, useEffect } from "react";

function App() {
    const [currentWord, setCurrentWord] = useState("");

    const pickRandomWord = (wordsArray) => {
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const newWord = wordsArray[randomIndex].toLowerCase();
        console.log(`Setting word to '${newWord}'`);
        setCurrentWord(newWord);
    };

    const tryAnotherWord = () => {
        pickRandomWord(PossibleWords);
    };

    useEffect(() => {
        pickRandomWord(PossibleWords);
    }, []);


    return (
        <>
            <div className="play-container">
                <div className="play-flex">
                    <AppHeading />
                    {currentWord && (
                        <Game currentWord={currentWord} onPickNewWord={tryAnotherWord}
                        />
                    )}

                    {!currentWord && <div>Loading...</div>}
                </div>
            </div>
        </>
    );
}

export default App;
