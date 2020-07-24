import React from "react";

const onChangeListener = (ev) => {
  alert(`Tu destino es viajar a ${ev.target.value}`);
};

class Destiny extends React.Component {
  render() {
    return (
      <div>
        <h1>Elige un destino</h1>
        <form>
          <select onChange={onChangeListener} name="city" id="city">
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Destiny;
