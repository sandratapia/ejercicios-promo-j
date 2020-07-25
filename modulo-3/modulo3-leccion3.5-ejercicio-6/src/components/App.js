import React from "react";
import "../stylesheet/App.css";
import TextImput from "./TextImput";
import MiMiMiTraslator from "./MiMiMiTraslator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myText = "";
    this.translateText = this.translateText.bind(this);
  }

  translateText(text_from_child) {
    this.myText = text_from_child.replace(/[aeiou]/gi, "i");
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <TextImput getInformation={this.translateText} />
        <MiMiMiTraslator displayText={this.myText} />
      </div>
    );
  }
}

export default App;
