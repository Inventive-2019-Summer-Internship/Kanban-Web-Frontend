import React, { Component } from 'react'

export class MoveCardPointer extends Component {
    render() {
        return (
            <div id={`${this.props.id}-MoveCard`} className="moveCard pulse">
                <p className="moveCardText">move card here</p>
            </div>
        )
    }
}

export default MoveCardPointer
