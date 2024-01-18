import React from "react";
import "./special.scss"
import { IoIosBusiness } from "react-icons/io";
import { SiCoinmarketcap } from "react-icons/si";
import { MdMonitor } from "react-icons/md";
const Special = () => {
  return <>
  <div className="special">
    <div className="special2">
    <h4>OUR SERVICES</h4>
  <h1>We Offer Services</h1>
    </div>
    <div className="slm">

    <div className="one">
    <div className="one1">
    <IoIosBusiness className="icon" style={{fontSize:"55px", color:"orange"}} />
      <h2>
Business Consulting</h2> <br />
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae eligendi at.</span> <br /> <br />
<button className="more">Learn More</button>
    </div>
    <div className="two2">
    <SiCoinmarketcap  className="icon" style={{fontSize:"55px", color:"orange"}} />
      <h2>Seller Consulting</h2> <br />
      <span>Lorem ipsum dolor  sit amet  consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae eligendi at.</span> <br /> <br />
      <button className="more">Learn More</button>

    </div>
    <div className="three3">
    <MdMonitor  className="icon" style={{fontSize:"55px", color:"orange"}}/>
      <h2>User Monitoring</h2> <br />
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae eligendi at.</span> <br /> <br />
      <button className="more">Learn More</button>

    </div>
    </div>
    <div className="one">
    <div className="one1">
    <IoIosBusiness className="icon" style={{fontSize:"55px", color:"orange"}} />
      <h2>
Business Consulting</h2> <br />
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae eligendi at.</span> <br /> <br />
<button className="more">Learn More</button>
    </div>
    <div className="two2">
    <SiCoinmarketcap  className="icon" style={{fontSize:"55px", color:"orange"}} />
      <h2>Seller Consulting</h2> <br />
      <span>Lorem ipsum dolor  sit amet  consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae eligendi at.</span> <br /> <br />
      <button className="more">Learn More</button>

    </div>
    <div className="three3">
    <MdMonitor  className="icon" style={{fontSize:"55px", color:"orange"}}/>
      <h2>User Monitoring</h2> <br />
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae eligendi at.</span> <br /> <br />
      <button className="more">Learn More</button>

    </div>
    </div>
    </div>
    
   
  </div>

  
  </>;
};

export default Special;
