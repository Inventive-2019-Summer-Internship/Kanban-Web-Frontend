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
        {/*eslint-disable-next-line*/}
        <h1>✨Add a new Board✨</h1><br/>
        <p style={{textAlign: "center"}}>Name your new board:</p>

        <input type="text" className="textBox" required={true} name='name' onChange={this.onChange} placeholder=' Give it a good name'/><br></br>
        <p style={{textAlign: "center"}}>Give your board a background url (if you want):</p>
        <input type="text" className="textBox" required={false} name='url' onChange={this.onChange} placeholder=' Give it a good name'/>
            <input type="submit" className="button" value="Add New Board" />
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
