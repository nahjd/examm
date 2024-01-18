import React from "react";
import NavbarSmalic from "../NavbarSmalic/NavbarSmalic";
import Navbar from "./../Navbar/Navbar";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <NavbarSmalic />
      <Navbar />
   
      <div className="container">
        <div className="text">
          <h1>Shop With Us</h1>
        </div>
        <div className="paragraf">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            <br />
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
        </div>

        <button className="btn1">Show now</button>
        <button className="btn2">Club MemberShip</button>
      </div>
    </>
  );
};

export default Home;
