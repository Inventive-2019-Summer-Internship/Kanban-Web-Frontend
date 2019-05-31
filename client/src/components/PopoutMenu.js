import React, { Component } from 'react'

export class PopoutMenu extends Component {
    hideDiv = () => {
        //console.log("HideDiv");
        document.getElementById("menuActual").className = "slide-out";
        document.getElementById("menuSetup").style.display = "none";
        window.setTimeout(() => {
          document.getElementById("menu").style.display = "none";
        },450);
    }
    render() {
        return (
            <div id="menu">
            <div id="menuSetup" onClick={this.hideDiv}>
              <p className="exitPopoutText">Exit Menu</p>
            </div>
            <div id="menuActual">
                <p onClick={this.props.changeBoardName}>Change Board Name</p>
                <p onClick={this.props.changeBoardBG}>Change Board Background</p>
                <p className="deletePopout" onClick={this.props.deleteBoard}>🗑 Delete Board</p>
            </div>
        </div>
        )
    }
}

export default PopoutMenu
