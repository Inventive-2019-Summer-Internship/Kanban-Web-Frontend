import React, { Component } from 'react'

export class CardComment extends Component {
    deleteComment = (evt) => {
        this.props.deleteComment(this.props.comment.id)
    }
    render() {
        return (
            <div className="cardComment">
                <p className="cardComment">{this.props.comment.comment}</p>
                <p className="closeCardInfoButton" onClick={this.deleteComment} style={{fontSize:"14px", fontWeight:"bold"}}>X</p>
            </div>
        )
    }
}

export default CardComment
