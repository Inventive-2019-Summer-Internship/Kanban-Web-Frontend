import React, { Component } from 'react'

export class AddCard extends Component {
    showAddCardForm = () => {
        document.getElementById("addCardForm").style.display = "block";
        document.getElementById("addCardForm").className = "slide-up";
    }
    render() {
        return (
            <div className="newCardButton" style={{height: '50px'}} onClick={this.showAddCardForm}>
                <p style={{margin:'0px'}}>+</p>
            </div>
        )
    }
}

export default AddCard
