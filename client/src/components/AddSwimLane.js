import React, { Component } from 'react'

export class AddSwimLane extends Component {
    AddSwimLane = () => {
        var name = prompt("Name your lane", "Default Lane Name");
        if(name === "" || name === null) {
            alert("Try again");
        }
        else {
            this.props.addSwimLane(name);
        }
    }
    render() {
    return (
        <div onClick={this.AddSwimLane} className="newLane" style={{height:"18%"}}>
            <p>+</p>        

        </div>
    )
    }
}

export default AddSwimLane
