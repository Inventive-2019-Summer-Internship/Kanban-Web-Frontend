import React, { Component } from 'react'
import CardInfoContentSidebar from './CardInfoContentSidebar'

export class CardInfoContent extends Component {
    state = {
        title: this.props.card.title,
        description: this.props.card.description,
        needsUpdating: false
    }
    updateState = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
        this.setState({needsUpdating: true})
        this.props.updateDescription(evt.target.value);
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
            <div className="contentArea">
                    <div className="descriptionArea">
                        <textarea name="description" rows="25" cols="80" 
                                  onChange={this.updateState} onClick={this.loadText}
                                  onBlur={this.props.saveDescription} placeholder={this.props.card.description} 
                                  className="cardDescription"/> 
                    </div>
                    <CardInfoContentSidebar deleteComment={this.props.deleteComment} addComment={this.props.addComment} card={this.props.card} />
                    

            </div>
        )
    }
}

export default CardInfoContent
