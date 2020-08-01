import React from "react";
import burgerLogo from "../../assets/images/elogo.jpg";

import classes from "./Logo.module.css";
const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger"></img>
  </div>
);

export default logo;
