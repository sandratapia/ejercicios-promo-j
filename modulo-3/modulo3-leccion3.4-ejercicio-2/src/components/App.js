import React from "react";
import HalfPage from "./HalfPage";
import "../stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <HalfPage>
        <h1>Yo soy la mitad</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi maxime
          eligendi nostrum, officia ipsum vero eaque? Impedit sit deserunt
          dicta, odio distinctio debitis harum illum dolore quod et unde error.
        </p>
      </HalfPage>
      <HalfPage>
        <h1>Yo soy la otra mitad</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          delectus! Minus corrupti perferendis voluptates maiores velit quia
          veniam voluptatibus, ea consectetur explicabo labore nobis commodi,
          eos, minima laudantium! Veniam, vero?
        </p>
      </HalfPage>
    </div>
  );
}

export default App;
