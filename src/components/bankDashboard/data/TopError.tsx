import React from "react";
import styles from "../BankDashboard.module.scss";

const errorData = [
  {
    message: "Not Sufficent funds",
    count: 3000,
  },
  {
    message: "Issuer or Switch Inoperative",
    count: 3000,
  },
  {
    message: "Incorrect Pin",
    count: 589,
  },
  {
    message: "No Savings acount",
    count: 390,
  },
  {
    message: "No checking Acount",
    count: 270,
  },
  {
    message: "Do Not Honour",
    count: 141,
  },
  {
    message: "Invalid Transaction",
    count: 181,
  },
  {
    message: "Transaction Not Permitted to cardholder",
    count: 111,
  },
  {
    message: "Routing Error",
    count: 93,
  },
  {
    message: "Restricted card",
    count: 27,
  },
];

const TopError = () => {
  return (
    <div>
      {errorData.map((error, i) => (
        <ul>
          <li key={i} className={styles.topError}>
            <span style={{ padding: "5px" }}>{error.message}</span>
            <span>{error.count}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TopError;
