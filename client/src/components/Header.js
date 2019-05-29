///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////


export class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
          <a href="http://beesbeesbees.com/" ><h3 style={{float:"left",margin:"3px",fontSize:"calc(5px + 2vmin)",color:"white"}}>Kanban</h3></a>
          <Link to="/addBoard" className="standardLink">+</Link>
          <Link onClick={this.props.hideImage} to="/" className="standardLink">Boards</Link>
          <Link onClick={this.props.toggleSpace} className="standardLink">Toggle Space</Link>          
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
