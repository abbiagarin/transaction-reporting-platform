import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

export const CardData = [
  {
    header: "18 Total Banks",
    body: "18",
    footer: <div>18 total banks</div>,
  },
  {
    header: "Total transactions",
    body: (
      <>
        <span style={{ color: "#191970" }}>
          <TbCurrencyNaira style={{ verticalAlign: "middle" }} />
          2,165,882,302.48
        </span>
      </>
    ),
    footer: <div>256,669 total transactions</div>,
  },
  {
    header: "Successful transactions",
    body: (
      <>
        <span style={{ color: "#089966" }}>
          <TbCurrencyNaira style={{ verticalAlign: "middle" }} />
          1,636,629,180.81
        </span>
      </>
    ),
    footer: <div>211,792 successful transactions</div>,
  },
  {
    header: "Failed Transactions",
    body: (
      <>
        <span style={{ color: "#FF0000" }}>
          <TbCurrencyNaira style={{ verticalAlign: "middle" }} />
          529,253,121.67
        </span>
      </>
    ),
    footer: <div>44,940 failed transactions</div>,
  },
];
