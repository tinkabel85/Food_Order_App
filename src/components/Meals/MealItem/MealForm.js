import React from 'react';
import classes from './MealForm.module.css';
import Input from '../../UI/Input/Input';

function MealForm(props) {

  const submitHandler = (event) => {
    event.preventDefault();

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input></Input>
      <button>+ Add</button>
    </form>
  )
}

export default MealForm