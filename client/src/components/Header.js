///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////


export class Header extends React.Component {
  render() {
    return (
      <div style={{margin:"0px"}}className="App-header">
          <h3 style={{marginTop: "-0.5vmin", marginLeft: "10px", float: "left",display:'inline'}}>Kanban</h3>
          <Link to="/addBoard" className="standardLink">+</Link>
          <Link id={"BoardsButton"} onClick={this.props.hideImage} to="/" className="standardLink">Boards</Link>
          
      </div>
    )
  }
}

/**
 * Proptypes object
 * EDIT THIS WHENEVER YOU CREATE A NEW PROP 
 * FOR DATA TRANSMISSION
 */
Header.propTypes = {
  hideImage: PropTypes.func.isRequired
}

export default Header
