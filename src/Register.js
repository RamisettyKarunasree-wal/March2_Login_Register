import { useFormik } from "formik";
import { useState } from "react";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "dsfdsf@gmail.com",
      password: "pass",
      confirmpassword: "pass",
      userName: "karunasree",
    },
    onSubmit(values) {
      let obj = {
        email: values.email,
        password: values.password,
        userName: values.userName,
      };
      if (localStorage.getItem("details")) {
        let arr = JSON.parse(localStorage.getItem("details"));
        arr.push(obj);
        arr = JSON.stringify(arr);
        localStorage.setItem("details", arr);
      } else {
        let arr = [];
        arr.push(obj);
        arr = JSON.stringify(arr);
        localStorage.setItem("details", arr);
      }
    },
    validate() {
      const errors = {};
      if (localStorage.getItem("details")) {
        let arr = JSON.parse(localStorage.getItem("details"));
        for (let i in arr) {
          if (arr[i].userName == formik.values.userName) {
            errors.userExist = "User Name already exist";
          }
        }
      }
      if (formik.values.email.length < 5 || formik.values.email.length > 30) {
        errors.email =
          "Email must contain greater than 5 and less than 30 characters";
      }
      if (
        formik.values.password.length < 4 ||
        formik.values.password.length > 20
      ) {
        errors.password =
          "Password must contain greater than 4 and less than 20 characters";
      }
      if (
        formik.values.userName.length < 5 ||
        formik.values.userName.length > 20
      ) {
        errors.userName =
          "userName must contain greater than 4 and less than 20 characters";
      }
      if (formik.values.password != formik.values.confirmpassword) {
        errors.confirmpassword = "Password and Confirm Password are not same";
      }
      return errors;
    },
  });
  return (
    <div className="item">
      <h1>Registration Form</h1>
      <div className="error">
        {formik.errors.userExist ? formik.errors.userExist : null}
      </div>
      <form onSubmit={formik.handleSubmit} noValidate>
        <table>
          <tr>
            <td>Enter Email:</td>
            <td>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter Email"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="error">
                {formik.errors.email ? formik.errors.email : null}
              </div>
            </td>
          </tr>
          <tr>
            <td>Enter Password:</td>
            <td>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter password"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="error">
                {formik.errors.password ? formik.errors.password : null}
              </div>
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input
                type="password"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                placeholder="Confirm password"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="error">
                {formik.errors.confirmpassword
                  ? formik.errors.confirmpassword
                  : null}
              </div>
            </td>
          </tr>
          <tr>
            <td>Enter User Name:</td>
            <td>
              <input
                type="text"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                placeholder="Enter User Name"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="error">
                {formik.errors.userName ? formik.errors.userName : null}
              </div>
            </td>
          </tr>
        </table>
        <button type="submit" className="prime_btn">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
