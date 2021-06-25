import { useFormik } from "formik";

import ke_logo from "./ke_logo.png";
import React, { useState } from "react";
import Details from "./Details";

import  { Redirect, Link, useHistory } from 'react-router-dom'
const Form = () => {
    const history = useHistory();

  const [block, setBlock] = useState("A");

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: { block: "A" },
      onSubmit: () => {
        console.log(values);
        history.push("/details");
      },
    });
  return (
    <React.Fragment>
      <div className="header">
        <img src={ke_logo} alt="Logo" />
        <h1>KE Web App</h1>
      </div>
      <h2>Register Page</h2>
      <br />
      <h3>Personal Information</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="textLabel">
          Given Name
          <input
            type="text"
            name="givenName"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="givenName"
          />
        </label>
        <label className="textLabel">
          Surname
          <input type="text" name="surname" />
        </label>
        <br />
        <br />
        <label className="textLabel">
          Student Number
          <input type="text" name="studentNumber" />
        </label>
        <label className="textLabel">
          Net ID
          <input type="text" name="netID" />
        </label>
        <br />
        <br />
        <label htmlFor="block">Block:</label>
        <select
          id="block"
          name="block"
          // value={block}
          // onChange={(e) => setBlock(e.target.value)}
          value={values.block}
          onChange={handleChange}
          onBlur={handleBlur}
          id="block"
          type="select"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="H">H</option>
        </select>
        <label className="textLabel">
          Room Number: {block}
          <input type="text" name="roomNumber" />
        </label>
        <br />
        <br />
        <h3>Account Information</h3>
        <br />
        <label className="textLabel">
          Username
          <input type="text" name="username" />
        </label>
        <br />
        <br />
        <label className="textLabel">
          Password
          <input type="text" name="password" />
        </label>
        <label className="textLabel">
          Confirm Password
          <input type="text" name="confirmpassword" />
        </label>
        <br />
        <br />
        <label className="radioLabel">
          Male
          <input
            type="radio"
            value="Male"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            id="gender"
            // onClick={() => {
            //   setchooseFinanceOption("Approved/Rejected Claims");
            // }}
          />
          Female
          <input
            type="radio"
            value="Female"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            id="gender"
          />
        </label>
        <br />
        <br />
        <input type="submit" />
        <br />
        <br />
        <br />
      </form>
    </React.Fragment>
  );
};

export default Form;
