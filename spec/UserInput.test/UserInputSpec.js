// import {mapStateToProps, mapToDispatch} from "../../src/game_feature/user_input_feature/UserInputContainer"
import * as selectors from "../../src/game_feature/user_input_feature/userInputSelector"

describe("User Input Component", () => {
    it("should return the userGuess from State", () => {
        const mockState = {userGuess: 10, guessedCorrect: false};
        const selectedInput =  selectors.userInputSelector(mockState);
        expect(selectedInput).toBe(10);
    })
});
