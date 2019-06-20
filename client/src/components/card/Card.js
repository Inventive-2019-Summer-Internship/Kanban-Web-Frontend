import React, { Component } from 'react'

export class Card extends Component {
    showCardInfo = () => {
        this.props.setCard(this.props.card)
        document.getElementById("cardInfoDisplay").className = `displayCardInfo slide-down-display`;
        document.getElementById("displayCardInfoContainer").style.display = "flex";
        if(document.getElementById("addCardForm")) {
            document.getElementById("addCardForm").className = "slide-down";
            window.setTimeout(() => {
                document.getElementById("addCardForm").style.display = "none";
            },450);
        }
        
        document.getElementById('addCardName').value = "";
        document.getElementById('addCardDescription').value = "";
    }
    render() {
        return (
            <div className="card" onClick={this.showCardInfo}>
                <h4>{this.props.card.title}</h4>
            </div>
        )
    }
}

export default Card
