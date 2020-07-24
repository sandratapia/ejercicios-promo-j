import React from "react";
import "../stylesheet/App.css";

class InputChange extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      content: "",
    };
  }

  handleInput(ev) {
    const inputValue = ev.target.value;
    this.setState({
      content: inputValue,
    });
  }

  render() {
    return (
      <div className="input">
        <input type="text" onChange={this.handleInput}></input>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default InputChange;
