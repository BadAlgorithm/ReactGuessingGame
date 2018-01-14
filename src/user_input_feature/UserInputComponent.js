import React from "react";
import {Input} from "semantic-ui-react";

class InputComponent extends React.Component {

    constructor(){
        super();
        this.getInput = this.getInput.bind(this);
        this.state = {numberOne: 0, numberTwo: 0}
    }

    getInput(event){
        const id = event.target.id;
        const value = parseInt(event.target.value)
        const update = {};
        switch (id){
            case "inputOne":
                update.numberOne = value;
                break;
            case "inputTwo":
                update.numberTwo = value;
                break;
            default :
                break;
        }
        this.setState(update, () => console.log(this.state));
    };

    render(){
        const addNumbers = this.state.numberOne + this.state.numberTwo;
        return (
            <div itemID="myid">
                <h1>User Input</h1>
                <p>My User Input Feature, automatically deployed!</p>
                <Input id="inputOne" onChange={this.getInput}/>
                <Input id="inputTwo" onChange={this.getInput}/>
                <p>{this.state.numberOne + this.state.numberTwo}</p>
            </div>
        )
    }
}


export default InputComponent;