import React, { Component } from 'react'

export class CardAddLabel extends Component {
    showAddLabelForm = () => {
        document.getElementById("addLabelForm").style.display = "block";
        document.getElementById("addLabelForm").className = "fade-in";
    }

    render () {
        return (
            <div className="addLabelBtn" onClick={this.showAddLabelForm}>
                <p>+Add Label</p>
            </div>
        )
    }
}

export default CardAddLabel