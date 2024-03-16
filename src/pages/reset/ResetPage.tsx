import React from "react";
import ResetForm from "../../modules/reset/ResetForm";
import itexFrame1 from "../../assets/ItexFrame1.png";
import "formStyleSheet/FormStyleSheet.scss";

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
