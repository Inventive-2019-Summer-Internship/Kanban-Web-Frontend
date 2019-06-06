import React, { Component } from 'react'

export class CardAddComment extends Component {
    state = {
        comment: ""
    }
    onChange = (evt) => {
        this.setState({comment: evt.target.value});
    }
    submitNewComment = (evt) => {
        if(this.state.comment !== "") this.props.addComment(this.state.comment);
    }
    render() {
        return (
            <div className="cardAddComment">
                <input className="addCommentInput" onChange={this.onChange} name="commentContent" placeholder="Add a new Comment"/>
                <button className="addCommentSubmitButton" onClick={this.submitNewComment}>&#10548;</button>
            </div>
        )
    }
}

export default CardAddComment
