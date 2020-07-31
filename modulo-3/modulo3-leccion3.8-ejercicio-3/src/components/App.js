import React from "react";
import "../stylesheet/App.css";
import FormFilms from "./FormFilms";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      age: "",
      gender: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const value = ev.currentTarget.value;
    const stateAtribute = ev.currentTarget.id;

    const newState = {};
    newState[stateAtribute] = value;
    console.log(newState[stateAtribute]);
    this.setState(newState);
  }
  render() {
    return (
      <div className="App">
        <FormFilms event={this.handleInput} />
        <Card
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
          age={this.state.age}
          gender={this.state.gender}
        />
      </div>
    );
  }
}

export default App;
