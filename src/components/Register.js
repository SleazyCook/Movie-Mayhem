import React from "react";

const Register = () => {
    return (
        <div id="login-container">
          {/* Registration Form */}
          <p>Enter new credentials below</p>
          <label>Enter new username:</label>
          <input type="text"></input>
          <br />
          <label>Enter new paswword:</label>
          <input type="text"></input>
          <br />
          <button type="submit">Register</button>
        </div>
    )
}

export default Register;