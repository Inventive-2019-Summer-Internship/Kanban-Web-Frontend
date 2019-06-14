import React, { Component } from 'react'
import Card from './Card'
import MoveCardPointer from './MoveCardPointer'
import uuid from 'uuid/v4';

export class Cards extends Component {
    state = {
        overCard: ""
    }
    onDrop = (evt) => {
        this.setState({overCard: false})
        //console.log("ran")
        this.props.onDrop(evt);
    }
    overCard = (value) => {
        this.setState({overCard: value})
    }
    render() {
        return (
            this.props.cards.map((card) => (
                <React.Fragment>
                    <MoveCardPointer makeVisible={this.state.overCard} onDrop={this.props.dropAbove} 
                                    card={card} setAbove={this.props.setAbove} currentSwimlane={this.props.currentSwimlane}/>
                    <Card setCard={this.props.setCard} setDragged={this.props.setDragged} 
                          onDrop={this.onDrop} card={card} overCard={this.overCard}
                          draggingCard={this.props.draggingCard}/>
                    
                </React.Fragment>
            ))
        );
    }
}

export default Cards
