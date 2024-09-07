import React, { createContext, useState, useEffect } from 'react';
import productsData from './products.json';

// Create Product Context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load product data from JSON file
    setProducts(productsData);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
