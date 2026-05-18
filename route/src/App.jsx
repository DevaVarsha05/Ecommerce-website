import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Footer from './Components/footer';
import ProductDetails from './Components/ProductDetails';
import './App.css';

const App = () => {
  return (
    <Router> {/* Ella components-um indha Router-ku kulla dhaan irukanum */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;