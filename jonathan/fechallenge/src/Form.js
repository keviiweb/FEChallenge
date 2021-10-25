import "./Form.css";

import React from "react";

class Form extends React.Component {
  state = { block: "A" };
  handleChange = (event) => {
    this.setState({ block: event.target.value });
  };
  render() {
    return (
      <div className="form">
        <h1>Register Page</h1>
        <h2>Personal information</h2>
        <form>
          <div className="form-top">
            <div className="form-section">
              <label for="name">Given Name</label>
              <input name="name" type="text"></input>
              <label for="surname">Surname</label>
              <input name="surname" type="text"></input>
            </div>

            <div className="form-section">
              <label for="student-number">Student Number</label>
              <input name="student-number" type="text"></input>
              <label for="net-id">Net ID</label>
              <input name="net-id" type="text"></input>
            </div>
            <div className="form-section">
              <label for="block">Block:</label>
              <select name="block" id="block" onChange={this.handleChange}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
              </select>
              <label for="room">Room Number: {this.state.block}</label>
              <input type="text" name="room"></input>
            </div>
          </div>
          <div className="form-bottom">
            <h2>Account Information</h2>
            <div className="form-section">
              <label for="username">Username</label>
              <input name="username" type="text"></input>
            </div>
            <div className="form-section">
              <label for="password">Password</label>
              <input name="password" type="password"></input>
              <label for="confirm-password">Confirm Password</label>
              <input name="confirm-password" type="password"></input>
            </div>
            <div className="form-section">
              <label for="male">Male</label>
              <input type="radio" name="gender" vaue="male"></input>
              <label for="female">Female</label>
              <input type="radio" name="gender" value="female"></input>
            </div>
          </div>
          <div className="form-section">
            <input type="submit" id="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
