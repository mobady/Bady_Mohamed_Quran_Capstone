import React, { useState } from 'react';
import '../styles/Signup.css';
import { auth } from '../../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import axios from "axios"
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let response = await createUserWithEmailAndPassword(auth,formData.email,formData.password)
    await axios.post("http://localhost:8080/user",{
      username:formData.username,
      email:formData.email,
      user_id:response.id
    })
    console.log(response)
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
      </form>
    </div>
    </div>
  );
}

export default Signup;
