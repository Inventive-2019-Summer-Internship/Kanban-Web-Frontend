import React, { Component } from 'react'

export class BoardHeader extends Component {
    showDiv = () => {
        console.log("ShowDiv");
        document.getElementById("menuActual").className = "slide-in";
        window.setTimeout(() => {
          document.getElementById("menu").style.display = "block";
          document.getElementById("menuSetup").style.display = "table";
        },100);
    }
    render() {
        return (
        <div className="titleDiv">
          <h3 className="title">{this.props.currentBoard.name}</h3>
          <p onClick={this.showDiv} id="sideBarActivator">&#9776;</p>
          <br />
        </div>
        )
    }
}

export default BoardHeader
