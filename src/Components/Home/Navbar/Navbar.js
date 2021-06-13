import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../images/car.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-none">
        <Link className="navbar-brand ms-5 ps-5 "  href="#">CAR-SERVE <span><img style={{width:'35px', marginLeft:'10px'}} src={car} alt=""/></span> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 pe-3  ">
            <li className="nav-item active">
              <Link className="nav-link mx-3" to="/">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3 " to="/booking">Book Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3 " to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3 " to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;