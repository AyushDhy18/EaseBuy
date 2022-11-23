import { withFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";
import WithUser from "./WithUser";
import axios from "axios";

const callSignUpApi = (values, bag) => {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: values.email,
      password: values.password,
      fullName: values.Fullname,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log(bag);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("invalid signup credentials");
    });
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
export const SignUpPage = ({
  handleSubmit,
  errors,
  handleBlur,
  values,
  touched,
  handleChange,
}) => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen w-screen">
          <form
            onSubmit={handleSubmit}
            className="bg-blue-200 border-2 shadow-lg shadow-blue-300 p-3 w-2/3"
          >
            <h1 className="text-xl font-bold self-start mb-4">Sign Up</h1>

            <Input
              error={errors.Fullname}
              values={values.Fullname}
              touched={touched.Fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Fullname"
              id="Fullname"
              type="text"
              name="Fullname"
              required
              className=""
            />

            <Input
              error={errors.email}
              values={values.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email Address"
              id="email-address"
              type="email"
              name="email"
              required
              className=""
            />
            <Input
              error={errors.UserName}
              values={values.UserName}
              touched={touched.UserName}
              onChange={handleChange}
              onBlur={handleBlur}
              label="UserName"
              id="UserName"
              type="text"
              name="UserName"
              required
              className=""
            />

            <Input
              error={errors.password}
              values={values.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="password"
              id="password"
              type="password"
              name="password"
              required
              className=""
            />

            <Input
              error={errors.ConfirmPassword}
              values={values.ConfirmPassword}
              touched={touched.ConfirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
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
          </form>
        </div>
      </div>
    </>
  );
};
const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callSignUpApi,
});

const easySignUp = myHOC(SignUpPage);

export default WithUser(easySignUp);
