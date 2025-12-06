import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logoimg" className="logo"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga, quae eaque vitae necessitatibus eligendi nam asperiores eius,
            quasi recusandae qui inventore incidunt ut explicabo quod! Molestiae
            provident minus qui?
          </p>
          {/* <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div> */}
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-221-334-7645</li>
                <li>contact@flavour.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copywrite">
        &copy; {new Date().getFullYear()} Flavour. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
