import React, { Component } from 'react'


export class BoardHeader extends Component {
    showDiv = () => {
        //console.log("ShowDiv");
        document.getElementById("menuActual").className = "slide-in";
        window.setTimeout(() => {
          document.getElementById("menu").style.display = "block";
          document.getElementById("menuSetup").style.display = "table";
        },100);
        document.getElementById("addCardForm").className = "slide-down";
        window.setTimeout(() => {
            document.getElementById("addCardForm").style.display = "none";
          },450);
        document.getElementById('addCardName').value = "";
        document.getElementById('addCardDescription').value = "";
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
