import React from "react";
function Button(props) {
  return (
    <>
      <button
        {...props}
        className="rounded-lg border-2 bg-red-500 px-11 py-2 text-white font-bold mt-7"
      ></button>
    </>
  );
}
export default Button;
