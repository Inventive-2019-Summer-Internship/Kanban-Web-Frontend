import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LandingHeader extends Component {
    getGoogleInfo = () => {
        fetch("https://kanban-web-backend.herokuapp.com/auth/google")
            .then(res => console.log(res.json()))
            .then(users => console.log(users))
    }
    render() {
        return (
            <div className="App-header">
                <Link to="/" ><h3 style={{margin:"0", marginLeft:"10px", float:"left", color:"white"}}>Kanban</h3></Link>
                <a onClick={this.getGoogleInfo} className="standardLink">Log In with Google</a>
                <Link onClick={this.props.hideImage} to="/rubenr/boards" className="standardLink">Boards[temp]</Link>         
            </div>
        )
    }
}

export default LandingHeader
