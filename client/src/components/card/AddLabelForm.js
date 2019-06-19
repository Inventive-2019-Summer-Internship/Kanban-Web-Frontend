import React, { Component } from 'react'

export class AddLabelForm extends Component {
    state = {
        title: "",
        color: ""
    }

    updateState = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    closeAddLabelForm = () => {
        document.getElementById("addLabelForm").className = "fade-out";
        window.setTimeout(() => {
            document.getElementById("addLabelForm").style.display = "none";
        },450);
        document.getElementById('addLabelName').value = "";
        document.getElementById('addLabelColor').value = "";
    }

    addLabel = () => {
        if(this.state.title !== "" && this.state.color !== "") {
            this.props.addLabel(this.state.title, this.state.color);
            this.closeAddLabelForm();
        }
    }

    render() {
        return (
            <div id="addLabelForm">
                <div className="labelFormInfo">
                    <div className="labelFormHeader">
                        <h4 className="labelForm" style={{display:"inline"}}>Create Label</h4>
                        <p className="closeCardInfoButton" name="cancel" onClick={this.closeAddLabelForm} style={{fontWeight:"bold", fontSize:"25px"}}>X</p>
                        <hr style={{margin:"0", marginRight:"15px"}}/>
                    </div>
                    <div className="createLabelName">
                        <h3>Name</h3>
                        <input type="text" class="addLabelInput" onChange={this.updateState} name="title" id="addLabelName" maxLength="20"/>
                    </div>
                    <div className="selectColorLabel">
                        <h3>Select Color</h3>
                        <div className="colorButtons" id="addLabelColor">
                            <button className="colorBtnStyle" name="color" value="#4a4af1" onClick={this.updateState} style={{backgroundColor:"#4a4af1"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#d83656" onClick={this.updateState} style={{backgroundColor:"#d83656"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#2e8f2e" onClick={this.updateState} style={{backgroundColor:"#2e8f2e"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#e9dd33" onClick={this.updateState} style={{backgroundColor:"#e9dd33"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#f5a9c9" onClick={this.updateState} style={{backgroundColor:"#f5a9c9"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#782e8f" onClick={this.updateState} style={{backgroundColor:"#782e8f"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#ec9735" onClick={this.updateState} style={{backgroundColor:"#ec9735"}}>Filler</button>
                            <button className="colorBtnStyle" name="color" value="#1a1a1a" onClick={this.updateState} style={{backgroundColor:"#1a1a1a"}}>Filler</button>
                        </div>
                    </div>
                    <button className="labelFormBtn" name="addLabel" onClick={this.addLabel}>Create</button>
                </div>
            </div>
        )
    }
}

export default AddLabelForm