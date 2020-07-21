import React from "react";
import MediaCard from "./MediaCard";

const pic1URL =
  "https://images.unsplash.com/photo-1595114720921-5a56692ed4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60";
const pic2URL =
  "https://images.unsplash.com/photo-1595089911462-6d66664ca5c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60";
const pic3URL =
  "https://images.unsplash.com/photo-1595111714200-0d597e920388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60";
/* Componente de clase */

class MediaList extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <MediaCard
            name="Pepito Perez"
            date="17 noviembre 2024"
            img={pic1URL}
            text="Mozaaaa, ties' tierras?"
            likes="20"
            heart="💚"
          />
        </li>
        <li>
          <MediaCard
            name="Pedro Piqueras"
            date="15 abril 1990"
            img={pic2URL}
            text="Hola chata, como estas?"
            likes="38"
            heart="💚"
          />
        </li>
        <li>
          <MediaCard
            name="Aquite Spero"
            date="17 junio 2008"
            img={pic3URL}
            text="Hasta luego, Maricarmen"
            likes="100"
            heart="💚"
          />
        </li>
      </ul>
    );
  }
}

export default MediaList;
