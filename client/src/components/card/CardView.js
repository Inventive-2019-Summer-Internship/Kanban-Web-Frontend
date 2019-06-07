import React, { Component } from 'react';
import Cards from './Cards'
import AddCard from './AddCard'
import MoveCardPointer from './MoveCardPointer';


export class CardView extends Component {
    render() {
        return (
            <div>
                <MoveCardPointer />
                <Cards setCard={this.props.setCard} setDragged={this.props.setDragged} onDrop={this.props.onDrop} cards={this.props.cards} />
                <AddCard />
            </div>
        )
    }
}

export default CardView
