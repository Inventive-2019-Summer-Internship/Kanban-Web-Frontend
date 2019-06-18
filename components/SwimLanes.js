import React, { Component } from 'react'
import SwimLane from './SwimLane'

export class SwimLanes extends Component {
  render() {
    if(this.props.currentBoard.swimLanes !== undefined) {
      return (
          this.props.currentBoard.swimLanes.map((swimLane) =>(
            <SwimLane setCard={this.props.setCard} setDragged={this.props.setDragged} setCurrentSwimlane={this.props.setCurrentSwimlane} swimlane={swimLane} changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}/>))
      )
    }
    return(<div></div>)
  }
}

export default SwimLanes
