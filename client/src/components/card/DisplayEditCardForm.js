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
             var newCard = this.props.card;
             newCard.title = (this.state.title === "") ? this.props.card.title : this.state.title
             newCard.description = this.state.description;
            this.props.updateCard(newCard)
            this.setState({needsUpdating: false})
            
        }
        else if(evt.target.id === "displayCardUpdateButton" && !this.state.needsUpdating) {
        } 
        else if(evt.target.id === "displayCardDeleteButton") {
            this.closeForm()
            this.props.deleteCard(this.props.card.id);
        }
    }
    saveDescription = () => {
        var newCard = this.props.card;
        newCard.title = (this.state.title === "") ? this.props.card.title : this.state.title
        newCard.description = this.state.description;
        this.props.updateCard(newCard)
        this.setState({needsUpdating: false})
}
    deleteLabel = (labelId) => {
        this.props.deleteLabel(labelId, this.props.card.id)
    }
    setCardCoverImage = (coverImageURL) => {
        this.props.setCardCoverImage(coverImageURL, this.props.card.id)
    }
    addComment = (comment) => {
        this.props.addComment(comment, this.props.card.id)
    }
    deleteComment = (commentId) => {
        this.props.deleteComment(commentId, this.props.card.id)
    }
    updateComment = (comment, commentId) => {
        this.props.updateComment(comment, commentId, this.props.card.id)
    }
    setDueDate = (dueDate) => {
        this.props.setDueDate(dueDate, this.props.card.id)
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
    closeForm = (evt) => {
        if(evt.currentTarget.className === "closeCardInfoButton") {
            document.getElementById("cardInfoDisplay").className = `displayCardInfo slide-up-display`;
            window.setTimeout( () => {document.getElementById("displayCardInfoContainer").style.display = "none"}, 250)
        }
        
    }
    render() {
        //this.resetState();
        return (
            <div id="displayCardInfoContainer" className="displayCardInfoContainer" onClick={this.closeForm}>
            <div id="cardInfoDisplay" className="displayCardInfo">
                <div className="cardHeader">
                        <input name="title" type="text" onChange={this.updateState} onClick={this.loadText} placeholder={this.props.card.title} className="cardTitle"/>
                        <p className="closeCardInfoButton" onClick={this.closeForm}>x</p>
                </div>
                <CardInfoContent setDueDate={this.setDueDate} deleteLabel={this.deleteLabel}
                                 addComment={this.addComment} deleteComment={this.deleteComment}
                                 updateComment={this.updateComment} updateDescription={this.updateDescription}
                                 onClick={this.loadText} setCardCoverImage={this.setCardCoverImage}
                                 card={this.props.card}/>              
            </div>
        </div>
        )
    }
}

export default DisplayEditCardForm
