import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <main className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-wrapper">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
