import React, { Component } from 'react'
import Card from './Card'

export class Cards extends Component {
    render() {
        return (
            this.props.cards.map((card) => (
                <Card setCard={this.props.setCard} card={card} />
            ))
        );
    }
}

export default Cards
