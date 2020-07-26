import React from "react";
import "../stylesheet/App.css";
import Club from "./Club";

class ClubList extends React.Component {
  render() {
    return (
      <div className="card-club">
        <Club />
      </div>
    );
  }
}

export default ClubList;
