import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Header extends Component {
  state = {
    onBoard: false
  }


  render() {
    return (
      <div style={{margin:"0px"}}className="App-header">
          <h3 style={{marginTop: "-0.5vmin", marginLeft: "10px", float: "left",display:'inline'}}>Kanban</h3>
          <Link to="/addBoard" className="standardLink">+</Link>
          <Link to="/" className="standardLink">Boards</Link>
          
      </div>
    )
  }
}

export default Header
