import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";

import "../components.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar
      style={{ background: "#880E4F" }}
      className="header"
      dark
      expand="md"
    >
      <MDBNavbarNav left>
        <MDBNavbarBrand>
          <MDBNavItem className="mx-2">
            <MDBNavLink className="whiteLink" to="/" name="HOME">
              <MDBIcon icon="home" size="1x" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarBrand>
      </MDBNavbarNav>

      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="mx-2" to="#" name="ABOUT">
              About Us
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink className="mx-2" to="#" name="CONTACT">
              Contact Us
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem className="mx-2">
            <MDBNavLink to="/login" name="LOGIN">
              Login
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
