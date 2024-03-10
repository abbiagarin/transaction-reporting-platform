import React from "react";
import styles from "../components/BankDashboard.module.scss";

const TopBanks = [
  {
    bankName: "UBA",
    count: 21000,
  },
  {
    bankName: "Zenith",
    count: 14000,
  },
  {
    bankName: "Eco",
    count: 12000,
  },
  {
    bankName: "GTB",
    count: 10000,
  },
  {
    bankName: "Access",
    count: 9000,
  },
];

const LowBanks = [
  {
    bankName: "Unity Bank",
    count: 1000,
  },
  {
    bankName: "Keystone",
    count: 974,
  },
  {
    bankName: "Sterling",
    count: 714,
  },
  {
    bankName: "Providus",
    count: 570,
  },
  {
    bankName: "Heritage Bank",
    count: 211,
  },
];

export const TopBankPerformance = () => {
  return (
    <div>
      {TopBanks.map((bank, i) => (
        <ul>
          <li key={i} className={styles.topError}>
            <span style={{ padding: "5px" }}>{bank.bankName}</span>
            <span>{bank.count}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export const LeastBankPerformance = () => {
  return (
    <div>
      {" "}
      {LowBanks.map((bank, i) => (
        <ul>
          <li key={i} className={styles.topError}>
            <span style={{ padding: "5px" }}>{bank.bankName}</span>
            <span>{bank.count}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};
