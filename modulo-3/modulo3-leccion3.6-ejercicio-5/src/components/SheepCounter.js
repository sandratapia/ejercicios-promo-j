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
    const newImg = document.createElement("img");
    newImg.setAttribute(
      "src",
      "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png"
    );
    newImg.setAttribute("class", "img-oveja");
    const container = document.querySelector(".sheepContainer");
    container.appendChild(newImg);
  }

  render() {
    return (
      <div className="sheepContainer">
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Cuenta ovejas</button>
      </div>
    );
  }
}

export default SheepCounter;
