import React, { Component } from 'react'


export class Header extends Component {
  render() {
    return (
      <div style={{margin:"0px"}}className="App-header">
          <h1 style={{display:'inline'}}>Kanban</h1>
          <p style={{display:'inline',float:'right',padding:'0px 10px 0px 10px'}}>+</p>
          <p style={{display:'inline',float:'right',padding:'0px 10px 0px 10px'}}>Boards</p>
          
      </div>
    )
  }
}

export default Header
