import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.usn) {
    errors.name = "Required";
  } else if (values.name.length === 10) {
    errors.name = "Must be 10 characters long";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 8) {
    errors.password = "Password must be at least 8 characters long";
  }
  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      usn: "",
      email: "",
      password: "",
      dept: "",
      sem: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="usn">USN</label>
      <input
        id="usn"
        name="usn"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.usn}
      />
      {formik.touched.usn && formik.errors.usn ? (
        <div>{formik.errors.usn}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
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

      <label htmlFor="">Department</label>
      <select
        id="dept"
        name="dept"
        value={formik.values.dept}
        onChange={formik.handleChange}
      >
        <option value="CSE">CSE</option>
        <option value="ISE">ISE</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
      </select>

      <label htmlFor="">Semester</label>
      <select
        id="sem"
        name="sem"
        value={formik.values.sem}
        onChange={formik.handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
