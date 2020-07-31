import React from "react";
import "../stylesheet/App.css";

class FormFilms extends React.Component {
  render() {
    return (
      <div className="form">
        <form className="my-form">
          <label htmlFor="name">Nombre de la pelicula</label>
          <input
            id="name"
            type="text"
            key="name"
            onChange={this.props.event}
            value={name}
          />

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            key="description"
            onChange={this.props.event}
            value={description}
          ></textarea>

          <label htmlFor="chose">Elige tu idioma</label>
          <select
            onChange={this.props.event}
            name="language"
            id="language"
            key="language"
            value={language}
          >
            <option value="...">...</option>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="portugues">Portugues</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FormFilms;
