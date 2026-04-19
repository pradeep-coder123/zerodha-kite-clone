import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("logout")) {
      localStorage.removeItem("token");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3002/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      window.location.href = `http://localhost:3001?token=${res.data.token}`;
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="/media/images/logo.svg"
          alt="logo"
          className="login-logo"
        />

        <h2>Login to your account</h2>

        <input
          type="email"
          placeholder="Email ID"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;