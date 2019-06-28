import React, { useState } from "react";
import gameFront from "../../img/arcade.svg";

const Register = () => {
  const [state, setState] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  });
  const handleChange = e => {
    setState({
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Login was submitted - TEST");
  };

  console.log(state.pwconfirmed);
  return (
    <div>
      <div className="body-container">
        <div className="screen">
          <div className="login-container">
            <h2>Register</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="form-input"
                placeholder="Email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="First Name"
                type="firstname"
                id="firstname"
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Last Name"
                type="lastname"
                id="lastname"
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Username"
                type="username"
                id="username"
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
              {/* <input
                className="form-input"
                placeholder="Confirm Password"
                type="confirmpw"
                id="confirmpw"
                onChange={handlePasswordCheck}
              /> */}

              <button type="Submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>
        </div>
        <div
          className="game-front"
          style={{ backgroundImage: `url(${gameFront})` }}
        />
        <div className="black-screen" />
      </div>
    </div>
  );
};

export default Register;
