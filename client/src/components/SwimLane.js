///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////

export class SwimLane extends React.Component {
  render() {
    return (
      <div className="newLane">
        <div>{this.props.swimlane.title}</div>        
      </div>
    )
  }
}

export default SwimLane
