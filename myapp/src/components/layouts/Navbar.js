import React from "react";
import { Link, nav } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">
        GreanKart
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Plants
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about">
                Action
              </Link>
              <Link className="dropdown-item" to="/contact">
                Another action
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="#">
              Pots
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Accessories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Plant Care
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Cart
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light my-sm-0 btn-sm" type="submit">
                Search
              </button>
            </form>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
