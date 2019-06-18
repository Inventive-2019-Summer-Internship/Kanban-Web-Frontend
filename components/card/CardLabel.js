import React, { Component } from 'react'

export class CardLabel extends Component {
    deleteLabel = (evt) => {
        this.props.deleteLabel(this.props.label.id)
    }
    
    render () {
        return (
            <div class="cardLabel" style={{display:"inline-block", backgroundColor:this.props.label.color}}>
                <span class="cardLabel">{this.props.label.title}</span>
                <p class="closeCardInfoButton" style={{fontSize:"16px", margin:"0 2px", fontWeight:"bold"}} onClick={this.deleteLabel}>X</p>
            </div>
        )
    }
}

export default CardLabel