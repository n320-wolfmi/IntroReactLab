import './App.css';
import React from "react";
import TiredMeter from "./components/TiredMeter"
import Clock from "./components/Clock"
import RandRoll from "./components/RandRoll"
import UserName from "./components/UserName"
import RecipeSearch from './components/RecipeSearch';

export default class App extends React.Component {

  state = {
    pages: [<RecipeSearch/>, <TiredMeter/>, <Clock/>, <RandRoll/>, <UserName/>],
    curPage: 0
  }

  render() {
    return (
      <div className="App">
        <h1>React Intro Lab!</h1>
        <div className='componentButtons'>
          <button onClick={() => { this.swapProject(0) }}>Recipe Search</button>
          <button onClick={() => { this.swapProject(1) }}>Tired Meter</button>
          <button onClick={() => { this.swapProject(2) }}>Clock</button>
          <button onClick={() => { this.swapProject(3) }}>Rand Roll</button>
          <button onClick={() => { this.swapProject(4) }}>User Name</button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    )
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex })
  }
}