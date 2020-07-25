import React from "react";
import "../stylesheet/App.css";

const NewGift = (props) => {
  return (
    <>
      <p>Tengo {props.gift} regalos.</p>
      <button type="button" onClick={props.addGift}>
        Dame un regalo
      </button>
    </>
  );
};

export default NewGift;
