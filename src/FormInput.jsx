import { useField } from "formik";
import React from "react";

const FormInput = ({ name, id, label, className, ...rest }) => {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onChange, onBlur } = data;
  const { error, touched } = meta;

  let BorderClass = "border-gray-300 focus:border-blue-400 focus:outline-none";
  if (error && touched) {
    BorderClass = "border-gray-300 focus:border-red-500 focus:outline-none";
  }
  return (
    <div className="mb-2">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        className={
          "px-3 py-2 w-full sm:text-sm border-2 rounded-sm focus:outline-none" +
          className +
          "" +
          BorderClass
        }
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        {...rest}
      ></input>
      {touched && error && <div className="text-red-600">{error}</div>}
    </div>
  );
};
export default FormInput;
