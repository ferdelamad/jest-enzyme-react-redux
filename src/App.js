import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Title = ({ text }) => <div>{text}</div>;
class App extends Component {
  state = {
    on: false,
    input: ""
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Title text="I am title" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul className="tyler">
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </header>
        <div>
          <p className="button-state">{this.state.on ? "Yes!" : "No!"}</p>
          <button onClick={() => this.setState({ on: true })}>Click</button>
          <h2>{this.state.input}</h2>
          <input
            onChange={e => this.setState({ input: e.currentTarget.value })}
            type="text"
          />
        </div>
      </div>
    );
  }
}

export const Link = props => <a href={props.address}>Click</a>;

export default App;
