import React, { useState } from 'react';
import '../styles/Login.css';
import { auth } from '../../assets/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Login({setUserAuth}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await signInWithEmailAndPassword(auth, formData.email, formData.password)
    console.log(formData)
    setUserAuth(response.user)
  navigate("/")
};

  return (
    <div className="login">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
          <h3>Don't have an account? <Link to={"/signup/"}>Signup here</Link> </h3>
          {loading && <h5>loading</h5>}
          {success && <h5 style={{ color: "green" }}>log in is succesful</h5>}
          {error && <h5 style={{ color: "red" }}>{error} </h5>}
        </form>
      </div>
    </div>
  );
}

export default Login;