import React from "react";
import {Input, Button} from "semantic-ui-react";

const UserInputComponent = (props) => {
    return (
        <div itemID="myid">
            <h1>User Input</h1>
            <p>My User Input Feature, automatically deployed!</p>
            <Input id="inputOne" onChange={props.getInput}/>
            <Input id="inputTwo" onChange={props.getInput}/>
            <Button name="clickButton" onClick={props.buttonClicked}>Click Me!</Button>
            <p>{props.message}</p>
        </div>
    )
};

export default UserInputComponent;