import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <h4>{this.props.card.title}</h4>
                <p>{this.props.card.description}</p>
            </div>
        )
    }
}

export default Card
