import React from "react";
import {Input} from "semantic-ui-react";

const UserInputComponent = (props) => {
    return (
        <div itemID="myid">
            <h1>User Input</h1>
            <p>My User Input Feature, automatically deployed!</p>
            <Input id="inputOne" onChange={props.getInput}/>
            <Input id="inputTwo" onChange={props.getInput}/>
            <p>{props.message}</p>
        </div>
    )
};

export default UserInputComponent;