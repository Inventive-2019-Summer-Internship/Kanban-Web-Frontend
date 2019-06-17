///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
////////////// Components Imports ////////////////////////////////
import SwimLaneHeader from './SwimLaneHeader' 
import CardView from '../card/CardView';
//////////////////////////////////////////////////////////////////

export class SwimLane extends React.Component {
  state = {
    currentlyDraggingCard: false
  }
  draggingCard = (currentlyDraggingCard) => {
    this.setState({currentlyDraggingCard})
  }
  setCurrentSwimlane = () => {
    this.props.setCurrentSwimlane(this.props.swimlane)
  }
  onDragEnter = (evt) => {
    if(!this.state.currentlyDraggingCard) this.props.overSwimlane(this.props.swimlane.id)
  }
  onDragExit = (evt) => {
    if(!this.state.currentlyDraggingCard) this.props.overSwimlane("")
  }
  onDragStart = (evt) => {
    
    window.setTimeout(() => {
      //console.log(this.state.currentlyDraggingCard)
      if(!this.state.currentlyDraggingCard) this.setDragged(this.props.swimlane, "swimlane")
    }, 1)
    
  }
  _onDragEnter = (evt) => {
    //console.log(evt);
    //console.log(evt.target.className === "swimLane")
    if(evt.target.id === this.props.swimlane.id) {
      //console.log(this.props.swimlane.id)
      this.props.setHoverSwimlane(this.props.swimlane.id)
    }
  }
  _onDragLeave =(evt) => {
    if(evt.target.className === "swimLane" || evt.target.className === "moveCard") evt.target.style.border = "none"
  }
  _onDragOver = (evt) => {
    evt.preventDefault()
    if(evt.target.className === "swimLane" || evt.target.className === "moveCard") evt.target.style.border ="1px blue dashed"
  }
  onDrop = (evt) => {
    evt.preventDefault();
    //console.log(this.props.swimlane.id)
    if(evt.target.className === "swimLane" && this.state.currentlyDraggingCard) {
      //console.log("dropped")
      evt.target.style.border = "none"
      this.setState({currentlyDraggingCard: false})
      this.props.addHoveredCardToLane(this.props.swimlane.id);
    }
    else {
      this.props.overSwimlane("")
    }
  }
  addHoveredCardToLaneBelow = (id) => {
    this.props.addHoveredCardToLaneBelow(id, this.props.swimlane.id)
  }
  setDragged = (object, type) => {
    let newObject = object;
    newObject.originSwimlane = this.props.swimlane.id
    this.props.setDragged(newObject, type)
  }
  componentDidMount() {
    //window.addEventListener('mouseup', this._onDragLeave);
    window.addEventListener('dragenter', this._onDragEnter);
    window.addEventListener('dragover', this._onDragOver);
    window.addEventListener('dragleave', this._onDragLeave)
    
    //document.getElementById('dragbox').addEventListener('dragleave', this._onDragLeave);
}
  render() {
    console.log(this.props)
    return (
      <div onClick={this.setCurrentSwimlane} onDragEnter={this.onDragEnter}
           onDragStart={this.onDragStart} onDragExit={this.onDragExit}
           id={this.props.swimlane.id} className="swimLane" draggable>

        <SwimLaneHeader swimlane={this.props.swimlane} changeTitle={this.props.changeTitle}
                        deleteSwimlane={this.props.deleteSwimlane}/>

        <CardView setCard={this.props.setCard} setDragged={this.setDragged}
                  onDrop={this.onDrop} cards={this.props.swimlane.cards} 
                  setAbove={this.props.setAbove} dropAbove={this.props.dropAbove}
                  currentSwimlane={this.props.swimlane.id} setDelete={this.props.setDelete}
                  dropOnDelete={this.props.dropOnDelete} draggingCard={this.draggingCard}/>
      </div>
    )
  }
}

export default SwimLane
