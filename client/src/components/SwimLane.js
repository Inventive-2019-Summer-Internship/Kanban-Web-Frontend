///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////

export class SwimLane extends React.Component {
  render() {
    return (
      <div className="newLane" style={{height:'95%'}}>
        <div style={{textAlign: "center", width:"100%", height:"5vmin"}}>{this.props.swimlane.title}</div>        
      </div>
    )
  }
}

export default SwimLane
