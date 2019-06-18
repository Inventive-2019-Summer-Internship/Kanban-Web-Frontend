import React, { Component } from 'react'

export class Card extends Component {
    dragCard = (evt) => {
        console.log(evt)
        this.currentTarget.style.opacity = .5
        this.props.setDragged(this.props.card, "card")
    }
    dropCard = (evt) => {
        this.currentTarget.style.opacity = 1
    }
    showCardInfo = () => {
        this.props.setCard(this.props.card)
        //DisplayEditCardForm.updateState()
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
            <div className="card" draggable={true} onDragStart={this.dragCard} onDragEnd={this.dropCard } onClick={this.showCardInfo}>
                <h4>{this.props.card.title}</h4>
            </div>
        )
    }
}

export default Card
