import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css'; // Assuming you'll use CSS for styling

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>An overview of your order</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>€{item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-remove">
                <button onClick={() => handleRemove(item.id)}>×</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <h2>Order Details</h2>
        <div className="summary-item">
          <p>Subtotal</p>
          <p>€{calculateSubtotal().toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="summary-item">
          <p>Estimated Tax</p>
          <p>€ -</p>
        </div>
        <div className="summary-total">
          <h3>Total</h3>
          <h3>€{calculateSubtotal().toFixed(2)}</h3>
        </div>
        <button className="checkout-button">Go to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
