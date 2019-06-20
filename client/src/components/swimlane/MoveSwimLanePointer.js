import React, { Component } from 'react'

export class MoveSwimLanePointer extends Component {
    onDrop = (evt) => {
        evt.preventDefault()
        if(this.props.dragged.type === "swimlane") {
            this.props.moveSwimlane(this.props.swimlane.id)
        }
    }
    inDivider = (evt) => {
        console.log("entered")
        this.props.atEnd(false)
    }
    outDivider = (evt) => {
        console.log("left")
        this.props.atEnd(true)
    }
    onDragOver = (evt) => {
        evt.preventDefault()
    }
    render() {
        //console.log(`Show Area: ${this.props.overSwimlane === this.props.swimlane.id}`)
        return (
            <div className="moveSwimlane pulseX" 
                 style={{display: (this.props.dragged.type === 'swimlane' && this.props.overSwimlane === this.props.swimlane.id) ? "block" : "none"}}
                 onDragOver={this.onDragOver} onDrop={this.onDrop}
                 onDragEnter={this.inDivider} onDragLeave={this.outDivider}>
                
            </div>
        )
    }
}

export default MoveSwimLanePointer
