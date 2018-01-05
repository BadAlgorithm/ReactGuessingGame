import GameController from "../../src/controller/controller"

describe("GameController", function () {
    it("Should correct if guess and target are equal", function () {
        expect(GameController.getPrompt(1, 1)).toEqual("correct!");
    });
});
