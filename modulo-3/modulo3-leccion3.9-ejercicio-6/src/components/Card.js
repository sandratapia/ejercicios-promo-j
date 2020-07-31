import React from "react";
import "../stylesheet/App.css";

const Card = (props) => {
  const { name, description, language } = props.updateUser;
  return (
    <div className="card">
      <p className="name">{`Nombre de la película: ${name}`}</p>
      <p className="description">{`Descripción: ${description}`}</p>
      <p className="language">{`Idioma: ${language}`}</p>
    </div>
  );
};

export default Card;
