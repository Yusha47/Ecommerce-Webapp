import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Store from './components/Store';
import Cart from './components/Cart';
import User from './components/User';

function App() {
  // Check if the user is already logged in
  const isLoggedIn = !!localStorage.getItem('currentUser'); // You can adjust how to check this based on your login flow

  return (
    <Router>
      <Routes>
        {/* Redirect to /store if already logged in */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/store" /> : <Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/User" element={<User />} />

      </Routes>
    </Router>
  );
}

export default App;
