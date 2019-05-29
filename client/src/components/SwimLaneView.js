import React, { Component } from 'react'
import SwimLanes from './SwimLanes'
import AddSwimLane from './AddSwimLane'

export class SwimLaneView extends Component {
    render() {
        return (
            <div style={{display:'flex', overflowX:"auto", flexWrap: "nowrap",height:"90%"}}>
                <SwimLanes currentBoard={this.props.currentBoard}/>
                <AddSwimLane addSwimLane={this.props.addSwimLane} />
            </div>
        )
    }
}

export default SwimLaneView
