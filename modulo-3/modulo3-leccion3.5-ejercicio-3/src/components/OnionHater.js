import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.onChangeListener = this.onChangeListener.bind(this);
  }

  onChangeListener(ev) {
    const value = ev.target.value.toLowerCase();
    const component = document.querySelector(".App");
    if (value.includes("cebolla")) {
      this.isHating = true;
      component.classList.add("back-color-red");
    } else {
      this.isHating = false;
      component.classList.remove("back-color-red");
    }
    this.forceUpdate();
  }
  render() {
    return (
      <textarea onChange={this.onChangeListener} row="4" cols="80"></textarea>
    );
  }
}

export default OnionHater;
