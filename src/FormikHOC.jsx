import React from "react";
import { useField } from "formik";

const FormikHOC = (IncomingComponent) => {
  function OutgoingComponent({ name, ...rest }) {
    const field = useField(name);
    const [data, meta] = field;
    const { value, onChange, onBlur } = data;
    const { error, touched } = meta;

    let BorderClass =
      " border-gray-300 focus:border-blue-400 focus:outline-none ";
    if (error && touched) {
      BorderClass = " border-gray-300 focus:border-red-500 focus:outline-none ";
    }
    return (
      <IncomingComponent
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        touched={touched}
        name={name}
        {...rest}
      ></IncomingComponent>
    );
  }
  return OutgoingComponent;
};
export default FormikHOC;
