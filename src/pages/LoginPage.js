import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBLink,
} from "mdbreact";
import axios from "axios";
import useFormHook from "../hooks/useFormHook";

import { AuthContext } from "../context/useAuthContext";

const LoginPage = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail, resetEmail] = useFormHook("");
  const [password, setPassword, resetPassword] = useFormHook("");
  const [isSubmit, setIsSubmit] = useState(false);

  /*  const login = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        {
          email: email,
          password: password,
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        auth.login(res.data.userId, res.data.token);
        console.log(res.data);
        console.log("YOU ARE LOGGED IN");
      }

      //return <Redirect to="/" />;
    } catch (err) {
      console.log("ERROR ON LOGIN");
      console.log(err);
    }
  };*/

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    //login();
    setIsSubmit(false);
    resetEmail();
    resetPassword();
  };

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center my-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="blue-text mb-5">
                  <strong>Login</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="text"
                value={email}
                onChange={setEmail}
                validate
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                value={password}
                onChange={setPassword}
                validate
              />

              <MDBRow className="d-flex flex-column justify-content-center align-items-center  mb-4">
                <MDBCol md="6" className=" mb-2 ">
                  <MDBBtn
                    className="z-depth-1"
                    color="blue"
                    rounded
                    block
                    disabled={isSubmit}
                    onClick={handleLogin}
                  >
                    Login
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="6" className=" d-flex justify-content-column">
                  <p className="font-small grey-text w-100">
                    Don't have an account yet?
                    <MDBLink to="/signup">Sign Up</MDBLink>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;
