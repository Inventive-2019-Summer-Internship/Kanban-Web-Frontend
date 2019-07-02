import React, { Component } from 'react'

export class SetCardCoverImage extends Component {
    state = {
        coverImageValue: null
    }
    setCardCoverImage = (evt) => {
        if(evt.currentTarget.value === "") {
            this.props.setCardCoverImage(null)
        }
        else {
            this.props.setCardCoverImage(evt.currentTarget.value)
        }
        this.setState({coverImageValue:null})
        evt.currentTarget.value = ""
    }
    fillCoverImageField = (evt) => {
        if(this.state.coverImageValue === null) {
            evt.currentTarget.value = this.props.card.coverImage
            this.setState({coverImageValue: this.props.card.coverImage})
        }
        else   
            evt.currentTarget.value = this.state.coverImageValue
    }
    updateState = (evt) => {
        this.setState({coverImageValue: evt.currentTarget.value})
    }
    render() {
        return (
            <div className="cardCoverImageContainer">
                <p style={{display:"inline"}}> Cover Image: </p>
                <input type="text" onBlur={this.setCardCoverImage}
                        name="card" placeholder={(this.state.coverImageValue === null) ? this.props.card.coverImage : this.state.coverImageValue}
                        onClick={this.fillCoverImageField} onChange={this.updateState}
                        className="cardCoverImage"/>
            </div>
        )
    }
}

export default SetCardCoverImage
