import React from "react";
import "../stylesheet/App.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p className="name">{`Nombre de la película: ${this.props.name}`}</p>
        <p className="description">{`Descripción: ${this.props.description}`}</p>
        <p className="language">{`Idioma: ${this.props.language}`}</p>
        <p>{`Edad recomendada, ${this.props.age}`}</p>
        <p>{`El género de la película es, ${this.props.gender}`}</p>
      </div>
    );
  }
}

export default Card;
