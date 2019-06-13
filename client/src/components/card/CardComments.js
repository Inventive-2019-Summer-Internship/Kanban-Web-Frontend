import React, { Component } from 'react'
import CardComment from './CardComment'

export class CardComments extends Component {
    render() {
        return (
            this.props.comments.map( (comment) => (
                <CardComment deleteComment={this.props.deleteComment} updateComment={this.props.updateComment} comment={comment} />
            ))
        )
    }
}

export default CardComments
