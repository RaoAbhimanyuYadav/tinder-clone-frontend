import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h4>Enter Your Email</h4>
        <input type="email" className="login__input" />
        <h4>Enter Your Password</h4>
        <input type="password" className="login__input" />
        <div>
          <button className="login__btn">Login In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
