import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to create a corresponding CSS file for styling

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to validate user credentials
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      login();
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/store'); // Redirect to Store after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container-fluid login-container d-flex justify-content-center align-items-center vh-100">
      <div className="row login-content bg-white shadow p-4">
        {/* Left side - form */}
        <div className="col-lg-6 col-md-12 p-4">
          <h2 className="text-center">Welcome Back!</h2>
          <p className="text-center">Enter your Credentials to access your account</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="form-control mb-3"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email address" 
              required 
            />
            <input 
              type="password" 
              className="form-control mb-3"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="terms" required />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the <a href="https://www.google.com/">Terms & Policy</a>
                </label>
              </div>
              <a href="#" className="forgot-password">Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-dark w-100 mb-3">Sign In</button>
          </form>
          <div className="text-center">or</div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-dark w-100 me-2">Sign in with Google</button>
            <button className="btn btn-outline-dark w-100 ms-2">Sign in with Apple</button>
          </div>
          <p className="text-center mt-3">
            Have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>

        {/* Right side - branding */}
        <div className="col-lg-6 col-md-12 d-none d-lg-block login-image p-4">
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

export default Login;
