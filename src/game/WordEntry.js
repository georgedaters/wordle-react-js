import LetterBox from "./LetterBox";

const WordEntry = ({ Word }) => {

    return (
        <div className="letter-grid-row">
            <LetterBox Letter={Word[0].Letter} State={Word[0].State} />
            <LetterBox Letter={Word[1].Letter} State={Word[1].State} />
            <LetterBox Letter={Word[2].Letter} State={Word[2].State} />
            <LetterBox Letter={Word[3].Letter} State={Word[3].State} />
            <LetterBox Letter={Word[4].Letter} State={Word[4].State} />
        </div>
    );
};

export default WordEntry;