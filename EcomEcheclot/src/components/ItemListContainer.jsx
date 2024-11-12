// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../data/asynmock';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Productos Destacados</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-buttons">
              <button className="btn">Ver Más</button>
              <button className="btn">Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
