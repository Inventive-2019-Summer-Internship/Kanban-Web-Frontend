import React, { Component } from 'react'
import SwimLanes from './SwimLanes'
import AddSwimLane from './AddSwimLane'


export class SwimLaneView extends Component {
    state = {
        dragged: { }
    }
    
    setDragged = (object, type) => {
        let draggedObj = object
        draggedObj.type = type
        this.setState({dragged: draggedObj})
    }
    render() {
        return (
            <div style={{display:'flex', overflowX:"auto", flexWrap: "nowrap",height:"90%"}} >
                <SwimLanes setDragged={this.setDragged} setCard={this.props.setCard} setCurrentSwimlane={this.props.setCurrentSwimlane} currentBoard={this.props.currentBoard} changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}/>
                <AddSwimLane addSwimLane={this.props.addSwimLane} />
            </div>
        )
    }
}

export default SwimLaneView
