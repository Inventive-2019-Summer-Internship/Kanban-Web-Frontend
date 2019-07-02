import React, { Component } from 'react'
//import { ToastContainer } from 'react-toastr'

export class AddCardForm extends Component {
    container;
    state = {
        title: "",
        description: "",
        coverImage: ""
    }

    updateState = (evt) => {
        document.getElementById('addCardName').style.border = "none"
        this.setState({[evt.target.name]: evt.target.value})
    }

    getClickAction = (evt) => {
        switch(evt.target.name) {
            case 'addCard':
                if(this.state.title === "") {
                    document.getElementById('addCardName').style.border = "1px red solid"
                }
                else this.addCard()
                break;
            case 'cancel':
                this.closeAddCardForm();
                break;
            default:
                this.closeAddCardForm();
                break;
        }
    }

    closeAddCardForm = () => {
        let title = "";
        let description = "";
        let coverImage = "";
        document.getElementById("addCardForm").className = "slide-down";
        window.setTimeout(() => {
            document.getElementById("addCardForm").style.display = "none";
          },450);
        //document.getElementById('addCardName').value = "";
        this.setState({title, description, coverImage})
        document.getElementById('addCardDescription').value = "";
        document.getElementById('addCardName').value = "";
        document.getElementById('addCardCoverImage').value = "";
    }

    addCard = () => {
            this.props.addCard(document.getElementById('addCardName').value, document.getElementById('addCardDescription').value, document.getElementById("addCardCoverImage").value, this.props.currentSwimlane.id)
            this.closeAddCardForm();

        
    }

    render() {
        
        return (
            <div id="addCardForm">
                <h3 className="cardForm">Add Card</h3>
                <div style={{display:"inline"}}>
                    <div style={{width:'25%', float:"left"}}>
                        <p className="cardForm" style={{margin:"15px 0 0 0"}}>Title of Card</p>
                        <input id="addCardName" type="text" 
                               placeholder={"Give it a Good Title"} onBlur={this.updateState} 
                               name="title" required/>
                        <p className="cardForm" style={{marin:"15px 0 0 0"}}>Cover Image</p>
                        <input id="addCardCoverImage" type="text" 
                               placeholder={"optional"} onBlur={this.updateState} 
                               name="title" required/>
                    </div>
                    <div style={{width:'50%', display: 'inline-block'}}>
                        <p className="cardForm" style={{margin:"0 0 10px 0"}}>Description:</p>
                        <textarea id="addCardDescription" style={{resize:"none"}} name="description" placeholder={"Describe Your Card"} onBlur={this.updateState} rows="7" cols="50" />
                    </div>
                    <div style={{width:'25%', float:"right"}}>
                        <button className="cardForm formAdd" name="addCard" onClick={this.getClickAction}>Add Card</button>
                        <button className="cardForm" name="cancel" onClick={this.getClickAction}>Cancel</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default AddCardForm
