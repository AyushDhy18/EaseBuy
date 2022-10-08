import { useFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const callLoginApi = () => {
    console.log(
      "Sending Data",
      "email:",
      values.email,
      "password:",
      values.password
    );
  };
  const schema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email"),
    password: Yup.string().min(8).max(20),
  });

  const {
    handleChange,
    handleSubmit,
    values,
    resetForm,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen w-screen">
          <form
            className="bg-blue-200 border-2 shadow-lg shadow-blue-300 p-3 w-2/3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold self-start mb-4">Login</h1>
            <div className="mb-2">
              <label htmlFor="email-address" className="">
                Email Address
              </label>
              <input
                value={values.email}
                name="email"
                type="email"
                id="email-address"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                className="px-3 py-2 w-full sm:text-sm"
              ></input>
              {touched.email && errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
            </div>

            <div className="">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                value={values.password}
                name="password"
                type="password"
                id="password"
                required
                onChange={handleChange}
                className="px-3 py-2 w-full sm:text-sm"
              ></input>
              {errors.password && (
                <div className="text-red-600">{errors.password}</div>
              )}
            </div>
            <div className="flex justify-end justify-between">
              <Link to="/My-Account/Forgot-password" className="text-red-500">
                Forgot password ?
              </Link>
              <div>
                <button
                  type="button"
                  className="mt-3 rounded-lg border-2 bg-red-500 px-4 py-1 text-white"
                  onClick={resetForm}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="mt-3 rounded-lg border-2 bg-red-500 px-4 py-1 text-white  disabled:bg-red-300 "
                  disabled={!isValid}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="text-blue-600">Don't have an Account ? </h1>
              <Link to="/My-Account/SignUp" className="text-red-500">
                {" "}
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
