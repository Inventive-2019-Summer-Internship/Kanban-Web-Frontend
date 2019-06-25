import React, { Component } from 'react'

export class CardLabel extends Component {
    deleteLabel = (evt) => {
        this.props.deleteLabel(this.props.label.id)
    }
    updateLabel = (evt) => {
        this.props.updateLabel(evt.currentTarget.value, this.props.label.id)
    }
    loadText = (evt) => {
        if(evt.target.value === "") {
            evt.target.value = this.props.label[evt.target.name];
            this.setState({[evt.target.name]:this.props.label[evt.target.name]});
        }
    }
    
    render () {
        return (
            <div class="cardLabel" style={{display:"inline-block", backgroundColor:this.props.label.color}}>
                <textarea name="label" onClick={this.loadText} placeholder={this.props.label.label} onChange={this.updateLabel} rows="1" class="cardLabel"/>
                <p class="closeCardInfoButton" style={{fontSize:"16px", margin:"0 2px", fontWeight:"bold"}} onClick={this.deleteLabel}>X</p>
            </div>
        )
    }
}

export default CardLabel