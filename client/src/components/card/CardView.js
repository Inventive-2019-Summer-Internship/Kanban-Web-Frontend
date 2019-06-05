import React, { Component } from 'react';
import Cards from './Cards'
import AddCard from './AddCard'


export class CardView extends Component {
    render() {
        return (
            <div>
                <Cards setCard={this.props.setCard} setDragged={this.props.setDragged} cards={this.props.cards} />
                <AddCard />
            </div>
        )
    }
}

export default CardView
