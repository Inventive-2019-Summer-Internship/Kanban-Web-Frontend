import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardListing from './BoardListing'

export class BoardView extends Component {
  render() {
    return (
      this.props.boards.map((board) => (
          
          <BoardListing board={board} showBoard={this.props.showBoard} />
      ))
    );
  }
}

BoardView.propTypes = {
    boards: PropTypes.array.isRequired
};

export default BoardView
