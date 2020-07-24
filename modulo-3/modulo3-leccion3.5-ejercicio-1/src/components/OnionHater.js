import React from "react";

const onChangeListener = (ev) => {
  const value = ev.target.value;
  if (value.includes("cebolla")) {
    alert("Odio la cebolla");
  }
};

class OnionHater extends React.Component {
  render() {
    return (
      <div>
        <h1>Escribe una verdura que te guste, pista, cebolla ;) ;)</h1>
        <form>
          <textarea onChange={onChangeListener} row="4" cols="80"></textarea>
        </form>
      </div>
    );
  }
}

export default OnionHater;
