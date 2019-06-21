import React, { Component } from 'react'
import CardInfoContentSidebar from './CardInfoContentSidebar'
import SetCardDueDate from './SetCardDueDate';

export class CardInfoContent extends Component {
    state = {
        title: this.props.card.title,
        description: this.props.card.description,
        needsUpdating: false
    }
    updateState = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
        this.setState({needsUpdating: true})
        this.props.updateDescription(this.state.description);
    }
    loadText = (evt) => {
        if(evt.target.value === "") {
            evt.target.value = this.props.card[evt.target.name];
            this.setState({[evt.target.name]:this.props.card[evt.target.name]});
            this.props.updateDescription(this.state.description);
        }
    }
    render() {
        return (
            <div class="contentArea">
                    <div class="descriptionArea">
                        <textarea name="description" rows="25" cols="80" onChange={this.updateState} onClick={this.loadText} placeholder={this.props.card.description} class="cardDescription"> 
                        </textarea>
                    </div>
                    <CardInfoContentSidebar deleteComment={this.props.deleteComment} addComment={this.props.addComment} updateComment={this.props.updateComment} card={this.props.card} 
                    />
                    <SetCardDueDate setDueDate={this.props.setDueDate} card={this.props.card} />
                    

            </div>
        )
    }
}

export default CardInfoContent
