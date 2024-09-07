import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import AuthContext
import Login from './components/Login';
import Signup from './components/Signup';
import Store from './components/Store';
import Cart from './components/Cart';
import User from './components/User';

function App() {
  // Get authentication state from the AuthContext
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Redirect to /store if already logged in, otherwise to /signin */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/store" /> : <Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />

        {/* Protect the /store, /cart, and /user routes */}
        <Route path="/store" element={isAuthenticated ? <Store /> : <Navigate to="/signin" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/signin" />} />
        <Route path="/user" element={isAuthenticated ? <User /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
