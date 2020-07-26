import React from "react";
import "../stylesheet/App.css";
import Card from "./Card";

class FormFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleLanguage(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    return (
      <div class="form">
        <form className="my-form">
          <label for="name">Nombre de la pelicula</label>
          <input
            id="name"
            type="text"
            onChange={this.handleName}
            value={this.state.name}
          />

          <label for="description">Descripción</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            onChange={this.handleDescription}
            value={this.state.description}
          ></textarea>

          <label for="chose">Elige tu idioma</label>
          <select
            onChange={this.handleLanguage}
            name="language"
            id="language"
            value={this.state.language}
          >
            <option value="...">...</option>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="portugues">Portugues</option>
          </select>
        </form>
        <Card
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
        />
      </div>
    );
  }
}

export default FormFilms;
