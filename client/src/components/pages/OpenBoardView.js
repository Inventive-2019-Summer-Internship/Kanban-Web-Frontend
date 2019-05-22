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
  render() {
    return (
      <div style={{height:"90%"}}>
        <div style={{height:"auto", width: "100%", color:"#ffffff", marginBottom:"1vmin"}}>
          <h3 style={{display:"inline"}}>{this.props.currentBoard.name}</h3>
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
    currentBoard: PropTypes.object.isRequired
}
export default OpenBoardView
