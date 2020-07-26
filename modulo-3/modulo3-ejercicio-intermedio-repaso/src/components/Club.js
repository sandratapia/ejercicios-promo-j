import React from "react";
import "../stylesheet/App.css";

class Club extends React.Component {
  render() {
    const members = this.props.arrayMembers;
    const membersToJSX = members.map((member, idx) => {
      return (
        <li class="club-member" key={idx}>
          {member}
        </li>
      );
    });
    return (
      <li className="each-card">
        <div className="icon">
          <i className={this.props.icon}></i>
        </div>
        <div className="info-club">
          <h1 className="club-name">{this.props.name}</h1>
          <ul className="members-wrap">{membersToJSX}</ul>
        </div>
      </li>
    );
  }
}

export default Club;
