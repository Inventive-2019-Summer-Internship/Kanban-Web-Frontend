import React, { Component } from 'react'
import CardInfoContentSidebar from './CardInfoContentSidebar'
import CardInfoSidebarItems from './CardInfoSidebarItems'

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
            <div class="contentArea">
                <div class="primary-contentArea">
                    <div class="descriptionArea">
                        <textarea name="description" rows="25" cols="200" onChange={this.updateState} onClick={this.loadText} placeholder={this.props.card.description} class="cardDescription"/> 
                    </div>
                    <CardInfoContentSidebar deleteComment={this.props.deleteComment} addComment={this.props.addComment} updateComment={this.props.updateComment} card={this.props.card} />
                </div>
                <div class="secondary-contentArea">
                    <CardInfoSidebarItems setDueDate={this.props.setDueDate} deleteLabel={this.props.deleteLabel}
                                          updateLabel={this.props.updateLabel} setCardCoverImage={this.props.setCardCoverImage}
                                          card={this.props.card}/>
                </div>
            </div>
        )
    }
}

export default CardInfoContent
