import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        {" "}
        <div className="container">
          {" "}
          {/* Brand Name */}{" "}
          <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/">
            {" "}
            ✨ Aaranya Jewels{" "}
          </NavLink>{" "}
          {/* Toggle Button */}{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>{" "}
          </button>{" "}
          {/* Navigation Links */}{" "}
          <div className="collapse navbar-collapse" id="navbarMenu">
            {" "}
            <ul className="navbar-nav ms-auto gap-lg-3">
              {" "}
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link fw-semibold" to="/">
                  {" "}
                  Home{" "}
                </NavLink>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link fw-semibold" to="/about">
                  {" "}
                  About{" "}
                </NavLink>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link fw-semibold" to="/products">
                  {" "}
                  Products{" "}
                </NavLink>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link fw-semibold" to="/contact">
                  {" "}
                  Contact{" "}
                </NavLink>{" "}
              </li>{" "}
            </ul>{" "}
            <NavLink
              to="/products"
              className="btn btn-warning rounded-pill px-4 ms-lg-4 mt-3 mt-lg-0 fw-semibold"
            >
              {" "}
              Shop Now{" "}
            </NavLink>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    </>
  );
}

export default Navbar;
