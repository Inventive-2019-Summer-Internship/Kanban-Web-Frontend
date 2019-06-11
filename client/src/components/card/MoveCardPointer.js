import React, { Component } from 'react'

export class MoveCardPointer extends Component {
    onDragEnter = (evt) => {
        console.log(`put card above card ${this.props.id}, ${evt.target.id}: ${typeof evt.target.id}, ${evt.target.id.substr(0,3)}`)
        let card = this.props.card
        card.swimlaneId = this.props.currentSwimlane
        console.log(card)
        this.props.setAbove(card)
    }
    onDragOver = (evt) => {
        evt.preventDefault()
    }
    onDragLeave =(evt) => {
        this.props.setAbove({})
    }
    onDrop = (evt) => {
        evt.preventDefault();
        this.props.onDrop()
          
    }
    render() {
        return (
            <div onDrop={this.onDrop} onDragEnter={this.onDragEnter} 
                 onDragLeave={this.onDragLeave} onDragOver={this.onDragOver}
                 id={`${this.props.id}-MoveCard`} className="moveCard pulse"
                 style={{display: (this.props.makeVisible === this.props.card.id) ? "block" : "none"}}>
            </div>
        )
    }
}

export default MoveCardPointer
