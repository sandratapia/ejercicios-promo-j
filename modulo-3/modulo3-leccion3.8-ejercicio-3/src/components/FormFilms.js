import React from "react";
import "../stylesheet/App.css";

class FormFilms extends React.Component {
  render() {
    return (
      <div className="form">
        <form className="my-form">
          <label htmlFor="name">Nombre de la pelicula</label>
          <input id="name" type="text" key="name" onChange={this.props.event} />

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            key="description"
            onChange={this.props.event}
          ></textarea>

          <label htmlFor="chose">Elige tu idioma</label>
          <select
            onChange={this.props.event}
            name="language"
            id="language"
            key="language"
          >
            <option value="...">...</option>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="portugues">Portugues</option>
          </select>

          <label htmlFor="calification">Calificación por edades</label>
          <input
            type="radio"
            value="A, todos los públicos"
            name="all"
            id="age"
            onChange={this.props.event}
          />
          <span>Todos los públicos</span>
          <input
            type="radio"
            value="7"
            name="age"
            id="age"
            onChange={this.props.event}
          />
          <span>7 años</span>
          <input
            type="radio"
            value="12"
            name="age"
            id="age"
            onChange={this.props.event}
          />
          <span>12 años</span>
          <input
            type="radio"
            value="16"
            name="age"
            id="age"
            onChange={this.props.event}
          />
          <span>16 años</span>
          <input
            type="radio"
            value="18"
            name="age"
            id="age"
            onChange={this.props.event}
          />
          <span>18 años</span>

          <label htmlFor="gender">Género</label>
          <label htmlFor="comedia">
            Comedia
            <input
              type="checkbox"
              value="comedia"
              name="comedia"
              id="gender"
              onChange={this.props.event}
            />
          </label>

          <label htmlFor="drama">
            Drama
            <input
              type="checkbox"
              value="drama"
              name="drama"
              id="gender"
              onChange={this.props.event}
            />
          </label>

          <label htmlFor="drama">
            Fantasía
            <input
              type="checkbox"
              value="fantasía"
              name="fantasía"
              id="gender"
              onChange={this.props.event}
            />
          </label>

          <label htmlFor="accion">
            Acción
            <input
              type="checkbox"
              value="accion"
              name="accion"
              id="gender"
              onChange={this.props.event}
            />
          </label>

          <label htmlFor="fantasia">
            Fantasía
            <input
              type="checkbox"
              value="fantasia"
              name="fantasia"
              id="gender"
              onChange={this.props.event}
            />
          </label>

          <label htmlFor="terror">
            Terror
            <input
              type="checkbox"
              value="terror"
              name="terror"
              id="gender"
              onChange={this.props.event}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default FormFilms;
