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
        if(evt.target.value === "" && !this.state.needsUpdating) {
            evt.target.value = this.props.card[evt.target.name];
            this.setState({[evt.target.name]:this.props.card[evt.target.name]});
            //this.props.updateDescription(this.state.description);
            this.props.updateDescription(this.props.card.description)
        }
    }
    render() {
        return (
            <div className="contentArea">
                    <div className="descriptionArea">
                        <textarea name="description" rows="25" cols="80" onChange={this.updateState} onClick={this.loadText} placeholder={this.props.card.description} className="cardDescription"> 
                        </textarea>
                    </div>
                    <CardInfoContentSidebar deleteComment={this.props.deleteComment} addComment={this.props.addComment} card={this.props.card} />
                    

            </div>
        )
    }
}

export default CardInfoContent
