import React from "react";
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div id="login-container">
          {/* Login */}
          <p>Login below</p>
          <label>Enter username:</label>
          <input type="text"></input>
          <br />
          <label>Enter paswword:</label>
          <input type="text"></input>
          <br />
          <button type="submit">Login</button>

          {/* Link to Register */}
          <p>Don't have an account?</p>
          <Link to="/register">Click here for registration</Link>
        </div>
    )
}

export default Login;