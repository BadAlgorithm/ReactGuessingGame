import React from "react"
import UserInputComponent from "../user_input_feature/UserInputComponent";
import InstructionsComponent from "../instructions_feature/Instructions"
import {Tab} from "semantic-ui-react"

const tabs = [
    {menuItem: "Instructions1", render: () => <InstructionsComponent/>},
    {menuItem: "Game", render: () => <UserInputComponent/>}
];
const RootComponent = () => {
        return (
            <div itemID="root_div">
                <h1>Hello guessing game app!</h1>
                <Tab panes={tabs}/>
            </div>
        );
    };

export default RootComponent;