import WordEntry from "./WordEntry";

const WordGrid = ({ Words }) => {

    return (<div className="word-grid">

        <WordEntry Word={Words[0]} ></WordEntry>
        <WordEntry Word={Words[1]}></WordEntry>
        <WordEntry Word={Words[2]}></WordEntry>
        <WordEntry Word={Words[3]}></WordEntry>
        <WordEntry Word={Words[4]}></WordEntry>
    </div>);
};

export default WordGrid;