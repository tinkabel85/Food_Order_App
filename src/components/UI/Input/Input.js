import React from "react";
import classes from "./Input.module.css";

function Input() {
  return (
    <div className={classes.input}>
      <label className={classes.label}></label>
      <input />
    </div>
  );
}

export default Input;
