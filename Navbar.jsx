import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
 
  return (
    <div>
       <header className="navbar">
      <div className="logo">VEGEFOODS</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
       
        <Link >Shop 
        
        <li class="dropdown"  >
      
        <ul class="dropdown-menu">
       
                            <li>Shop</li>
                            <li>Wishlist</li>
                            <li> Single product</li>
                            <li>Cart</li>
                            <li>Checkout</li>
                       
                           
                        </ul>

          </li>             
                    
        
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Cart">Cart🛒
         
        </Link>
       
      </nav>
      
    </header>
    </div>
   
  )
}

export default navbar
