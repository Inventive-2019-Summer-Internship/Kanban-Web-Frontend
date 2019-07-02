import React, { Component } from 'react'

export class LandingPage extends Component {
    render() {
        console.log(this.props.routerProps.match.params)
        return (
            <div>
                <h1>Welcome to Kanban</h1>
                <p>Make great Kanban boards today</p>
            </div>
        )
    }
}

export default LandingPage
