import React from "react";
import itexFrame1 from "../assets/ItexFrame1.png";
import ResetForm from "../components/forms/resetForm/ResetForm";
import "./pageStyle/pageStylesheet.scss";

const ResetPage = () => {
  return (
    <div className="resetSection">
      <div className="resetSection__content">
        <div className="resetSection__content-image">
          <div className="image">
            <img src={itexFrame1} alt="" />
          </div>
        </div>

        <div className="resetSection__content-form">
          <ResetForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
