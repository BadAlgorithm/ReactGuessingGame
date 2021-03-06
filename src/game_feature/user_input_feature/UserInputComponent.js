import React from "react";
import {Input, Button} from "semantic-ui-react";
import PropTypes from "prop-types";

const UserInputComponent = (props) => {
    return (
        <div itemID="myid">
            <h1>User Input</h1>
            <p>My User Input Feature, automatically deployed!</p>
            <Input id="inputChoice" onChange={props.getInput}/>
            <Button name="userSelected" onClick={props.buttonClicked}>Click Me!</Button>
            <p>{props.message}</p>
        </div>
    )
};

UserInputComponent.propTypes = {
};

export default UserInputComponent;