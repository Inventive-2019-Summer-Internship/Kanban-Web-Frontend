import React, { Component } from 'react'
import SwimLanes from './SwimLanes'
import AddSwimLane from './AddSwimLane'
import uuid from 'uuid/v4';


export class SwimLaneView extends Component {
    state = {
        delete: false,
        dragged: { },
        overSwimlane: "",
        above: {},
        inFrontOf: {},
        atEnd: false
    }
    onDragEnter = (evt) => {
        if(this.state.dragged.type === "swimlane") {
            //console.log("at end")
            //this.setState({atEnd: true})
        }
    }
    onDragExit = (evt) => {
        if(this.state.dragged.type === "swimlane") {
            //console.log("somewhere else")
            //this.setState({atEnd: false})
        }
    }
    onDragOver = (evt) => {
        evt.preventDefault();
    }
    atEnd = (newEndVal) => {
        this.setState({atEnd: newEndVal})
    }
    onDrop = (evt) => {
        if(!this.state.atEnd) {
            //console.log("dropped in front of", evt)
            this.props.moveSwimlaneInFrontOfTargetSwimlane(this.state.dragged.id, evt)
        }
        else {
            //evt.preventDefault()
            //console.log("dropped at the end")
            this.props.moveSwimlaneToEnd(this.state.dragged.id)
        }
        
        
    }

    setAbove = (card) => {
        this.setState({above: card})
    }
    setDragged = (object, type) => {
        let draggedObj = object
        draggedObj.type = type
        //console.log(type)
        this.setState({dragged: draggedObj})
    }
    setDelete = (deleteVal) => {
        this.setState({delete: deleteVal})
    }
    dropOnDelete = () => {
        if(this.state.dragged.type === "card") this.props.deleteCard(this.state.dragged.id, this.state.dragged.originSwimlane)
    }
    setHoverSwimlane = (swimlaneId) => {
        this.setState({overSwimlane: swimlaneId})
    }
    addHoveredCardToLane = (swimlaneId) => {
        if(this.state.dragged.type === "card") this.props.moveCard(this.state.dragged.id, this.state.dragged.originSwimlane, this.state.overSwimlane)
    }
    dropAbove = () => {
        //console.log(this.state.above.swimlaneId)
        //console.log(this.state.overSwimlane)
        if(this.state.dragged.type === "card") this.props.moveCardAbove(this.state.dragged.id, this.state.dragged.originSwimlane, this.state.above.swimlaneId, this.state.above.id)
    }
    render() {
        return (
            <div style={{display:'flex', overflowX:"auto", flexWrap: "nowrap",height:"90%"}}
                 onDragEnter={this.onDragEnter} onDragLeave={this.onDragExit} onDragOver={this.onDragOver}
                 onDrop={this.onDrop}>
                <SwimLanes setDragged={this.setDragged} setCard={this.props.setCard} 
                           setCurrentSwimlane={this.props.setCurrentSwimlane} currentBoard={this.props.currentBoard}
                           changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}
                           addHoveredCardToLane={this.addHoveredCardToLane}
                           setHoverSwimlane={this.setHoverSwimlane} setAbove={this.setAbove}
                           dropAbove={this.dropAbove} setDelete={this.setDelete}
                           dropOnDelete={this.dropOnDelete} dragged={this.state.dragged}
                           moveSwimlane={this.onDrop} atEnd={this.atEnd}/>
                <AddSwimLane addSwimLane={this.props.addSwimLane} />
            </div>
        )
    }
}

export default SwimLaneView
