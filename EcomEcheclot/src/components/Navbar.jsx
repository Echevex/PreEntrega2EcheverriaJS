import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 


const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__links">
        <li><a href="/">Inicio</a></li>
        <li 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <a href="/categorias">Categorías</a>
          {showCategories && (
            <ul className="dropdown">
              <li><a href="/BuzosPage">Buzos</a></li>
              <li><a href="/RemPage">Remeras</a></li>
            </ul>
          )}
        </li>
        <li><a href="/sale">Sale</a></li>
        <li><a href="/carrito">Carrito</a></li>
      </ul>
      <div className="navbar__icons">
        <button className="navbar__icon">🔍</button>
        <button className="navbar__icon">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;