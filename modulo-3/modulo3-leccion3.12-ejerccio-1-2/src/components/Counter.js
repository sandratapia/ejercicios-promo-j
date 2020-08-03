import React from "react";
import "../stylesheet/App.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(this.incrementCounter, 1000);
  }
  incrementCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    return <div>Contador: {this.state.counter}</div>;
  }
}

export default Counter;
