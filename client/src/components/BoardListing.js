///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////

/**
 * This is the BoardListing Component, it is what the user
 * can click on to get the board that they want as well as just 
 * see what boards they have registered to their account
 */
export class BoardListing extends React.Component {

  render() {
    return (
      <Link className="boardRow" to="/showBoard">
      <div className="boardListing" onClick={this.props.showBoard.bind(this, this.props.board.id)}>
        <p>{this.props.board.name}</p>
      </div>
      </Link>
    )
  }
}

/**
 * Proptypes object
 * EDIT THIS WHENEVER YOU CREATE A NEW PROP 
 * FOR DATA TRANSMISSION
 */
BoardListing.propTypes = {
  board: PropTypes.object.isRequired,
  showBoard: PropTypes.func.isRequired
};

export default BoardListing
