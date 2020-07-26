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
    this.handleValues = this.handleValues.bind(this);
  }

  handleValues(event) {
    const name = event.target.name;
    const description = event.target.description;
    const language = event.target.language;
    this.setState({
      name: name,
      description: description,
      language: language,
    });
  }

  render() {
    return (
      <div class="form">
        <form className="my-form">
          <label for="name">Nombre de la pelicula</label>
          <input
            id="name"
            type="text"
            key="name"
            onChange={this.handleValues}
            value={this.state.name}
          />

          <label for="description">Descripción</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            key="description"
            onChange={this.handleValues}
            value={this.state.description}
          ></textarea>

          <label for="chose">Elige tu idioma</label>
          <select
            onChange={this.handleValues}
            name="language"
            id="language"
            key="language"
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
