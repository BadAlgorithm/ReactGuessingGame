import {connect} from "react-redux"
import UserInputComponent from "./UserInputComponent";
import {userInputSelector} from "./userInputSelector";

const mapStateToProps = (state) => {
    let userInput =  userInputSelector(state);
    return {
        numberOne: 1,
        numberTwo: 2,
        message: userInput.message,
    }
};

const mapToDispatch = (dispatch) => {
    const buttonClicked = () => {
        dispatch({type: "BTN", payload: {message: "clicked"}})
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