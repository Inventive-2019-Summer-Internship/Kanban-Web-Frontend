///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
import BoardListing from './BoardListing'
//////////////////////////////////////////////////////////////////

/**
 * This is the BoardView component, it displays a list of all of the boards in the state
 * in the form of BoardListing Components
 */
export class BoardView extends React.Component {
  render() {
    return (
      this.props.boards.map((board) => (
          <BoardListing board={board} showBoard={this.props.showBoard} />
      ))
    );
  }
}

/**
 * Proptypes object
 * EDIT THIS WHENEVER YOU CREATE A NEW PROP 
 * FOR DATA TRANSMISSION
 */
BoardView.propTypes = {
    boards: PropTypes.array.isRequired,
    showBoard: PropTypes.func.isRequired
};

export default BoardView
