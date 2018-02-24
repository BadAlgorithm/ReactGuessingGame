import GameController from "../../src/controller/controller"

describe("GameController", function () {
    it("Should correct if guess and target are equal", () => expect(GameController.getPrompt(1, 1)).toEqual("correct!"));
    it("Should tell to guess higher if guess is lower", () => expect(GameController.getPrompt(5, 4)).toEqual("guess higher"));
    it("Should tell to guess lower if guess is higher", () => expect(GameController.getPrompt(5, 6)).toEqual("guess lower"));
    it("Should prompt invalid if non-number is entered", () => expect(GameController.getPrompt(5, "hello")).toEqual("invalid guess"));
    it("Should prompt invalid if undefined is passed in", () => expect(GameController.getPrompt(5, undefined)).toEqual("invalid guess"));

    it("Should return correct number of guesses",
        () => expect(GameController.countGuesses([1, 2, 3, 4])).toEqual(4)
    );
    it("Should return true when game is over",
        () => expect(GameController.isGuessCorrect(2, 2)).toEqual(true)
    );
    it("Should return false on an incorrect Guess",
        () => expect(GameController.isGuessCorrect(1, 2)).toEqual(false)
    );
});
