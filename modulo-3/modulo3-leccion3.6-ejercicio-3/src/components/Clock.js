import React from "react";
import "../stylesheet/App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
    this.state = {
      hour: "",
    };
  }

  updateClock() {
    const date = new Date();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.setState({
      hour: time,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.hour}</p>
      </div>
    );
  }
}

export default Clock;
