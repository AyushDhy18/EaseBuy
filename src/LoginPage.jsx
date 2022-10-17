import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormikInput } from "./Input";
import { Formik, Form } from "formik";

const LoginPage = () => {
  const callLoginApi = () => {
    console.log(
      "Sending Data",
      "email:",
      value.email,
      "password:",
      value.password
    );
  };
  const schema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email"),
    password: Yup.string().min(8).max(20),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen w-screen">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            validateOnMount
            onSubmit={callLoginApi}
          >
            <Form className="bg-blue-200 border-2 shadow-lg shadow-blue-300 p-3 w-2/3">
              <h1 className="text-2xl font-bold self-start mb-4">Login</h1>

              <FormikInput
                label="Email Address"
                id="email-address"
                type="email"
                name="email"
                required
                className=""
              />

              <FormikInput
                label="password"
                id="password"
                type="password"
                name="password"
                required
                className=""
              />

              <div className="flex justify-end\">
                <Link to="/My-Account/Forgot-password" className="text-red-500">
                  Forgot password ?
                </Link>
                <div>
                  <button
                    type="submit"
                    className="mt-3 rounded-lg border-2 bg-red-500 px-4 py-1 text-white  disabled:bg-red-300 "
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
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
