import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class BoardListing extends Component {
  render() {
      console.log(this.props.board.name);
    return (
      <Link className="boardRow" to="/showBoard">
      <div className="boardListing" onClick={this.props.showBoard.bind(this, this.props.board.id)}>
        <p>{this.props.board.name}</p>
      </div>
      </Link>
    )
  }
}

BoardListing.propTypes = {
    
};
export default BoardListing
