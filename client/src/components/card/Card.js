import React, { Component } from 'react'
import MoveCardPointer from './MoveCardPointer';

export class Card extends Component {
    dragCard = (evt) => {
        //console.log("Drag Started!", evt);

        evt.currentTarget.style.opacity = .5;

        //console.log("Set Drag", this.props.setDragged, this.props.card)
        this.props.setDragged(this.props.card, "card")
        this.props.draggingCard(true)
    }
    onDragOver = (evt) => {
        evt.preventDefault();
    }
    overCard = (evt) => {
        this.props.overCard(this.props.card.id);
    }
    notOverCard = (evt) => {
        this.props.overCard("");
    }
    componentDidMount() {
        window.addEventListener('drop', this.props.onDrop);
    }
    dropCard = (evt) => {
        evt.currentTarget.style.opacity = 1
        this.props.draggingCard(false)
    }
    showCardInfo = () => {
        this.props.setCard(this.props.card)
        //DisplayEditCardForm.updateState()
        document.getElementById("cardInfoDisplay").className = `displayCardInfo slide-down-display`;
        document.getElementById("displayCardInfoContainer").style.display = "flex";
        if(document.getElementById("addCardForm")) {
            var windows = document.getElementById("addCardForm")
            windows.className = "slide-down";
            window.setTimeout(() => {
                windows.style.display = "none";
            },450);
        }
        
        document.getElementById('addCardName').value = "";
        document.getElementById('addCardDescription').value = "";
    }
    render() {
        return (
            <div className="card" onDragStart={this.dragCard} 
                 onDragEnd={this.dropCard} onDragOver={this.onDragOver}
                 onDragEnter={this.overCard} onDragExit={this.notOverCard} 
                 onClick={this.showCardInfo} draggable>
                {(this.props.card.coverImage !== null) ? <img className="coverImage" src={this.props.card.coverImage} width="100%" height="200px" />: <React.Fragment />}
                <h4>{this.props.card.title}</h4>
            </div>
        
        
        )
    }
}

export default Card
