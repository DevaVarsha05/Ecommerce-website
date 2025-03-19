import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
// import './Count.js';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Footer from './Components/footer';
// import Footer from './Components/Footer';
import './App.css'
import Navigation from './Components/Navigation';

import NotFound from './Components/NotFound';



const App=()=>{
 
  return (
    <Router>
    <div>
    
    
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
       
        <Route path="Blog" element={<Blog/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Cart" element={<Cart/>}/>
      </Routes>
   <Footer/>
   
    </div>
    </Router>
  );
};

export default App;
