import React from "react";
import { useNavigate } from "react-router-dom";
import error_img from "assets/img/error_img.png";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.notFound__section}>
        <div className={styles.notFound__sectionContent}>
          <div className={styles.notFound__sectionDetails}>
            <img src={error_img} alt="" />
            <h3>Page Not Found</h3>
            <p>
              404 Error. It seems like you've ventured into the cosmic void of
              the
            </p>
            <p>internet. Our web page has gone rogue! Please return to base.</p>
            <button onClick={() => navigate("/login")}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
