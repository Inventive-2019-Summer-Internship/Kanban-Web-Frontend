import React, { Component } from 'react'
import CardCommentView from './CardCommentView';
import CardAddComment from './CardAddComment';

export class CardInfoContentSidebar extends Component {
    
    render() {
        return (
            <div className="additionalInformationSidebar">
                <div className="cardCommentContainer">
                    <CardCommentView deleteComment={this.props.deleteComment} comments={this.props.card.comments} />
                    <CardAddComment addComment={this.props.addComment}/>
                </div>
            </div>
        )
    }
}

export default CardInfoContentSidebar
