import React from 'react'
import { FaShippingFast, FaLeaf, FaStar, FaHeadset } from 'react-icons/fa';
// import CountUp from 'react-countup';

const About = () => {

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
    <div className="section">
        <div className="banner"><p className='home'>HOME ABOUT US</p>
        <h1>ABOUT US</h1>
        </div>
     <div className='about'>
        <div className='img'>
          <img src="https://media.istockphoto.com/id/1432352468/photo/young-woman-in-supermarket.jpg?s=612x612&w=0&k=20&c=k1Ea_GDstccsUwhzLINhyRzGllI7NVQUIqHMrBE9A5s=" alt="colorlib" width={"400px"} height={"450px"}/>
        </div>
      <div className="text-content">
      

        <h2>Welcome to vegefoods an ecommerce website</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

           But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
         <button className='shop-button'>Shop now</button>
     </div>
     </div>
     <section className='newsletter'>
      <div className='subscribe'>
         <h2>Subcribe to our Newsletter</h2>
         <span>Get e-mail updates about our latest shops and special offers</span>
      </div>
      
        <form className='subscribe-form'>
        <div className='subscribe-box'>
        <input type='text' placeholder='Enter email address' />
        <button>Subscribe</button>
       
        </div>
        </form>
    
    </section>
   <div>
   <ul id="countdown">
  <li id="days">
    <div class="number">00</div>
    <div class="label">Days</div>
  </li>
  <li id="hours">
    <div class="number">00</div>
    <div class="label">Hours</div>
  </li>
  <li id="minutes">
    <div class="number">00</div>
    <div class="label">Minutes</div>
  </li>
  <li id="seconds">
    <div class="number">00</div>
    <div class="label">Seconds</div>
  </li>
</ul>

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
  
    </div>
     
   
  )
}

export default About;


