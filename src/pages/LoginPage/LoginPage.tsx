import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.scss";
import qs from "querystring";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("alkobit@gmail.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const details = {
        email: email,
        password: password,
      };
      try {
        const res = await axios.post(
          "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/users/login",
          qs.stringify(details),
          { headers: headers }
        );

        localStorage.setItem("Token", res.data.token);
        navigate("/");
      } catch (error) {
        console.log(error);
        setMessage("Email or password are incorrect");
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Login to Epicure</h3>
      <div className="login-input">
        <label htmlFor="email">E-Mail: </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login-input">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <label className="login-message">{message}</label>
      <button className="login-button">Login</button>
      <NavLink to="/register">Register</NavLink>
    </form>
  );
};

export default LoginPage;
