import React from 'react';

import { FaShippingFast, FaLeaf, FaStar, FaHeadset } from 'react-icons/fa';
import BellPepper from '../assets/Bellpepper.jpg';
import Strawberrys from '../assets/Strawberrys.jpg';
import greenBeans from '../assets/greenBeans.jpg';
import juice from '../assets/juice.jpg';
import carrot from '../assets/carrot.jpg';
import broccolli from '../assets/broccolli.jpg';
import purplecabbage from '../assets/purplecabbage.jpg';
import tomato from '../assets/tomato.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: 'FREE SHIPPING',
      description: 'On order over $100',
      color: '#e4bedb',
    },
    {
      icon: <FaLeaf />,
      title: 'ALWAYS FRESH',
      description: 'Product well package',
      color: '#e4d6b0',
    },
    {
      icon: <FaStar />,
      title: 'SUPERIOR QUALITY',
      description: 'Quality products',
      color: '#b2d8a8',
    },
    {
      icon: <FaHeadset />,
      title: 'SUPPORT',
      description: '24/7 Support',
      color: '#e4d6b0',
    },
  ];




  return (
    <div>
    <div className="one">
      <div className='container1'> 
     
         <h1>We Serve Fresh Vegtable & Fruits</h1>
      <p>WE DELIVER ORGANIC VEGTABLE AND FRUITS</p>
      <button className='button1'>View Details</button>
      </div>
     </div>
      <div className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div
            className="feature-icon"
            style={{ backgroundColor: feature.color }}
          >
            {feature.icon}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    <div className='product'>
      <center>
      <h4 >Featured Products</h4>
      <h2>Our Products</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </center>
    </div>
    
    <div class="product-grid">
    <div class="product-card">
   
      <img src={tomato} alt="Tomatoe" class="product-image" />
      <h3 class="product-name">Tomatoe</h3>
      <div class="product-price">
        <span class="original-price">$120.00</span>
        <span class="discounted-price">$80.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={BellPepper} alt="Bell Pepper" class="product-image" />
      <h3 class="product-name">Bell Pepper</h3>
      <div class="product-price">
        <span class="original-price">$120.00</span>
        <span class="discounted-price">$80.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={Strawberrys} alt="Strawberry" class="product-image" />
      <h3 class="product-name">Strawberry</h3>
      <div class="product-price">
        <span>$120.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={greenBeans} alt="Green Beans" class="product-image" />
      <h3 class="product-name">Green Beans</h3>
      <div class="product-price">
        <span>$120.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={purplecabbage} alt="Purple Cabbage" class="product-image" />
      <h3 class="product-name">Purple Cabbage</h3>
      <div class="product-price">
        <span>$120.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={broccolli} alt="Broccoli" class="product-image" />
      <h3 class="product-name">Broccoli</h3>
      <div class="product-price">
        <span>$120.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={carrot} alt="Carrots" class="product-image" />
      <h3 class="product-name">Carrots</h3>
      <div class="product-price">
        <span>$120.00</span>
      </div>
    </div>

    <div class="product-card">
      <img src={juice} alt="Fruit Juice" class="product-image" />
      <h3 class="product-name">Fruit Juice</h3>
      <div class="product-price">
        <span>$120.00</span>
      </div>
    </div>
  </div>
<hr></hr>

<br></br>


  <div>
    <section className='logo-container'>
      <div className='container2'>
        <div className='row1'>
          <Link to="http://localhost:5173/home">
          <img src='https://preview.colorlib.com/theme/vegefoods/images/partner-1.png' alt='Colorlib Template'  width={"114px"} height={"46px"}/>
          </Link>
        </div>

        <div className='row2'>
          <Link to="http://localhost:5173/home">
          <img src='https://preview.colorlib.com/theme/vegefoods/images/partner-2.png' alt='Colorlib Template'  width={"114px"} height={"46px"}/>
          </Link>
        </div>

        <div className='row3'>
          <Link to="http://localhost:5173/home">
          <img src='https://preview.colorlib.com/theme/vegefoods/images/partner-3.png' alt='Colorlib Template'  width={"114px"} height={"46px"}/>
          </Link>
        </div>

        <div className='row4'>
          <Link to="http://localhost:5173/home">
          <img src='https://preview.colorlib.com/theme/vegefoods/images/partner-4.png' alt='Colorlib Template'  width={"114px"} height={"46px"}/>
          </Link>
        </div>

        <div className='row5'>
          <Link to="http://localhost:5173/home">
          <img src='https://preview.colorlib.com/theme/vegefoods/images/partner-5.png' alt='Colorlib Template'  width={"114px"} height={"46px"}/>
          </Link>
        </div>
      </div>
    </section>
    <section className='newsletter'>
      <div className='subscribe'>
         <h2>Subcribe to our Newsletter</h2>
         <span>Get e-mail updates about our latest shops and special offers</span>
      </div>
      
        <form className='subscribe-form'>
        <div className='subscribe-box'>
        <input type='email' placeholder='Enter email address' />
        <button onClick="subscribe()">Subscribe</button>
        <p id="message"></p>
       
        </div>
        </form>
    
    </section>
   
 
  
  </div>
  
   
    </div>

 
    
    

 
  
  
  )
}
export default Home;
