import React from "react";
import "../stylesheet/App.css";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.state = {
      counter: 0,
    };
  }

  increaseCounter() {
    this.setState((prevState) => {
      const newCounter = prevState.counter++;
      return {
        counter: newCounter,
      };
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Cuenta ovejas</button>
      </div>
    );
  }
}

export default SheepCounter;
