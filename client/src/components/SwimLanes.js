import React, { Component } from 'react'
import SwimLane from './SwimLane'
export class SwimLanes extends Component {
  render() {
    if(this.props.currentBoard.swimLanes !== undefined) {
      return (
          this.props.currentBoard.swimLanes.map((swimLane) =>(
            <SwimLane swimlane={swimLane} />))
      )
    }
    return(<div></div>)
  }
}

export default SwimLanes
