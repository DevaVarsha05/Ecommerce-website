import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
       <footer>
    <div className='footer'>
      <div className='row'>
        <h4>Vegefoods</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>

        <div className="icon-container" >
             <Link to="https://twitter.com" > <i className="fab fa-twitter"></i> <FaTwitter />
             </Link> 
             <Link to="https://facebook.com" >  <i className="fab fa-facebook-f"></i> <FaFacebook /></Link> 
             <Link to="https://instagram.com" >     <i className="fab fa-instagram"></i> <FaInstagram /></Link> 
             </div>
     </div>
    
     <div className='row'>
        <h4>Menu</h4>
        <ul>
          <li>Shop</li>
          <li>About</li>
          <li>Journal</li>
          <li>Contact Us</li>

        </ul>
       
        
     </div>
     <div className='row'>
       <h4>Help</h4>
       <ul>
        <li>Shipping Information</li>
        <li>Returns & Exchange</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        
       </ul>

     </div>
     <div className='row'>
      <h4>Have a Questions?</h4>
      <div className='contact-item'>
        <ul>
          <li>
      <span  className='icon'>🌐 </span> 
      <span className='text'>	203 Fake St. Mountain View, San Francisco, California, USA</span>
      </li>
     
   <li> <span className='icon' >📞 </span> 
   <span className='text'>	+2 392 3929 210</span>
   </li>
 <li>
    <span className='icon'>✉️ </span>
    <span className='text'>	info@yourdomain.com</span>
    </li>

     </ul>
     </div>
      
     </div>
    </div>
   </footer>
    </div>
  )
}

export default Footer
