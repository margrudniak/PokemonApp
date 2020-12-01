import React from "react";
import "./Navbar.scss";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <AcUnitIcon class="logo" size="big" />
      </div>
      <div className="nav-middle"></div>
      <div className="nav-right">
        <button className="button button-first">Log In</button>
        <button className="button">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
