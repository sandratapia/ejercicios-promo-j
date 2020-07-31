import React from "react";
import Collapsible from "./Collapsible";
import data from "../data/data.json";

class CollapsibleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: data,
    };
  }
  render() {
    const collapsibleItems = this.state.palettes.map((el, idx) => {
      return <Collapsible key={idx} name={el.name} source={el.from} />;
    });

    return <ul>{collapsibleItems}</ul>;
  }
}
export default CollapsibleList;
