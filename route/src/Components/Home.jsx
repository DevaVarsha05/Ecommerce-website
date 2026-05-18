import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShippingFast, FaLeaf, FaStar, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  // Home.jsx - Axios call check pannunga
  useEffect(() => {
    axios.get('http://localhost:5000/api/products') // Correct API Path
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  // Handler for add to cart (If you have a function logic, map it here)
  const addToCart = (product) => {
    console.log("Product added:", product);
    alert(`${product.name} added to cart!`);
  };

  const features = [
    { icon: <FaShippingFast />, title: 'FREE SHIPPING', description: 'On order over $100', color: '#e4bedb' },
    { icon: <FaLeaf />, title: 'ALWAYS FRESH', description: 'Product well package', color: '#e4d6b0' },
    { icon: <FaStar />, title: 'SUPERIOR QUALITY', description: 'Quality products', color: '#b2d8a8' },
    { icon: <FaHeadset />, title: 'SUPPORT', description: '24/7 Support', color: '#e4d6b0' },
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
            <div className="feature-icon" style={{ backgroundColor: feature.color }}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className='product'>
        <center>
          <h4>Featured Products</h4>
          <h2>Our Products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </center>
      </div>
      
      {/* SINGLE DYNAMIC PRODUCT GRID */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="col-md-6 col-lg-3" key={product._id}>
            <div className="product">
              {/* Image Route Link */}
              <Link to={`/product/${product._id}`} className="img-prod">
                <img 
                  className="img-fluid" 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200?text=Fresh+Produce";
                  }}
                />
              </Link>
              
              <div className="text py-3 pb-4 px-3 text-center">
                {/* Text decoration inline stripped to avoid native blue links */}
                <h3>
                  <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {product.name}
                  </Link>
                </h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span>₹{product.price}</span></p>
                  </div>
                </div>
                {/* Add to Cart Button */}
                <p className="bottom-area d-flex px-3">
                  <button onClick={() => addToCart(product)} className="add-to-cart text-center py-2 px-5">
                    Add to cart <span><i className="ion-ios-add ml-1"></i></span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <br />

      {/* Logos and Newsletter sections */}
      <div>
        <section className='logo-container'>
          <div className='container2'>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={`row${num}`}>
                <Link to="/home">
                  <img 
                    src={`https://preview.colorlib.com/theme/vegefoods/images/partner-${num}.png`} 
                    alt={`Partner ${num}`} 
                    width={"114px"} 
                    height={"46px"}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className='newsletter'>
          <div className='subscribe'>
            <h2>Subscribe to our Newsletter</h2>
            <span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <form className='subscribe-form' onSubmit={(e) => e.preventDefault()}>
            <div className='subscribe-box'>
              <input type='email' placeholder='Enter email address' required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;
