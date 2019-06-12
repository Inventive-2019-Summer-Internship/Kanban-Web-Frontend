import React, { Component } from 'react'
import SwimLanes from './SwimLanes'
import AddSwimLane from './AddSwimLane'
import uuid from 'uuid/v4';


export class SwimLaneView extends Component {
    state = {
        delete: false,
        dragged: { },
        overSwimlane: "",
        above: {}
    }
    setAbove = (card) => {
        this.setState({above: card})
    }
    setDragged = (object, type) => {
        let draggedObj = object
        draggedObj.type = type
        this.setState({dragged: draggedObj})
    }
    setDelete = (deleteVal) => {
        this.setState({delete: deleteVal})
    }
    dropOnDelete = () => {
        this.props.deleteCard(this.state.dragged.id, this.state.dragged.originSwimlane)
    }
    setHoverSwimlane = (swimlaneId) => {
        this.setState({overSwimlane: swimlaneId})
    }
    addHoveredCardToLane = (swimlaneId) => {
        this.props.moveCard(this.state.dragged.id, this.state.dragged.originSwimlane, this.state.overSwimlane)
    }
    dropAbove = () => {
        console.log(this.state.above.swimlaneId)
        console.log(this.state.overSwimlane)
        this.props.moveCardAbove(this.state.dragged.id, this.state.dragged.originSwimlane, this.state.above.swimlaneId, this.state.above.id)
    }
    render() {
        return (
            <div style={{display:'flex', overflowX:"auto", flexWrap: "nowrap",height:"90%"}} >
                <SwimLanes setDragged={this.setDragged} setCard={this.props.setCard} 
                           setCurrentSwimlane={this.props.setCurrentSwimlane} currentBoard={this.props.currentBoard}
                           changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}
                           addHoveredCardToLane={this.addHoveredCardToLane}
                           setHoverSwimlane={this.setHoverSwimlane} setAbove={this.setAbove}
                           dropAbove={this.dropAbove} setDelete={this.setDelete}
                           dropOnDelete={this.dropOnDelete}/>
                <AddSwimLane addSwimLane={this.props.addSwimLane} />
            </div>
        )
    }
}

export default SwimLaneView
