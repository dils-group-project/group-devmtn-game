import React, { Component } from "react";
import { connect } from 'react-redux';

import { login } from '../../redux/authReducer';

class Login extends Component {

  state = {
    email: '',
    passowrd: '',
  }

  handleInput = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <input className="form-input"
            placeholder="email"
            name='email'
            value={this.state.email}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
          <input className="form-input" 
            placeholder="Password"
            name='passowrd'
            value={this.state.passowrd}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      login: (user) => dispatch(login(user))
  }
}

const mapStateToProps = (state) => {
  console.log(state.rootReducer.firebase.auth)
  return {
      authError: state.rootReducer.firebase.auth.authError,
      auth: state.rootReducer.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);