import React, { Component } from 'react'
import CardLabel from './CardLabel'

export class CardLabels extends Component {
    render () {
        return (
            this.props.labels.map( (label) => (
                <CardLabel deleteLabel={this.props.deleteLabel} updateLabel={this.props.updateLabel} label={label}/>
            ))
        )
    }
}

export default CardLabels