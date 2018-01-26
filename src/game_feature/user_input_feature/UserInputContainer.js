import {connect} from "react-redux"
import UserInputComponent from "./UserInputComponent";
import {userInputSelector} from "./userInputSelector";
import * as actions from "./actions";

const mapStateToProps = (state) => {
    let userInput =  userInputSelector(state);
    return {
        numberOne: 1,
        numberTwo: 2,
        message: userInput.message,
    }
};

const mapToDispatch = (dispatch) => {
    const buttonClicked = (event) => {
        console.log(event.target.name);
        switch (event.target.name) {
            case actions.types.SUBMIT_TYPE:
        }
        dispatch(actions.creators.submitCreator())
    };
    const getInput = (event) => {
        console.log(event)
    };
    return {
        buttonClicked,
        getInput
    }

};

export default connect(mapStateToProps, mapToDispatch)(UserInputComponent)