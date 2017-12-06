import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router';

const Login = createReactClass({
  render() {
    return (
      <div>
        Login
        <Link to="/candace">Candace</Link>
      </div>
    )
  }
})

export default Login;