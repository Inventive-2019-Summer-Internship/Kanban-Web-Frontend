import React, { Component } from 'react'
import SwimLane from './SwimLane'
import uuid from 'uuid/v4';

export class SwimLanes extends Component {
  render() {
    if(this.props.currentBoard.swimLanes !== undefined) {
      return (
          this.props.currentBoard.swimLanes.map((swimLane) =>(
            <SwimLane setCard={this.props.setCard} setDragged={this.props.setDragged} 
                      setCurrentSwimlane={this.props.setCurrentSwimlane} swimlane={swimLane} 
                      changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}
                      addHoveredCardToLane={this.props.addHoveredCardToLane} 
                      setHoverSwimlane={this.props.setHoverSwimlane} 
                      setAbove={this.props.setAbove} dropAbove={this.props.dropAbove}/>))
      )
    }
    return(<React.Fragment></React.Fragment>)
  }
}

export default SwimLanes
