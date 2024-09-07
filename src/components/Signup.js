import React, { useState } from 'react';
import './SignUp.css';  // Create this file for custom styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there's already an entry for users in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add the new user data to the existing array
    const updatedUsers = [...existingUsers, formData];
  
    // Store it back to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    // You can redirect to the sign-in page after signup
    window.location.href = '/signin';  // Redirect to SignIn page after successful sign up
  };
  

  return (
    <div className="container-fluid signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="row signup-content bg-white shadow p-4">
        {/* Left side - form */}
        <div className="col-lg-6 col-md-12 p-4">
          <h2 className="text-center">Welcome To <span className="brand-name">FurniFlex</span></h2>
          <p className="text-center">Signup for purchase your desire products</p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="firstName"
                  className="form-control mb-3"
                  placeholder="First name (optional)"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="lastName"
                  className="form-control mb-3"
                  placeholder="Last name (optional)"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the <a href="https://www.google.com/">Terms & Policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-dark w-100 mb-3">Signup</button>
          </form>
          <div className="text-center">or</div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-dark w-100 me-2">Sign in with Google</button>
            <button className="btn btn-outline-dark w-100 ms-2">Sign in with Apple</button>
          </div>
          <p className="text-center mt-3">
            Have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
        
        {/* Right side - image */}
        <div className="col-lg-6 col-md-12 d-none d-lg-block signup-image p-4">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center text-white">
            <div className="logo-circle bg-primary mb-3">
              <span className="logo-text">F</span>
            </div>
            <h3>FurniFlex</h3>
            <p>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
