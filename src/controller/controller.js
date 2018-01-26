const countGuesses = (guessArray) => {
    "use strict";
    return guessArray.length;
};

const getPrompt = (targetNum, guessNumber) => {
    "use strict";
    if (guessNumber > targetNum) {
        return "guess lower";
    } else if (guessNumber < targetNum) {
        return "guess higher";
    } else if (guessNumber === targetNum) {
        return "correct!"
    } else {
        return "invalid guess"
    }
};

const isGuessCorrect = (targetNum, guessNum) => {
    "use strict";
    return targetNum === guessNum;
};

export default {
    isGameOver,
    getPrompt,
    countGuesses
}