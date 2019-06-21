import React, { Component } from 'react'
import CardLabelView from "./CardLabelView"
import CardAddLabel from "./CardAddLabel"
import SetCardDueDate from "./SetCardDueDate"

export class CardInfoSidebarItems extends Component {
    render () {
        return (
            <div class="cardSidebarItems">
                <div class="cardLabelContainer">
                    <CardLabelView deleteLabel={this.props.deleteLabel} labels={this.props.card.labels}/>
                    <CardAddLabel/>
                    <SetCardDueDate setDueDate={this.props.setDueDate} card={this.props.card} />
                </div>
            </div>
        )
    }
}

export default CardInfoSidebarItems