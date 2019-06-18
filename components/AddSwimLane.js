import React, { Component } from 'react'

export class AddSwimLane extends Component {
    AddSwimLane = () => {
        var name = prompt("Name your lane", "Default Lane Name");
        if(name === "" || name === null) {
            alert("New swim lane was not created");
        }
        else {
            this.props.addSwimLane(name);
        }
    }
    render() {
    return (
        <div onClick={this.AddSwimLane} className="newLane">
            <p>+Add SwimLane</p>        

        </div>
    )
    }
}

export default AddSwimLane
