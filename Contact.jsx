import React from 'react'
import { Link } from 'react-router-dom'; 
const Contact = () => {
  return (
    <div>
         <div className="section">
        <div className="banner"><p className='home'>HOME CONTACT US</p>
        <h1>CONTACT US</h1>
        </div>
     
        </div>
    <div className='details'>
      <div className='contact-box'>
      <p>
            <span>Address:</span>
            198 West 21th Street, Suite 721 New York NY 10016
        </p>
      </div>
       

        <br></br>
        <div className='contact-box'>
        <p>
            <span>Phone:</span>
            <Link to="tel://1234567920" style={{ textDecoration: 'none' ,color:'black'}}>+ 1235 2355 98</Link>
        </p>
        </div>
        
        <br></br>
        <div className='contact-box'>
        <p>
            <span>Email:</span>
            <Link to="info@yoursite.com" style={{ textDecoration: 'none',color:'black'}}> info@yoursite.com</Link>
        </p>
        </div>
        

        <br></br>
        <div className='contact-box'>
        <p>
            <span>Website:</span>
            <Link to="https://preview.colorlib.com/theme/vegefoods/contact.html#" style={{ textDecoration: 'none',color:'black' }}>  yoursite.com</Link>
        </p>
        </div>
        
        </div>
  
    <div className='form-container'> 
      <form className='myform'>
        <div>
          <input type='text' placeholder='Your Name'></input>
        </div>
        <div>
          <input type='text' placeholder='Your Email'></input>
        </div>
        <div>
          <input type='text' placeholder='subject'></input>
        </div>
        <div>
          <textarea name id cols='30' rows={"7"} placeholder='Message'></textarea>
        </div>
        <div>
          <button type='submit'>Send Message</button>
        </div>
      </form>
    </div>
    </div>
 
  )
}

export default Contact
