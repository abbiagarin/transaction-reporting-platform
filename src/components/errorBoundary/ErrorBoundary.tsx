import React from "react";
import error404 from "assets/img/error404.png";
import styles from "./Error.module.scss";
import { ErrorInfo } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

interface ErrorProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorComponent({ error, resetErrorBoundary }: ErrorProps) {
  return (
    <div>
      <div className={styles.error__section}>
        <div className={styles.error__sectionContent}>
          <div className={styles.error__sectionDetails}>
            <img src={error404} alt="" />
            <h3>Something went wrong...</h3>
            <p>We are working to fix the problem. Pls try again!</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>
              {" "}
              <RefreshIcon
                sx={{
                  fontSize: "1.8rem",
                  color: "rgb(37, 136, 193)",
                  marginRight: "0.5rem",
                }}
              />
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorLog(error: Error, componentStack: ErrorInfo) {
  console.error("An Error Occured", error, componentStack);
}
