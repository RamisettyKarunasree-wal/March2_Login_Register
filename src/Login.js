import { useFormik } from "formik";
import { useState } from "react";
import LoginSuccess from "./LoginSuccess";

const Login = () => {
  let [x, setX] = useState(0);
  const formik = useFormik({
    initialValues: {
      userName: "username",
      password: "jkhj",
    },
    onSubmit(values) {
      if (localStorage.getItem("details")) {
        let arr = JSON.parse(localStorage.getItem("details"));
        for (let i in arr) {
          if (
            arr[i].userName == values.userName &&
            arr[i].password == values.password
          ) {
            setX(1);
            localStorage.setItem("isLogged", 1);
            localStorage.setItem("loggedUser", values.userName);
            break;
          } else {
            setX(0);
            localStorage.setItem("isLogged", 0);
          }
        }
      }
    },
    validate() {},
  });

  return (
    <div className="item">
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit} noValidate>
        <table>
          <tr>
            <td colSpan={2}>
              <div className="error">{}</div>
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
        </table>
        <button className="prime_btn" type="submit">
          Login
        </button>
      </form>
      {x ? (
        <LoginSuccess />
      ) : (
        <div className="error">
          <b>Invalid UserName/Password</b>
        </div>
      )}
    </div>
  );
};
export default Login;
