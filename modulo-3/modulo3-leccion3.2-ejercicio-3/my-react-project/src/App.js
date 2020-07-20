import React from "react";
import "./App.scss";

function App() {
  const profileContainer = (
    <div className="profile-container">
      <div className="img-profile">
        <img className="profile" src="./fotoperfil.png" alt="img-profile" />
      </div>
      <div className="container-name">
        <h1 className="name">Sandra Tapia Nieto</h1>
        <p>Viernes 17 de Julio de 2020</p>
      </div>
    </div>
  );

  const infoContainer = (
    <div className="info-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore fuga,
        repudiandae ducimus distinctio porro, quaerat assumenda animi
        dignissimos consequuntur aliquam accusamus tenetur repellendus! Nobis
        nesciunt totam cum illum eius earum. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Iure suscipit et esse, id itaque deleniti
        iusto amet assumenda sapiente ut eligendi soluta perferendis porro
        commodi voluptates vero dolor eius ad. Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
      <div className="more">
        <p>Leer más...</p>
        <p>
          37 <i className="fas fa-heart"></i>
        </p>
      </div>
    </div>
  );

  const appRoot = (
    <div className="App">
      {profileContainer}
      {infoContainer}
    </div>
  );
  return appRoot;
}

export default App;
