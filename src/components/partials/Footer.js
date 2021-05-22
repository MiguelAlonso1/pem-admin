import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="footer-copyright text-center py-4 navbar-custom" style={{ background: "#0878CA" }}>
      <div className="text-center pb-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> Paramedic Emergency Application</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
