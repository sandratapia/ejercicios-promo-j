import React from "react";
import "../App.scss";
import MediaCard from "./MediaCard";

const picUrl =
  "https://images.unsplash.com/photo-1595119396388-b8822b6c91fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

function App() {
  return (
    <div className="App">
      <MediaCard
        name="Sandra Tapia"
        date="20 Julio 2020"
        img={picUrl}
        text="Hola me llamo Sandra y estoy aprendiendo React"
        likes="2403"
        heart="💚"
      />
    </div>
  );
}

export default App;
