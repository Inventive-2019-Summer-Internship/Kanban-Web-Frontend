///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
import SwimLaneHeader from './SwimLaneHeader'
//////////////////////////////////////////////////////////////////

export class SwimLane extends React.Component {
  render() {
    return (
      <div className="swimLane">
        <SwimLaneHeader swimlane={this.props.swimlane} changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}/>
      </div>
    )
  }
}

export default SwimLane
