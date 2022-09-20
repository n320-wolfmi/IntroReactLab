import './../App.css';
import React from "react"

export default class TiredMeter extends React.Component {  
    state = { tired: 7 }
  
    render() {
      return (
        <div className="tired">
          <h2>Component - Tired Meter</h2>
          <p>I am level {this.state.tired} tired. </p>
        </div>
      )
    }
  }