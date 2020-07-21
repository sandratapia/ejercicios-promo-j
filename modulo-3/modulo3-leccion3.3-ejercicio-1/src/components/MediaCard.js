import React from "react";

const picUrl =
  "https://images.unsplash.com/photo-1595119396388-b8822b6c91fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="profile-container">
          <div className="img-profile">
            <img className="profile" src={picUrl} alt="img-profile" />
          </div>
          <div className="container-name">
            <h1 className="name">Sandra Tapia Nieto</h1>
            <p>Viernes 17 de Julio de 2020</p>
          </div>
        </div>
        <div className="info-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            fuga, repudiandae ducimus distinctio porro, quaerat assumenda animi
            dignissimos consequuntur aliquam accusamus tenetur repellendus!
            Nobis nesciunt totam cum illum eius earum. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Iure suscipit et esse, id itaque
            deleniti iusto amet assumenda sapiente ut eligendi soluta
            perferendis porro commodi voluptates vero dolor eius ad. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="more">
            <p>Leer más...</p>
            <p>
              37 <i className="fas fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaCard;
