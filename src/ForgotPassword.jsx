import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="bg-blue-200 border-2 shadow-lg shadow-blue-300 p-3 w-2/5">
          <h1 className="text-2xl font-bold">Forgot your Password ? </h1>
          <h3 className="text-sm text-sky-600">
            Please use the same email you used to sign in
          </h3>

          <div className="mb-2">
            <label htmlFor="email-address" className="">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email-address"
              required
              className="px-3 py-2 w-full sm:text-sm"
            ></input>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-9/12 mt-3 rounded-lg border-2 bg-red-500 px-4 py-1 text-white">
              Request password Reset
            </button>
          </div>
          <div className="flex justify-center">
            <h1 className="text-blue-600">Back to . </h1>
            <Link to="/My-Account/Login" className="text-red-500">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
