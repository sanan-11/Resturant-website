import React from 'react';
// import Image from './img.JPG';
import Image from './logo-06.png'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container Nav_main">
  <a className="navbar-brand" href="/"><img src={Image} alt="" className='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav_ul px-md-4 ms-auto mb-4 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/menu">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bookingTable">Seat Reservation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/dashBoard">DashBoard</a>
        </li> */}
      </ul>
      <form className="d-flex align-items-center nav_last" role="search">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <button className="btn1" type="button">Book Now</button>
        <Link to="/login">
        <button className="btn1" type="button">Admin</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;