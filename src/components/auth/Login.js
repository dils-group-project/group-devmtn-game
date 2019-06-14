import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input className="form-input" placeholder="Username" />
        <input className="form-input" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
