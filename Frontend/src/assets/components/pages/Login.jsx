import React, { useState } from 'react';
import '../styles/Login.css';
import { auth } from '../../config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
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
    await axios.post("http://localhost:8080/user", {
      username: formData.username,
      email: formData.email,
      user_id: response.id
    }).then(response => {
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));

      // Check if there's a redirect path saved in localStorage
      const redirectAfterLogin = localStorage.getItem('redirectAfterLogin');
      if (redirectAfterLogin) {
        localStorage.removeItem('redirectAfterLogin'); // Clear the saved path after use
        navigate(redirectAfterLogin); // Navigate to the saved path
      } else {
        navigate('/'); // Default to home if no path was saved
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });
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
          {loading && <h5>loading</h5>}
          {success && <h5 style={{ color: "green" }}>log in is succesful</h5>}
          {error && <h5 style={{ color: "red" }}>{error} </h5>}
        </form>
      </div>
    </div>
  );
}

export default Login;