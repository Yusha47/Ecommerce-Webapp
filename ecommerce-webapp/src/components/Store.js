import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import productsData from '../products.json'; // Adjust the path if needed
import './Store.css'; // Import the CSS file

const Store = () => {
  const { addToCart } = useContext(CartContext);
  const { logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [showMessage, setShowMessage] = useState(false); // State to show the message
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetch from JSON file
    setProducts(productsData);
  }, []);

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  const handleProfileClick = () => {
    logout();
    navigate('/signin'); // Navigate to login after logout
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage(true); // Show the message
    setTimeout(() => setShowMessage(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <div className="store-container">
      {/* Cart and Profile icons */}
      <div className="icon-container">
        <button className="cart-icon" onClick={handleCartClick}>🛒 Cart</button>
        <button className="profile-icon" onClick={handleProfileClick}>👤 Logout</button>
      </div>

      {/* Product grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">€{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>

      {/* "Added to cart" message */}
      {showMessage && <div className="added-to-cart-message">Added to cart successfully!</div>}
    </div>
  );
};

export default Store;
