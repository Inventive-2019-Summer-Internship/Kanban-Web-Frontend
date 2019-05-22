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
        <div onClick={this.AddSwimLane} style={{backgroundColor: "#4b5162",flex: "0 0 auto",borderRadius: "7px", marginLeft: "3vmin", width: "20vmax", height:'15vmin'}}>
            <span style={{fontSize:"10vmin"}}>+</span>        
        </div>
    )
    }
}

export default AddSwimLane
