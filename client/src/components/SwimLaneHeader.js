import React, { Component } from 'react'

export class SwimLaneHeader extends Component {
    state = {
        title: this.props.swimlane.title
    }

    putTitleIn = (evt) => {
        evt.currentTarget.value = this.state.title;
    }

    onChange = (evt) => {
        this.setState({title: evt.target.value})
    }

    changeTitle = (evt) => {

        this.props.changeTitle(this.state.title, this.props.swimlane.id)
        evt.currentTarget.placeholder = this.state.title
        evt.currentTarget.value = "";
    }

    deleteSwimlane = () => {
        this.props.deleteSwimlane(this.props.swimlane.id)
    }
    render() {
        return (
            <div className="SLHeader" >
                <input id={this.props.swimlane.id} className="SLTitle" type="text" name="SLTitle" placeholder={this.props.swimlane.title}  onChange={this.onChange} onFocus={this.putTitleIn} onBlur={this.changeTitle} />
                <p className="unicodeTrashcan" style={{display:'inline', float:'right', margin:'2px 15px 0px 0px'}} onClick={this.deleteSwimlane}>&#128465;</p>
            </div>
        )
    }
}

export default SwimLaneHeader
