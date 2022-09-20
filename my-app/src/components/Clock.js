import './../App.css';
import React from "react"

export default class Clock extends React.Component {
    state = { date: new Date(), dispTime: "" }

    constructor() {
        super()
        setInterval(() => { 
            this.setState({ date: new Date() })
        }, 1000)
    }

    render() {
        return(
            <div className="Clock">
                <h2>Component - Clock</h2>
                <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
            </div>
        )
    }
}