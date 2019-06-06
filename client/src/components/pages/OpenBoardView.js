///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
import PopoutMenu from '../PopoutMenu'
import SwimLaneView from '../SwimLaneView'
import BoardHeader from '../BoardHeader'
import AddCardForm from '../card/AddCardForm';
import DisplayEditCardForm  from '../card/DisplayEditCardForm';
//////////////////////////////////////////////////////////////////

/**
 * This is the OpenBoardView component, it currently displays board telemetry to ensure
 * the board has in fact changed to a new board
 * TODO: Insert actual board functionality
 */
export class OpenBoardView extends React.Component {

  state = {
    activeCard: {
      title: "",
      description: "",
      comments: [
        {
          comment: "",
          id: -1
        }
      ]
    },
    currentSwimlane: this.props.currentBoard.swimLanes[0]
  }
  updateCard = (card) => {
    this.props.updateCard(card, this.state.currentSwimlane.id, this.props.currentBoard.id);
  }
  deleteCard = (cardId) => {
    this.props.deleteCard(cardId, this.state.currentSwimlane.id, this.props.currentBoard.id);
  }
  changeSwimlaneTitle = (title, id) => {
    this.props.changeSwimlaneTitle(this.props.currentBoard.id, title, id)
  }

  addSwimLane = (name) => {
    this.props.addSwimLane(name, this.props.currentBoard.id);
  }
  addComment = (comment, cardId) => {
    this.props.addComment(comment, cardId, this.state.currentSwimlane.id, this.props.currentBoard.id)
  }
  deleteComment = (commentId, cardId) => {
    this.props.deleteComment(commentId, cardId, this.state.currentSwimlane.id, this.props.currentBoard.id)
  }

  changeBoardName = () => {
    var name = prompt("Name your Board", this.props.currentBoard.name);
    if(name === null || name === "" || name === this.props.currentBoard.name) {
        alert("Name Unchanged");
    }
    else {
        this.props.changeBoardName(name, this.props.currentBoard.id);
    }
  }

  setCard = (card) => {
    this.setState({activeCard: card})
  }

  changeBoardBG = () => {
    var name = prompt("Change the Background of your Board", this.props.currentBoard.img);
    if(name === null || name === "" || name === this.props.currentBoard.img) {
        alert("Background Unchanged");
    }
    else {
        this.props.changeBoardBG(name, this.props.currentBoard.id);
    }
  }

  setCurrentSwimlane = (swimlane) => {
    this.setState({currentSwimlane: swimlane})
    console.log(swimlane);
  }

  deleteBoard = () => {
    var name = prompt("Are you sure you want to delete this board? Type in the board's name to verify deletion.");
    if(name === null || name === "" || !name.match(new RegExp(this.props.currentBoard.name,'i','g'))) {
        alert("Board Not Deleted");
    }
    else {
        this.props.deleteBoard(this.props.currentBoard.id);
    }
  }

  render(props) {
    return (
      <div style={{height:"90%", overflow:"hidden", width: "100%"}}>
        
        <BoardHeader currentBoard={this.props.currentBoard} />

        <SwimLaneView setCard={this.setCard} setCurrentSwimlane={this.setCurrentSwimlane} 
                      currentBoard={this.props.currentBoard} addSwimLane={this.addSwimLane} 
                      changeTitle={this.changeSwimlaneTitle} deleteSwimlane={this.props.deleteSwimlane}
                      moveCard={this.props.moveCard}/>

        <PopoutMenu changeBoardName={this.changeBoardName} changeBoardBG={this.changeBoardBG} 
                    deleteBoard={this.deleteBoard} />

        <AddCardForm addCard={this.props.addCard} currentSwimlane={this.state.currentSwimlane} />

        <DisplayEditCardForm addComment={this.addComment} deleteComment={this.deleteComment} 
                             deleteCard={this.deleteCard} updateCard={this.updateCard} card={this.state.activeCard} />

      </div>
    )
  }
}
/**
 * Proptypes object
 * EDIT THIS WHENEVER YOU CREATE A NEW PROP 
 * FOR DATA TRANSMISSION
 */
OpenBoardView.propTypes = {
    currentBoard: PropTypes.object.isRequired,
    changeBoardName: PropTypes.func.isRequired,
    changeBoardBG: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired
}
export default OpenBoardView
