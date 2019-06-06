import React, { Component } from 'react'
import SwimLanes from './SwimLanes'
import AddSwimLane from './AddSwimLane'
import uuid from 'uuid/v4';


export class SwimLaneView extends Component {
    state = {
        dragged: { },
        overSwimlane: ""
    }
    
    setDragged = (object, type) => {
        let draggedObj = object
        draggedObj.type = type
        this.setState({dragged: draggedObj})
    }
    setHoverSwimlane = (swimlaneId) => {
        this.setState({overSwimlane: swimlaneId})
    }
    addHoveredCardToLane = (swimlaneId) => {
        this.props.moveCard(this.state.dragged.id, this.state.dragged.originSwimlane, this.state.overSwimlane)
    }
    render() {
        return (
            <div style={{display:'flex', overflowX:"auto", flexWrap: "nowrap",height:"90%"}} >
                <SwimLanes setDragged={this.setDragged} setCard={this.props.setCard} 
                           setCurrentSwimlane={this.props.setCurrentSwimlane} currentBoard={this.props.currentBoard}
                           changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}
                           addHoveredCardToLane={this.addHoveredCardToLane}
                           setHoverSwimlane={this.setHoverSwimlane}/>
                <AddSwimLane addSwimLane={this.props.addSwimLane} />
            </div>
        )
    }
}

export default SwimLaneView
