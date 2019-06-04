import React, { Component } from 'react'
import DisplayEditCardForm from './DisplayEditCardForm';

export class Card extends Component {
    showCardInfo = () => {
        this.props.setCard(this.props.card)
        //DisplayEditCardForm.updateState()
        document.getElementById("cardInfoDisplay").className = `displayCardInfo slide-down-display`;
        document.getElementById("displayCardInfoContainer").style.display = "flex";
    }
    render() {
        return (
            <div className="card" onClick={this.showCardInfo} style={{border: "1px solid black"}}>
                <h4>{this.props.card.title}</h4>
                <p>{this.props.card.description}</p>
            </div>
        )
    }
}

export default Card
