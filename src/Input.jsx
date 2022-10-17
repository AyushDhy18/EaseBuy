import React from "react";
import FormikHOC from "./FormikHOC";

const Input = ({ name, id, label, className, touched, error, ...rest }) => {
  let BorderClass =
    " border-gray-300 focus:border-blue-400 focus:outline-none ";
  if (error && touched) {
    BorderClass = " border-gray-300 focus:border-red-500 focus:outline-none ";
  }

  return (
    <div className="mb-2">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        className={
          "px-3 py-2 w-full sm:text-sm border-2 rounded-sm focus:outline-none " +
          className +
          " " +
          BorderClass
        }
        name={name}
        {...rest}
      ></input>
      {touched && error && <div className="text-red-600">{error}</div>}
    </div>
  );
};
export const FormikInput = FormikHOC(Input);

export default Input;
