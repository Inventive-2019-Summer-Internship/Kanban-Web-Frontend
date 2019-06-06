import React, { Component } from 'react'

export class Card extends Component {
    dragCard = (evt) => {
        console.log("Drag Started!", evt);

        evt.currentTarget.style.opacity = .5;

        console.log("Set Drag", this.props.setDragged, this.props.card)
        this.props.setDragged(this.props.card, "card")
    }
    componentDidMount() {
        window.addEventListener('drop', this.props.onDrop);
    }
    dropCard = (evt) => {
        evt.currentTarget.style.opacity = 1
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
            <div className="card" onDragStart={this.dragCard} 
                 onDragEnd={this.dropCard} onClick={this.showCardInfo}
                 style={{border: "1px solid black"}} draggable>
                <h4>{this.props.card.title}</h4>
                <p>{this.props.card.description}</p>
            </div>
        )
    }
}

export default Card
