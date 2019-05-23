///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////


export class Header extends React.Component {
  render() {
    return (
      <div style={{margin:"0px", paddingTop:"5px"}}className="App-header">
          <h3 class="theStupidFUckingKANBANLogoInTheTopRightCorner__LikeSeriouslyThisLogoIsResponsibleForSooooManyStylingIssues__FuckThisLogo">Kanban</h3>
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
