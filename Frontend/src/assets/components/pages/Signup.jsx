import React, { useState } from 'react';
import '../styles/Signup.css';
import { auth } from '../../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup({setUserAuth}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
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

    if (loading) {
      console.log("you are loading")
      return
    }
    console.log(formData);
    setError(null)
    setSuccess(null)
    setLoading(true)
    try {
      let response = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      console.log("sign up response", response)
      setUserAuth(response.user)
      await axios.post("http://localhost:8080/users", {
        username: formData.username,
        email: formData.email,
        _id: response.user.uid
      })
      setError(null)
      setSuccess("congrats, you have signed up")
      navigate("/")
    } catch (error) {
      console.log(error.code)
      setError(error.code)
      console.error(error);
    }
    setLoading(false)
  };

  return (
    <div className='signup'>
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Signup</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="submit-button">Sign Up</button>
          {loading && <h5>loading</h5>}
          {success && <h5 style={{ color: "green" }}>log in is succesful</h5>}
          {error && <h5 style={{ color: "red" }}>{error} </h5>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
