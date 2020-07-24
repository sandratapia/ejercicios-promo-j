import React from "react";
import "../stylesheet/App.css";

class FormChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: "blue",
    };
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextColor = prevState.color === "blue" ? "red" : "blue";

      return {
        color: nextColor,
      };
    });
  }

  render() {
    return (
      <div className="cuadrado">
        <div
          onClick={this.handleClick}
          className={`square ${this.state.color}`}
        ></div>
      </div>
    );
  }
}

export default FormChangeColor;
