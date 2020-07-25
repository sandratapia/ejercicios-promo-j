import React, { useState } from "react";
import "../stylesheet/App.css";
import NewGift from "./NewGift";

const MyBirthday = (props) => {
  const [age, setAge] = useState(20);
  const handleAge = () => {
    setAge(age + 1);
  };

  const [gift, setGift] = useState(0);
  const handleGift = () => {
    setGift(gift + 1);
  };

  return (
    <>
      <p>Hoy tengo {age} años de edad.</p>
      <button type="button" onClick={handleAge}>
        Hazme más viejo
      </button>
      <NewGift gift={gift} addGift={handleGift} />
    </>
  );
};

export default MyBirthday;
