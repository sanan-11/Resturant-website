import React from "react";
import "./About1.css";
import aboutimage from "./aboutimage.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from '../Navbar/Navbar';
const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="about">
        <div className="img">
          <img className="aboutimg" src={aboutimage} alt="img" />
        </div>
        <div className="detail">
          <h1 className="heading">ABOUT US</h1>
          <p className="paragraph">
            Lorem ipsum, placeholder or dummy text used in typesetting and
            graphic design for previewing layouts. It features scrambled Latin
            text, which emphasizes the design over content of the layout. It is
            the standard placeholder text of the printing and publishing
            industries. Lorem ipsum, placeholder or dummy text used in
            typesetting and graphic design for previewing layouts. It features
            scrambled Latin text, which emphasizes the design over content of
            the layout. It is the standard placeholder text of the printing and
            publishing industries.
          </p>
        </div>
      </div>
      <center className="icons">
        <a
          href="https://wa.me/92xxxxxxxxxx?text=Hello How I can help you?"
          target="_blank"
        >
          <WhatsAppIcon></WhatsAppIcon>
        </a>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
      </center>
    </div>
  );
};

export default About;
