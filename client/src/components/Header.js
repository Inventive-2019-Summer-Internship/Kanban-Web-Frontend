///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////


export class Header extends React.Component {
   user = {
    name: "rubenr"
  }
  render() {
    return (
      <div className="App-header">
          <Link to="/" ><h3 style={{margin:"0", marginLeft:"10px", float:"left", color:"white"}}>Kanban</h3></Link>
          <Link to={`/${this.user.name}/addBoard`} className="standardLink">+</Link>
          <Link onClick={this.props.hideImage} to={`/${this.user.name}/boards`} className="standardLink">Boards</Link>
          <span id="SpaceyWacey" onClick={this.props.toggleSpace} className="standardLink">Activate Space</span>          
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
