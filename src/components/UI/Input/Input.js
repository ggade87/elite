import React from "react";
import classes from "./Input.module.css";
const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        ></input>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        ></input>
      );
  }
  let validationError = null;
  if (props.invalid && props.touched) {
    let validationMessage = "Please enter a valid value";
    if (props.message) {
      validationMessage = props.message;
    }
    validationError = (
      <p>
        {validationMessage} {props.valueType}
      </p>
    );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.lable}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
