import React, { Component } from 'react'
import CardLabelView from "./CardLabelView"
import CardAddLabel from "./CardAddLabel"
import SetCardDueDate from "./SetCardDueDate"
import SetCardCoverImage from "./SetCardCoverImage"

export class CardInfoSidebarItems extends Component {
    render () {
        return (
            <div class="cardSidebarItems">
                <div class="cardLabelContainer">
                    <CardLabelView deleteLabel={this.props.deleteLabel} updateLabel={this.props.updateLabel} labels={this.props.card.labels}/>
                    <CardAddLabel/>
                    <SetCardDueDate setDueDate={this.props.setDueDate} card={this.props.card}/>
                    <SetCardCoverImage card={this.props.card} setCardCoverImage={this.props.setCardCoverImage}/>
                </div>
            </div>
        )
    }
}

export default CardInfoSidebarItems