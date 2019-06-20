///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
import BoardListing from '../board/BoardListing'
//////////////////////////////////////////////////////////////////

/**
 * This is the BoardView component, it displays a list of all of the boards in the state
 * in the form of BoardListing Components
 */
export class BoardView extends React.Component {
  render() {
    console.log(this.props.routerProps)
    return (
      this.props.boards.map((board) => (
          <BoardListing routerProps={this.props.routerProps} board={board} showBoard={this.props.showBoard} />
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
