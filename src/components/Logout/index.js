import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      console.log("deconnexion");

      firebase.signoutUser();
    }
  }, [checked, firebase]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="logoutContainer">
      <label htmlFor=" " className="switch">
        <button onChange={handleChange} type="checkbox" checked={checked}> </button>

        <span className="slider round"> </span>
      </label>
    </div>
  );
};

export default Logout;
