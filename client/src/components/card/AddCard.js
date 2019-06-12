import React, { Component } from 'react'

export class AddCard extends Component {
    showAddCardForm = () => {
        document.getElementById("addCardForm").style.display = "block";
        document.getElementById("addCardForm").className = "slide-up";
    }
    onDragEnter = (evt) => {
        evt.currentTarget.style.backgroundColor = "#FF2424";
        this.props.setDelete(true)
    }
    onDragExit = (evt) => {
        evt.currentTarget.style.backgroundColor = "transparent";
        this.props.setDelete(false)
    }
    onDragOver = (evt) => {
        evt.preventDefault()
    }
    onDrop = (evt) => {
        evt.preventDefault()
        evt.currentTarget.style.backgroundColor = "transparent";
        this.props.drop()
    }
    render() {
        return (
            <div onDragEnter={this.onDragEnter} onDragLeave={this.onDragExit} 
                 onDragOver={this.onDragOver} onDrop={this.onDrop}
                 className="addCardBtn" onClick={this.showAddCardForm}>
                <p>+</p>
            </div>
        )
    }
}

export default AddCard
