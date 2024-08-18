import React from "react";
import "./bookingstyle.css";
import Navbar from "../Navbar/Navbar";
import icon from '../Contact/WhatsApp.png'
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <>
      <Navbar/>
    <div className="card">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="maindiv"
      >
        <div className="heading">
          <h1>Booking Table</h1>
        </div>
        <input
          type="hidden"
          name="access_key"
          value="c69c45b6-50f8-46fd-a31a-983b48ca93aa"
        />
        <div className="names">
          <div className="first">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              placeholder="Enter first name"
              name="first name"
            ></input>
          </div>
          <div className="last">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Enter second name"
              name="last name"
            ></input>
          </div>
          <div className="first">
            <label className="label">Phone</label>
            <input
              className="input"
              placeholder="Enter phone number"
              name="phone"
            ></input>
          </div>
        </div>
        <div className="datetime">
          <div className="first">
            <label className="label">Date</label>
            <input className="dateinput" type="date" name="date"></input>
          </div>
          <div className="last">
            <label className="label">Time</label>
            <select name="time" id="" className="timeinput">
              <option value="select time">Select Time</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
              <option value="12:00 PM">12:00 AM</option>
            </select>
          </div>
          <div className="last1">
            <label className="label">People</label>
            <select name="people" className="peopleinput">
              <option value="select Person">Select Person</option>
              <option value="1 Person">1 Person</option>
              <option value="2 Person">2 Persons</option>
              <option value="3 Person">3 Persons</option>
              <option value="4 Person">4 Persons</option>
              <option value="5 Person">5 Persons</option>
              <option value="6 Person">6 Persons</option>
              <option value="7 Person">7 Persons</option>
              <option value="8 Person">8 Persons</option>
              <option value="9 Person">9 Persons</option>
              <option value="10 Person">10 Persons</option>
            </select>
          </div>
        </div>
        <div className="email">
          <label className="label">Email Address</label>
          <input
            className="inputemail"
            placeholder="Enter email address"
            name="email"
          ></input>
        </div>
        <div className="comment">
          <label className="label">Comment</label>
          <textarea
            className="textarea"
            placeholder="Enter message"
            name="message"
          ></textarea>
        </div>
       <Link to="https://wa.me/92xxxxxxxxxx? Hello How I can help you ?" target='_blank'> <img className="icon" src={icon} alt="" /></Link>
        <p className="bookp">Book Through Whatsapp</p>
        <div className="button">
          <button className="submitbutton">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">Submit</span>
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Booking;
