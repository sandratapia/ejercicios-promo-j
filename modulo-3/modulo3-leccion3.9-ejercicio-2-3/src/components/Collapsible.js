import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleCollapsableClick = this.handleCollapsableClick.bind(this);
  }
  handleCollapsableClick(ev) {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <li onClick={this.handleCollapsableClick}>
        <div>
          <h2>{this.props.name}</h2>
          <span>
            <i className="fas fa-arrow-circle-down"></i>
          </span>
        </div>
        {this.state.isOpen ? (
          <div className="content">
            <p>{this.props.source}</p>
          </div>
        ) : null}
      </li>
    );
  }
}
export default Collapsible;
