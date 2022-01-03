import { useState } from "react";
import "./RegisterPage.scss";
import axios from "axios";
import qs from "querystring";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const details = {
        name: name,
        email: email,
        password: password,
      };
      const res = await axios.post(
        "http://localhost:3001/api/v1/users/register",
        qs.stringify(details),
        { headers: headers }
      );
      setMessage(res.data.type);
      console.log(res);
      if (message === "") {
        navigate("/");
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Register to Epicure</h3>
      <div className="login-input">
        <label htmlFor="email">Full Name: </label>
        <input
          type="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button className="login-button">Register</button>
    </form>
  );
};

export default RegisterPage;
