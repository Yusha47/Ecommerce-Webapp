import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from React 18
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create the root

// Render the app wrapped in all the providers
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
