import React, { Component } from 'react'
import Card from './Card'
import MoveCardPointer from './MoveCardPointer'
import uuid from 'uuid/v4';

export class Cards extends Component {
    render() {
        return (
            this.props.cards.map((card) => (
                <React.Fragment>
                    <Card  setCard={this.props.setCard} setDragged={this.props.setDragged} onDrop={this.props.onDrop} card={card} />
                    <MoveCardPointer id={card.id}/>
                </React.Fragment>
            ))
        );
    }
}

export default Cards
