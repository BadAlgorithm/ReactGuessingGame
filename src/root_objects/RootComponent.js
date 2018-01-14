import React from "react";
import UserInputContainer from "../game_feature/user_input_feature/UserInputContainer";
import InstructionsComponent from "../instructions_feature/Instructions";
import {Tab} from "semantic-ui-react";

const tabs = [
    {menuItem: "Instructions1", render: () => <InstructionsComponent/>},
    {menuItem: "Game", render: () => <UserInputContainer/>}
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