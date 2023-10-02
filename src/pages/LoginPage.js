import React from "react";
import itexFrame1 from "../assets/ItexFrame1.png";
import LoginForm from "../components/forms/loginForm/LoginForm";
import "./pageStyle/pageStylesheet.scss";

const LoginPage = () => {
  return (
    <div className="loginSection">
      <div className="loginSection__content">
        <div className="loginSection__content-image">
          <div className="image">
            <img src={itexFrame1} alt="" />
          </div>
        </div>

        <div className="loginSection__content-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
