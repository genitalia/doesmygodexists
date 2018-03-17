import React, { Component } from "react";
import "./App.css";
import { GodPicker } from "./components/god-picker";
import { GodLoader } from "./components/god-loader";

const STATUS = ["pick", "loading", "result"];
const WAIT = 1000 * 3;
class App extends Component {
  constructor() {
    super();
    this.state = {
      phase: STATUS[0],
      currentGod: null
    };
  }

  onPhase = n => {
    return this.state.phase === STATUS[n];
  };

  reset = () => {
    this.setState({
      phase: STATUS[0],
      currentGod: null
    });
  };

  doesExist = god => {
    this.setState(
      {
        phase: STATUS[1],
        currentGod: god
      },
      () => {
        window.gtag("event", "search", { search_term: god.name });
        setTimeout(() => {
          this.setState({
            phase: STATUS[2],
            currentGod: god
          });
        }, WAIT);
      }
    );
  };

  renderResult = () => {
    const god = this.state.currentGod;
    return (
      <div className="god-result">
        <p style={{ fontSize: "70px" }}>The answer is:</p>
        <div className="god-existence">{god.existence}</div>
        <a
          onClick={() => {
            window.gtag("event", "try-again");
            this.doesExist(god);
          }}
        >
          Check again{" "}
        </a>
        <a
          onClick={() => {
            window.gtag("event", "reset");
            this.reset();
          }}
        >
          Choose different god
        </a>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Does my God Exists?</h1>
        </header>
        {this.onPhase(0) && (
          <p className="disclaimer">
            This website contains a database of all the informations in the
            universe and uses an advanced AI-powered algorithm in order to get a
            100% scientifically accurate answer to the oldest question of
            humanity.
          </p>
        )}
        {this.onPhase(0) && <GodPicker onSelect={this.doesExist} />}
        {this.onPhase(1) && <GodLoader god={this.state.currentGod} />}
        {this.onPhase(2) && this.renderResult()}
      </div>
    );
  }
}

export default App;
