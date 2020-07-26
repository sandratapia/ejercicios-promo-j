import React from "react";
import "../stylesheet/App.css";
import Club from "./Club";

class ClubList extends React.Component {
  render() {
    const clubsArray = this.props.clubInfo;
    const objectToJSX = clubsArray.map((club) => {
      return (
        <Club name={club.name} icon={club.fa} arrayMembers={club.members} />
      );
    });
    return (
      <div className="card-club">
        <ul>{objectToJSX}</ul>
      </div>
    );
  }
}

export default ClubList;
