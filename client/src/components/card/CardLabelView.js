import React, { Component } from 'react'
import CardLabels from './CardLabels'

export class CardLabelView extends Component {
    render () {
        return (
            <div class="cardLabels">
                <CardLabels deleteLabel={this.props.deleteLabel} updateLabel={this.props.updateLabel} labels={this.props.labels}/>
            </div>
        )
    }
}

export default CardLabelView