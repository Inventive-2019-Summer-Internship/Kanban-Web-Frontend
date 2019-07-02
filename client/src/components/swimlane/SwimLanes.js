import React, { Component } from 'react'
import SwimLane from './SwimLane'
import MoveSwimLanePointer from './MoveSwimLanePointer';

export class SwimLanes extends Component {
  state = {
    overSwimlane: ""
  }
  overSwimlane = (value) => {
    this.setState({overSwimlane: value})
  }
  render() {
    //console.log(this.props.currentBoard.swimLanes)
    if(this.props.currentBoard.swimLanes !== undefined) {
      return (
          this.props.currentBoard.swimLanes.map((swimlane) =>(
            <React.Fragment>
              <MoveSwimLanePointer overSwimlane={this.state.overSwimlane} swimlane={swimlane}
                                   dragged={this.props.dragged} moveSwimlane={this.props.moveSwimlane}
                                   atEnd={this.props.atEnd}/>
              <SwimLane setCard={this.props.setCard} setDragged={this.props.setDragged} 
                      setCurrentSwimlane={this.props.setCurrentSwimlane} swimlane={swimlane} 
                      changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}
                      addHoveredCardToLane={this.props.addHoveredCardToLane} 
                      setHoverSwimlane={this.props.setHoverSwimlane} 
                      setAbove={this.props.setAbove} dropAbove={this.props.dropAbove}
                      setDelete={this.props.setDelete} dropOnDelete={this.props.dropOnDelete}
                      overSwimlane={this.overSwimlane} dragged={this.props.dragged}/>
              
              
            </React.Fragment>
            ))
      )
    }
    return(<React.Fragment></React.Fragment>)
  }
}

export default SwimLanes
