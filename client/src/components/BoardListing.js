import React, { Component } from 'react'

export class BoardListing extends Component {
  render() {
      console.log(this.props.boardName);
    return (
      <div style={{backgroundColor: "#888", margin:"0px"}}>
        <p>{this.props.boardName}</p>
      </div>
    )
  }
}

BoardListing.propTypes = {
    
};
export default BoardListing
