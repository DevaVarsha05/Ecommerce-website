import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
    

     
        <li><NavLink  to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/shop" className={({isActive})=> isActive ? 'active':''}>Shop</NavLink></li>
        <li><NavLink to="/Blog" className={({isActive})=> isActive ? 'active':''}>Blog</NavLink></li>
        <li><NavLink  to="/Contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        <li><NavLink  to="/Cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink></li>
        <li><NavLink  to="/Footer" className={({ isActive }) => isActive ? 'active' : ''}>Footer</NavLink></li>
     
       
     
      </ul>
    </nav>
  );
};

export default Navigation;
