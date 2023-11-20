import React from "react";
import { useNavigate } from "react-router-dom";
import error404 from "../../assets/error404.png";
import itexLogo from "../../assets/itexLogo.png";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.notFound__section}>
        <div className={styles.notFound__sectionContent}>
          <div className={styles.notFound__sectionDetails}>
            <img src={itexLogo} alt="" />
            <h4>404.That's an error</h4>
            <p>The requested URL was not found on this server</p>
            <button onClick={() => navigate("/login")}>Back to Home</button>
          </div>

          <div className={styles.error_img}>
            <img src={error404} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
