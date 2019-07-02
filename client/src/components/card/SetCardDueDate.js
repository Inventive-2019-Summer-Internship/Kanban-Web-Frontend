import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import CardDueDateInputField from "./CardDueDateInputField"
import "react-datepicker/dist/react-datepicker.css"

export class SetCardDueDate extends Component {
    setDueDate = (evt) => {
        this.props.setDueDate(evt)
    }
    render() {
        return (
            <div className="cardDueDateContainer">
                <p style={{display: "inline"}}>{`Due On `}</p>
                <DatePicker 
                    selected={(this.props.card.dueDate === undefined) ? Date.now() : this.props.card.dueDate} 
                    customInput={<CardDueDateInputField />} onChange={this.setDueDate} />
            </div>
        )
    }
}

export default SetCardDueDate