import GameController from "../../src/controller/controller"

describe("GameController", function () {
    it("Should correct if guess and target are equal",
        () => expect(GameController.getPrompt(1, 1)).toEqual("correct!")
    );
    it("Should return correct number of guesses",
        () => expect(GameController.countGuesses([1, 2, 3, 4])).toEqual(4)
    );
    it("Should return true when game is over",
        () => expect(GameController.isGameOver(2, 2)).toEqual(true)
    );
    it("Should return false on an incorrect Guess",
        () => expect(GameController.isGameOver(1,2)).toEqual(false)
    );
});
