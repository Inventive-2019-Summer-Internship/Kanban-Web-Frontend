import React, { Component } from 'react'

export class AddCard extends Component {
    showAddCardForm = () => {
        document.getElementById("addCardForm").style.display = "block";
        document.getElementById("addCardForm").className = "slide-up";
    }
    render() {
        return (
            <div className="addCardBtn" onClick={this.showAddCardForm}>
                <p>+Add Card</p>
            </div>
        )
    }
}

export default AddCard
