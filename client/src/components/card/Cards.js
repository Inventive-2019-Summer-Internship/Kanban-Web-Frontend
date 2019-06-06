import React, { Component } from 'react'
import Card from './Card'
import uuid from 'uuid/v4';

export class Cards extends Component {
    render() {
        return (
            this.props.cards.map((card) => (
                <Card  setCard={this.props.setCard} setDragged={this.props.setDragged} onDrop={this.props.onDrop} card={card} />
            ))
        );
    }
}

export default Cards
