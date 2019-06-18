import React, { Component } from 'react'
import CardInfoContent from './CardInfoContent'

export class DisplayEditCardForm extends Component {
    state = {
        title: this.props.card.title,
        description: this.props.card.description,
        needsUpdating: false
    }
    doThis = (evt) => {
        if(evt.target.id === "displayCardUpdateButton" && this.state.needsUpdating) {
            this.props.updateCard({
                title: (this.state.title === "") ? this.props.card.title : this.state.title,
                description: (this.state.description !== "" && this.state.needsUpdating) ? document.getElementsByName("description")[0].value : this.props.description,
                comments: this.props.card.comments,
                id: this.props.card.id
            })
            this.setState({needsUpdating: false})
            
        }
        else if(evt.target.id === "displayCardUpdateButton" && !this.state.needsUpdating) {
        } 
        else if(evt.target.id === "displayCardDeleteButton") {
            this.closeForm()
            this.props.deleteCard(this.props.card.id);
        }
    }

    deleteLabel = (labelId) => {
        this.props.deleteLabel(labelId, this.props.card.id)
    }
    addComment = (comment) => {
        this.props.addComment(comment, this.props.card.id)
    }
    deleteComment = (commentId) => {
        this.props.deleteComment(commentId, this.props.card.id)
    }
    resetState = () => {
        if(this.props.card.description === "" && this.props.card.title === "") this.setState({title: this.props.card.title,description: this.props.card.description});
    }

    loadText = (evt) => {
        if(evt.target.value === "") {
            evt.target.value = this.props.card[evt.target.name];
            this.setState({[evt.target.name]:this.props.card[evt.target.name]});
        }
    }
    updateDescription = (description) => {
        this.setState({description})
        this.setState({needsUpdating: true})
    }
    updateState = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
        this.setState({needsUpdating: true})
    }
    closeForm = () => {
        
        document.getElementById("cardInfoDisplay").className = `displayCardInfo slide-up-display`;
        window.setTimeout( () => {document.getElementById("displayCardInfoContainer").style.display = "none"}, 250)
    }
    render() {
        //this.resetState();
        return (
            <div id="displayCardInfoContainer" class="displayCardInfoContainer">
            <div id="cardInfoDisplay" class="displayCardInfo">
                <div class="cardHeader">
                        <input name="title" type="text" onChange={this.updateState} onClick={this.loadText} placeholder={this.props.card.title} class="cardTitle"/>
                        <p class="closeCardInfoButton" onClick={this.closeForm}>x</p>
                </div>
                <CardInfoContent deleteLabel={this.deleteLabel} addComment={this.addComment} deleteComment={this.deleteComment} updateDescription={this.updateDescription} onClick={this.loadText} card={this.props.card}/>              
                
                <div class="displayCardInfoButtonArea">
                    <button id="displayCardUpdateButton" class="displayCardInfoButton" onClick={this.doThis}>Update</button>
                    <button id="displayCardDeleteButton" class="displayCardInfoButton" onClick={this.doThis}>Delete Card</button>
                </div>
            </div>
        </div>
        )
    }
}

export default DisplayEditCardForm
