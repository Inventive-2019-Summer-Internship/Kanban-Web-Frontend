import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export class SetCardDueDate extends Component {
    setDueDate = (evt) => {

        this.props.setDueDate(evt)
        //console.log(typeof evt)
    }
    render() {
        //console.log((this.props.card.dueDate === undefined) ? "" : this.props.card.dueDate.toJSON())
        return (
            <div>
                <DatePicker selected={(this.props.card.dueDate === undefined) ? Date.now() : this.props.card.dueDate} onChange={this.setDueDate} />
            </div>
        )
    }
}

export default SetCardDueDate
