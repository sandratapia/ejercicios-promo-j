import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
  }
  handleText(event) {
    const inputValue = event.target.value;
    this.props.getInformation(inputValue);
  }
  render() {
    return (
      <form action="">
        <textarea onChange={this.handleText} cols="30" rows="10"></textarea>
      </form>
    );
  }
}

export default TextInput;
