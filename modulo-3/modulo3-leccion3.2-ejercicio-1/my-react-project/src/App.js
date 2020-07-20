import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="profile-container">
        <div class="img-profile">
          <img class="profile" src="./fotoperfil.png" alt="img-profile" />
        </div>
        <div class="container-name">
          <h1 class="name">Sandra Tapia Nieto</h1>
          <p>Viernes 17 de Julio de 2020</p>
        </div>
      </div>
      <div class="info-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore fuga, repudiandae ducimus distinctio porro, quaerat assumenda animi dignissimos consequuntur aliquam accusamus tenetur repellendus! Nobis nesciunt totam cum illum eius earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure suscipit et esse, id itaque deleniti iusto amet assumenda sapiente ut eligendi soluta perferendis porro commodi voluptates vero dolor eius ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="more">
          <p>Leer más...</p>
          <p>37 <i class="fas fa-heart"></i></p>
        </div>
      </div>
    </div>
  );
}

export default App;
