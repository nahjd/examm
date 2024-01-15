import React from "react";
import Navbar from "./../Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import NavbarSmalic from "./../NavbarSmalic/NavbarSmalic";
import "./About.scss";
const About = () => {
  return (
    <>
      <NavbarSmalic />
      <Navbar />
      <section>
        <div className="about">
          <div className="leftdiv">
            <img
              src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
              alt=""
            />
            <div className="write">
              <h1>Trusted Merchant</h1>
              <p>FOR 50 YEARS</p>
            </div>
          </div>
          <div className="rightdiv">
            <h4>MERCHANT COMPANY</h4> <br />
            <h1>About Us</h1> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
              ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
              inventore, rem maxime, nisi excepturi ipsam libero ratione
              adipisci alias eius vero vel!
            </p>{" "}
            <br />
            <button
              style={{
                width: "120px",
                height: "35px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="leadershop">
          <div className="leadertext">
            <h4>Team</h4>
            <h1>Leadership</h1> <br />
          </div>
          <div className="cards">
            <div className="card1">
              <img
                src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
                alt=""
              />{" "}
              <br />
              <div className="comment">
                <h1>John Rooster</h1>
                <p>CO-FOUNDER, PRESIDENT</p> <br />
                <span>
                  Nisi at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </span>{" "}
                <br />
                <br />
                <div className="iconlar">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                  <FaInstagramSquare />
                </div>
              </div>
            </div>
            <div className="card1">
              <img
                src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
                alt=""
              />{" "}
              <br />
              <div className="comment">
                <h1>John Rooster</h1>
                <p>CO-FOUNDER, PRESIDENT</p> <br />
                <span>
                  Nisi at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </span>{" "}
                <br />
                <br />
                <div className="iconlar">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                  <FaInstagramSquare />
                </div>
              </div>
            </div>
            <div className="card1">
              <img
                src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
                alt=""
              />{" "}
              <br />
              <div className="comment">
                <h1>John Rooster</h1>
                <p>CO-FOUNDER, PRESIDENT</p> <br />
                <span>
                  Nisi at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </span>{" "}
                <br />
                <br />
                <div className="iconlar">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                  <FaInstagramSquare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
