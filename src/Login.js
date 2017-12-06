import React from 'react';
import createReactClass from 'create-react-class';
import { Link, Redirect } from 'react-router';

const Login = createReactClass({
  render() {
    
    return (
      <div>
        Login
        <Link to="/candace">Candace</Link>
        <Link to="/user">User</Link>
      </div>
    )
  }
})

export default Login;