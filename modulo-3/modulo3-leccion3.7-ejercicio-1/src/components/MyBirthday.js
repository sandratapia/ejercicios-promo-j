import React, { useState } from "react";
import "../stylesheet/App.css";

const MyBirthday = (props) => {
  const [age, setAge] = useState(20);
  const handleAge = () => {
    setAge(age + 1);
  };

  return (
    <>
      <p>Hoy tengo {age} años de edad.</p>
      <button type="button" onClick={handleAge}>
        Hazme más viejo
      </button>
    </>
  );
};

export default MyBirthday;
