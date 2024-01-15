import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const NavbarSmalic = () => {
  return (
    <>
      <div className="smalic">
        <div className="icons">
          <FaFacebook />
          <FaTwitter />
          <FaSquareInstagram />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default NavbarSmalic;
