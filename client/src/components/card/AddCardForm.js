import React, { Component } from 'react'

export class AddCardForm extends Component {
    state = {
        title: "",
        description: ""
    }

    updateState = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    getClickAction = (evt) => {
        console.log(evt.target.name)
        switch(evt.target.name) {
            case 'addCard':
                this.addCard()
                break;
            case 'cancel':
                this.closeAddCardForm();
                break;
        }
    }

    closeAddCardForm = () => {
        
        document.getElementById("addCardForm").className = "slide-down";
        window.setTimeout(() => {
            document.getElementById("addCardForm").style.display = "none";
          },450);
        document.getElementById('addCardName').value = "";
        document.getElementById('addCardDescription').value = "";
    }

    addCard = () => {
        
        this.props.addCard(document.getElementById('addCardName').value, document.getElementById('addCardDescription').value, this.props.currentSwimlane.id)
        this.closeAddCardForm();
        
    }

    render() {
        return (
            <div id="addCardForm">
                <h3 className="cardForm">Add Card</h3>
                <div style={{display:"inline"}}>
                    <div style={{width:'25%', float:"left"}}>
                        <p className="cardForm" style={{margin:"15px 0 0 0"}}>Title of Card</p>
                        <input id="addCardName" type="text" placeholder={"Give it a Good Title"} onChange={this.updateState} name="title" />
                    </div>
                    <div style={{width:'50%', display: 'inline-block'}}>
                        <p className="cardForm" style={{margin:"0 0 10px 0"}}>Description:</p>
                        <textarea id="addCardDescription" name="description" placeholder={"Describe Your Card"} onChange={this.updateState} rows="7" cols="50" />
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
