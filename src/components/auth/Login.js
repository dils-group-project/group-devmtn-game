import React, { useState, useEffect } from "react";
import gameFront from "../../img/arcade.svg";

const Login = () => {
  const [state, setState] = useState({
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

  console.log(state.username);
  return (
    <div>
      {/* Body */}
      <div className="body-container">
        <div className="screen">
          <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="form-input"
                placeholder="Username"
                type="username"
                id="username"
                onChange={handleChange}
              />
              <input
                className="form-input"
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
              />
              <button type="Submit" className="submit-btn">
                Login
              </button>
              <a className="link-btn" href="/register">
                Register
              </a>
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

export default Login;
