import React from 'react';
import './Header.css';  
import Carru1 from '../assets/Carru1.jpg';

const Header = () => {
    return (
      <header>

        <div className="header-image">
          <img src={Carru1} alt="Carrusel" className="carru-image" />
        </div>
      </header>
    );
  };
  
  export default Header;