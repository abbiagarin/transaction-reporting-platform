import React from "react";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <h2>
        An Error Ocurred
        <span>
          <img
            draggable="false"
            class="emoji"
            alt="🚨"
            src="https://s.w.org/images/core/emoji/14.0.0/svg/1f6a8.svg"
          />
        </span>
      </h2>
      <p>Unable to handle request at the moment. Please try again</p>
    </div>
  );
};

export default ErrorPage;
