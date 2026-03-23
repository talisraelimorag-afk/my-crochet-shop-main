import "./App.css";
import { useState } from "react";
import Shop from "./components/Shop";
import logo from "./assets/pictures/logo.png";

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';

import Cart from './Features/cart/Cart';




const App: React.FC = () => {
  return (
    <Router>
      <header className="navbar" style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  padding: '10px 20px' 
}}>
  
  {/* 1. Left Section (Logo) */}
  <div className="brand" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="Company Logo" style={{ height: '100px' }} />
  </div>

  {/* 2. Center Section (Caption) */}
  <h1 style={{ 
    color: '#094e4e', 
    margin: 0, 
    textAlign: 'center', 
    whiteSpace: 'nowrap' 
  }}>
    Tal's Crochet Shop
  </h1>

  {/* 3. Right Section (Links) */}
  <nav style={{ 
    flex: 1, 
    display: 'flex', 
    justifyContent: 'flex-end', 
    gap: '1.5rem' 
  }}>
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/cart">Cart</NavLink>
  </nav>

</header>

    
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
