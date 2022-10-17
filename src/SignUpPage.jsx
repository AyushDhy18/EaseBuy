import { Formik, Form } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormikInput } from "./Input";

const SignUpPage = () => {
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
    email: Yup.string().required().email("Please enter a valid email"),
    password: Yup.string().required().min(8).max(20),
    UserName: Yup.string().required().min(10).max(25),
    Fullname: Yup.string().required(),
    ConfirmPassword: Yup.string().required(),
  });

  const initialValues = {
    email: "",
    password: "",
    UserName: "",
    Fullname: "",
    ConfirmPassword: "",
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
              <h1 className="text-xl font-bold self-start mb-4">Sign Up</h1>

              <FormikInput
                label="Fullname"
                id="Fullname"
                type="text"
                name="Fullname"
                required
                className=""
              />

              <FormikInput
                label="Email Address"
                id="email-address"
                type="email"
                name="email"
                required
                className=""
              />
              <FormikInput
                label="UserName"
                id="UserName"
                type="text"
                name="UserName"
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

              <FormikInput
                label="ConfirmPassword"
                id="ConfirmPassword"
                type="password"
                name="ConfirmPassword"
                required
                className=""
              />

              <div className="flex justify-end">
                <div>
                  <button
                    type="submit"
                    className="mt-3 rounded-lg border-2 bg-red-500 px-4 py-1 text-white  disabled:bg-red-300 "
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-blue-600">Already have an Account ? </h1>
                <Link to="/My-Account/Login" className="text-red-500">
                  {" "}
                  Login
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
