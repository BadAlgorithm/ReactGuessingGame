import {mapStateToProps, mapToDispatch} from "../../src/game_feature/user_input_feature/UserInputContainer"

describe("User Input Component", () => {
    it("should recieve an event with a 'userInput' key", () => {
        console.log(`props are ${mapStateToProps({userInput: 120})}`);
        expect(mapToDispatch())
    })
});