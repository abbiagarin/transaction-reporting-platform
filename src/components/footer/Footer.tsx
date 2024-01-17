import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer__section}>
      <p>
        <span>
          <CopyrightIcon sx={{ fontSize: "1rem", verticalAlign: "middle" }} />
        </span>
        2023 Copyright: iisysgroup.com
      </p>
    </div>
  );
};

export default Footer;
