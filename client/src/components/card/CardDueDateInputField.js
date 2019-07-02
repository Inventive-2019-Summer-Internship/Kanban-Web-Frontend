import React, { Component } from 'react'

export class CardDueDateInputField extends Component {
    render() {
        return (
            <button
                className="dateInput"
                onClick={this.props.onClick}>
                    {this.props.value}
            </button>
        )
    }
}

export default CardDueDateInputField
