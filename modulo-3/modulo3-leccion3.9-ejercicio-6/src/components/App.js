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
    };
    this.handleInput = this.handleInput.bind(this);
    const { name, description, language } = this.state;
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
        />
      </div>
    );
  }
}

export default App;
