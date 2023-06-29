import React from "react";
import classes from "./MealItem.module.css";

function MealItem(props) {
  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>${props.price}</p>
    </div>
  );
}

export default MealItem;
