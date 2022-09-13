import React from 'react';
import {Link } from 'react-router-dom';

/**
* Login
* 
* Creates the login form.
*
* @author Connor Campbell
* @todo
*/

class Login extends React.Component {

render() {
  return (
    <div className="loginContainer">
       <input
        className='usernameBox'
         type='text' 
         placeholder='Email'
         value={this.props.email}
         onChange={this.props.handleEmail}
       /><br></br>
       <input
       className='passwordBox'
         type='password' 
         placeholder='Password'
         value={this.props.password}
         onChange={this.props.handlePassword}
       />
       <br></br>
      <div className="authButton">
        <Link style={{ textDecoration: 'none'}} to="/" onClick={this.props.handleLoginClick}>Login</Link>
      </div>
    </div>
  );
}
}

export default Login;