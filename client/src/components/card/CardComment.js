import React, { Component } from 'react'

export class CardComment extends Component {
    deleteComment = (evt) => {
        this.props.deleteComment(this.props.comment.id)
    }
    render() {
        return (
            <div class="cardComment">
                <p class="cardComment">{this.props.comment.comment}</p>
                <p class="closeCardInfoButton" onClick={this.deleteComment}>x</p>
            </div>
        )
    }
}

export default CardComment
