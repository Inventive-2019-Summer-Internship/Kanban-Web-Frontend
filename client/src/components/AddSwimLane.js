import React, { Component } from 'react'

export class AddSwimLane extends Component {
    AddSwimLane = () => {
        var name = prompt("Name your lane", "Default Lane Name");
        if(name === "") {
            alert("Try again");
        }
        else {
            this.props.addSwimLane(name);
        }
    }
    render() {
    return (
        <div className="newLane" onClick={this.AddSwimLane}>
            <span style={{fontSize:"10vmin", color:"#a21747"}}>+</span>        
        </div>
    )
    }
}

export default AddSwimLane
