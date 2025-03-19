import React from 'react'
import {useState} from 'react';
import emailjs from 'emailjs-com';
import BellPepper from '../assets/Bellpepper.jpg';
import juice from '../assets/juice.jpg';
import { Link } from 'react-router-dom'; 
const Account = () => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // EmailJS credentials (Replace with actual values)
      const serviceID = "service_gzlfir7";
      const templateID = "template_e92cuju";
      const userID = "devavarsha05@gmail.com";
  
      // Initialize EmailJS (required)
      emailjs.init(userID);
  
      // Send email
      emailjs
        .send(serviceID, templateID, { email: email }, userID)
        .then((response) => {
          alert("Subscription successful");
          setEmail("");
        })
        .catch((error) => {
          alert("Failed to send email");
          console.error("EmailJS Error:", error);
        });
    };
  return (
    <div>
         <div className="section">
        <div className="banner"><p className='home'>HOME CART</p>
        <h1>MY CART</h1>
        </div>
        </div>
        <div className='product'>
          <table className='cart-table'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link to="#">
                        
                        </Link>
                    </td>
                    <img src={BellPepper} alt="Purple Bell Pepper" class="product-image"/>
                    <td className='product-info'>
                        <div>
                        <h3>Bell Pepper</h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                        </div>
                    </td>
                    <td>$4.90</td>
                    <td>
                        <div>
                            <input type='text' value='                  1' min={"1"} max={"100"}></input>
                        </div>
                        
                    </td>
                    <td>$4.90</td>
                  </tr>
              <tr>
                    <td>
                        <Link to="#">
                        
                        </Link>
                    </td>
                    <img src={juice} alt="Purple Bell Pepper" class="product-image"/>
                    <td className='product-info'>
                        <div>
                        <h3>Bell Pepper</h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                        </div>
                    </td>
                    <td>$4.90</td>
                    <td>
                        <div>
                            <input type='text' value='                  1' min={"1"} max={"100"}></input>
                        </div>
                        
                    </td>
                    <td>$4.90</td>
                </tr>
            </tbody>
          </table>
        </div>
        <section className='newsletter'>
      <div className='subscribe'>
         <h2>Subcribe to our Newsletter</h2>
         <span>Get e-mail updates about our latest shops and special offers</span>
      </div>
      
        <form className='subscribe-form' onSubmit={handleSubmit}>
        <div className='subscribe-box'>
        <input type='email' placeholder='Enter email address'  value={email} onChange={(e)=> setEmail(e.target.value)}required />
        <button type="submit" onClick={handleSubmit}>Subscribe</button>

       
        </div>
        </form>
    
    </section>
    </div>
  )
}

export default Account
