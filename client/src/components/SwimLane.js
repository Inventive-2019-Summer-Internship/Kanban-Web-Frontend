///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
////////////// Components Imports ////////////////////////////////
import SwimLaneHeader from './SwimLaneHeader'
import CardView from './card/CardView';
//////////////////////////////////////////////////////////////////

export class SwimLane extends React.Component {
  setCurrentSwimlane = () => {
    this.props.setCurrentSwimlane(this.props.swimlane)
  }
  render() {
    return (
      <div onClick={this.setCurrentSwimlane} className="swimLane" data-simplebar>
        <SwimLaneHeader swimlane={this.props.swimlane} changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}/>
        <CardView setCard={this.props.setCard} cards={this.props.swimlane.cards} />
      </div>
    )
  }
}

export default SwimLane
