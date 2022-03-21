import { useNavigate } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import "./static/Login.css";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

async function loginUser(credentials) {
  fetch("http://localhost:8000/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then((data) => {
      setToken(data.user);
    })
    .catch((err) => {
      console.error(err);
    });
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[A-Za-z0-9_]+$/i.test(values.username)) {
    errors.username = "Invalid Username";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const username = values.username;
      const password = values.password;
      await loginUser({ username, password });
      if (sessionStorage.getItem("token")) {
        navigate("/dashboard");
      } else
        alert(
          JSON.stringify({ message: "Wrong Username or Password" }, null, 2)
        );
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="input-container">
            <label htmlFor="password">Password </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="input-container">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
