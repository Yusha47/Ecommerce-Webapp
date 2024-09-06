import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import { CartContext } from '../CartContext';

const Store = () => {
  const { products } = useContext(ProductContext); // Get products from ProductContext
  const { addToCart } = useContext(CartContext); // Get addToCart from CartContext

  const handleAddToCart = (product) => {
    console.log("Adding to Cart: ", product); // Debug: Check product info
    addToCart(product); // Add product to the cart
  };

  return (
    <div>
      <h1>Store Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} width="150" height="150" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
