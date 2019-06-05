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
  _onDragEnter = (evt) => {
    console.log(evt);
  }
  componentDidMount() {
    //window.addEventListener('mouseup', this._onDragLeave);
    window.addEventListener('dragenter', this._onDragEnter);
    //window.addEventListener('dragover', this._onDragOver);
    //window.addEventListener('drop', this._onDrop);
    //document.getElementById('dragbox').addEventListener('dragleave', this._onDragLeave);
}
  render() {
    return (
      <div onClick={this.setCurrentSwimlane} onDragEnter={this.onDragEnter} className="swimLane" data-simplebar>
        <SwimLaneHeader swimlane={this.props.swimlane} changeTitle={this.props.changeTitle} deleteSwimlane={this.props.deleteSwimlane}/>
        <CardView setCard={this.props.setCard} setDragged={this.props.setDragged} cards={this.props.swimlane.cards} />
      </div>
    )
  }
}

export default SwimLane
