import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('login', this.state.credentials)
      .then(results => {
        localStorage.setItem('token', results.data.payload)
        this.props.history.push('/bubbles')
      })
      .catch(error => {
        console.log('Error is: ', error)
      })
  }

  render() {
    return (
      <div className='login-page'>
        <h1>Login to continue</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button className='button'>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;

// import React, { Link } from "react";

// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

// export default Login;
