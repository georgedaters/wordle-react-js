const LetterBox = ({ Letter, State }) => {

    const GetLetterCssClass = (State) => {
        switch (State) {
            case 0:
                return "";
            case 1:
                return "correct-letter-guess";
            case 2:
                return "incorrect-letter-guess";
            case 3:
                return "misplaced-letter-guess";
        }

        return "";
    };

    let cssClass = GetLetterCssClass(State);

    cssClass += " letter-box";

    return (

        <div className={ cssClass }>
            { Letter }
        </div>
    );
};

export default LetterBox;