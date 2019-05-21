import React, { Component } from 'react'

export class NewBoardView extends Component {
    state = {
        name: ''
    }
    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.addBoard(this.state.name);
    } 
    onChange = (evt) => this.setState({name: evt.target.value});  
    render() {
    return (
        <div>
        <form onSubmit={this.onSubmit}>
            Name your new board:
            <input type="text" className="textBox" required={true} name='title' onChange={this.onChange} placeholder='Give it a good name'/>
            <input type="submit" className="button" value="Add New Board" />
        </form>
        </div>
    )
    }
}

export default NewBoardView
