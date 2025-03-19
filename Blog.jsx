import React from 'react'

import vegefood2 from '../assets/vegefood2.jpg'
import vegefood3 from '../assets/vegefood3.jpg'
import vegefood4 from '../assets/vegefood4.jpg'
import vegefood5 from '../assets/vegefood5.jpg'
import vegefood6 from '../assets/vegefood6.jpg'
import vegefood7 from '../assets/vegefood7.jpg'
import { Link } from 'react-router-dom'; 
const Blog = () => {
  return (
    <div>
    <div className="container2">
        <div className="banner">
            <p className='home'>HOME BLOG</p>
            <h1>BLOG</h1>
        </div>
        <div className="blog2">
            <Link to="blog-single.html" ></Link>
        </div>
        
      
   </div>
 <div className="about">
 <div className='image2'>
   <img src={vegefood7}  width={"250px"} height={"250px"}/>
   </div>
   <div className='text-contents'>
<Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>July 20,2019</Link>
 <Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>Admin</Link>
 <br></br>
 <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
 <br></br>
 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <button className='shop-button'>Read more</button>
 </div>
 </div>
 <div className='about'>
 <div className='image2'>
   <img src={vegefood2}  width={"250px"} height={"250px"}/>
   </div>
   <div className='text-contents'>
<Link to="http://localhost:5173/home" style={{ textDecoration: 'none'}}>July 20,2019</Link>
 <Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>Admin</Link>
 <br></br>
 <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
 <br></br>
 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <button className='shop-button'>Read more</button>
 </div>
 </div>
 <div className='about'>
 <div className='image2'>
   <img src={vegefood3}  width={"250px"} height={"250px"}/>
   </div>
   <div className='text-contents'>
<Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>July 20,2019</Link>
 <Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>Admin</Link>
 <br></br>
 <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
 <br></br>
 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <button className='shop-button'>Read more</button>
 </div>
 </div>
 <div className='about'>
 <div className='image2'>
   <img src={vegefood4}  width={"250px"} height={"250px"}/>
   </div>
   <div className='text-contents'>
<Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>July 20,2019</Link>
 <Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>Admin</Link>
 <br></br>
 <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
 <br></br>
 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <button className='shop-button'>Read more</button>
 </div>
 </div>
 <div className='about'>
 <div className='image2'>
   <img src={vegefood5}  width={"250px"} height={"250px"}/>
   </div>
   <div className='text-contents'>
<Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>July 20,2019</Link>
 <Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>Admin</Link>
 <br></br>
 <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
 <br></br>
 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <button className='shop-button'>Read more</button>
 </div>
 </div>
 <div className='about'>
 <div className='image2'>
   <img src={vegefood6}  width={"250px"} height={"250px"}/>
   </div>
   <div className='text-contents'>
<Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>July 20,2019</Link>
 <Link to="http://localhost:5173/home" style={{ textDecoration: 'none' }}>Admin</Link>
 <br></br>
 <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
 <br></br>
 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <button className='shop-button'>Read more</button>
 </div>
 </div>
 

  </div> 
  )
}

export default Blog
