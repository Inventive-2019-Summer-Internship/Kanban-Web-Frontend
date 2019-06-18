///////////////  Package Imports  ////////////////////////////////
import React from 'react'
import PropTypes from 'prop-types'
////////////// Components Imports ////////////////////////////////
//////////////////////////////////////////////////////////////////

/**
 * This is the New Board View, it contains a form for
 * submitting a new board name and information needed
 * for the creation of a new board, if more fields are needed, 
 * please remember to also add them here so that they can be edited
 * by the user
 */
export class NewBoardView extends React.Component {
    /**
     * State and Extra Definitions
     */
    state = {
        name: '',
        url: ''
    }
    ///////////////// Method Bloc
    /**
     * onSubmit - signals to the parent component to create the board
     * @param evt the triggering event (unused in this implementation as the information 
     * needed to be passed on to the parent component is held within this.state)
     */
    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.addBoard(this.state.name, this.state.url);
        

    }

    /**
     * onChange - updates the state for onSubmit
     * @param evt gets the current value from the input field (if we decide to go with
     * a text field for submitting a url for the background method, then this method can
     * be changed to accomodate more fields, but more change to the name of the input fields)
     */
    onChange = (evt) => this.setState({[evt.target.name]: evt.target.value});  

    /**
     * The Render Method
     */
    render() {
    return (
        <div>
        <form onSubmit={this.onSubmit}>
        <h1>Create a Board</h1><br/>
        <p style={{textAlign: "center"}}>Name Your Board:</p>

        <input type="text" className="textBox" required={true} name='name' onChange={this.onChange} placeholder=' Give it a Good Name'/><br></br>
        <p style={{textAlign: "center"}}>Board's Background URL (Optional):</p>
        <input type="text" className="textBox" required={false} name='url' onChange={this.onChange} placeholder=' Give it a Good Image'/>
            <input type="submit" className="button" value="Create New Board" />
        </form>
        </div>
    )
    }
}

/**
 * Proptypes object
 * EDIT THIS WHENEVER YOU CREATE A NEW PROP 
 * FOR DATA TRANSMISSION
 */
NewBoardView.propTypes = {
    addBoard: PropTypes.func.isRequired
};

export default NewBoardView
