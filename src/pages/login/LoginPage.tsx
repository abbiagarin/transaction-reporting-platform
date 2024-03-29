import React from "react";
import itexFrame1 from "../../assets/img/ItexFrame1.png";
import LoginForm from "components/login/LoginForm";
import "components/formStyleSheet/FormStyleSheet.scss";

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
