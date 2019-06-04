import React, { Component } from 'react'
import DisplayEditCardForm from './DisplayEditCardForm';

export class Card extends Component {
    showCardInfo = () => {
        this.props.setCard(this.props.card)
        //DisplayEditCardForm.updateState()
        document.getElementById("cardInfoDisplay").className = `displayCardInfo slide-down-display`;
        document.getElementById("displayCardInfoContainer").style.display = "flex";
        document.getElementById("addCardForm").className = "slide-down";
        window.setTimeout(() => {
            document.getElementById("addCardForm").style.display = "none";
          },450);
        document.getElementById('addCardName').value = "";
        document.getElementById('addCardDescription').value = "";
    }
    render() {
        return (
            <div onClick={this.showCardInfo} style={{border: "1px solid black"}}>
                <h4>{this.props.card.title}</h4>
                <p>{this.props.card.description}</p>
            </div>
        )
    }
}

export default Card
