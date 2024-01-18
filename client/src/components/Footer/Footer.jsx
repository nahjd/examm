import React from 'react'
import  "./Footer.scss"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import {Helmet} from "react-helmet";
const Footer = () => {
  return (
    <>
    <footer>
 <div className="foot">
 <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <div className="onee">

   <h1 >ABOUT US</h1>
 <li>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Neque <br /> facere laudantium magnam <br /> voluptatum autem. Amet aliquid <br /> nesciunt veritatis aliquam.</li>
   </div>
<div className="twoo">
<h1>QUICK LINKS</h1>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
</div>
<div className="threee">
  <h1>FOLLOW US</h1>
  <div className="icons">
  <li><FaFacebookF /></li>
  <li><FaTwitter /></li>
  <li><FaInstagram /></li>
  <li><FaLinkedinIn /></li>
  </div>

</div>
<div className="imagess">
  <h1>FEATURED PRODUCT</h1>
  <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
  <p>Leather Brown Shoe</p>
  <h4 >$60.00</h4>
  <button className='cart'>ADD TO CART</button>
</div>

      
 </div>
      
      
    </footer>
    </>
  )
}

export default Footer