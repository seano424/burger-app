import React from "react";
import styles from "./Input.module.css";

const input = (props) => {
  let inputElement = null;

  const inputClasses= [styles.InputElement];

  let placeholder = props.elementConfig.placeholder
  let validationError = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
    console.log(props.elementConfig);
    placeholder = `Please enter a valid ${props.valuePlaceholder.toLowerCase()}`;
    validationError = `Please enter a valid ${props.valuePlaceholder.toLowerCase()}`
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          placeholder={placeholder}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label} htmlFor="">
        {props.label}
      </label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
