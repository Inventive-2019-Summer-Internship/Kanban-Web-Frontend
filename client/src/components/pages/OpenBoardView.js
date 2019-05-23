///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
import SwimLanes from '../SwimLanes'
import AddSwimLane from '../AddSwimLane'


//////////////////////////////////////////////////////////////////

/**
 * This is the OpenBoardView component, it currently displays board telemetry to ensure
 * the board has in fact changed to a new board
 * TODO: Insert actual board functionality
 */
export class OpenBoardView extends React.Component {
  addSwimLane = (name) => {
    this.props.addSwimLane(name, this.props.currentBoard.id);
  }
  changeBoardName = () => {
    var name = prompt("Name your Board", this.props.currentBoard.name);
    if(name === null || name === "" || name === this.props.currentBoard.name) {
        alert("Name Unchanged");
    }
    else {
        this.props.changeBoardName(name, this.props.currentBoard.id);
    }
  }
  changeBoardBG = () => {
    var name = prompt("Change the Background of your Board", this.props.currentBoard.img);
    if(name === null || name === "" || name === this.props.currentBoard.img) {
        alert("Background Unchanged");
    }
    else {
        this.props.changeBoardBG(name, this.props.currentBoard.id);
    }
  }
  deleteBoard = () => {
    var name = prompt("Are you sure you want to delete this board? Type in the board's name to verify deletion.");
    if(name === null || name === "" || !name.match(new RegExp(this.props.currentBoard.name,'i','g'))) {
        alert("Board Not Deleted");
    }
    else {

        this.props.deleteBoard(this.props.currentBoard.id);
    }
  }
  render() {
    return (
      <div style={{height:"90%"}}>
        <h3  class="title">{this.props.currentBoard.name}</h3>
        <hr/>
        <div class="options">
          <h3 onClick={this.changeBoardName} style={{display:"inline"}}>{"Change Board name"}</h3>
          <h3 onClick={this.changeBoardBG} style={{display:"inline"}}>{"Change Board Background"}</h3>
          <h3 onClick={this.deleteBoard} style={{display:"inline"}}>{"🗑 Delete Board"}</h3>
        </div>
        
        <div style={{display:'flex', height:"100%", overflowX:"auto", flexWrap: "nowrap"}}>
          <SwimLanes currentBoard={this.props.currentBoard}/>
          <AddSwimLane addSwimLane={this.addSwimLane} />
        </div>
        
      </div>
    )
  }
}
/**
 * Proptypes object
 * EDIT THIS WHENEVER YOU CREATE A NEW PROP 
 * FOR DATA TRANSMISSION
 */
OpenBoardView.propTypes = {
    currentBoard: PropTypes.object.isRequired,
    changeBoardName: PropTypes.func.isRequired,
    changeBoardBG: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired
}
export default OpenBoardView
