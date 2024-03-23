import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { bankData, barChartOptions, barChartSeries } from "./data";

const formatTotalSum = (totalSum: number): string => {
  let suffix = "";

  if (totalSum >= 1e9) {
    totalSum /= 1e9;
    suffix = "B";
  } else if (totalSum >= 1e6) {
    totalSum /= 1e6;
    suffix = "M";
  } else if (totalSum >= 1e3) {
    totalSum /= 1e3;
    suffix = "K";
  }

  return `₦${totalSum} ${suffix}`;
};

export const BarChart: React.FC = () => {
  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    const cumulativeSum = bankData.map((bank) => ({
      name: bank.name,
      totalSum: bank.transactionValue.successful + bank.transactionValue.failed,
    }));

    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: cumulativeSum.map((bank) => [
          `${bank.name}`,
          `${formatTotalSum(bank.totalSum)}`,
        ]),
      },
    }));
  }, []);

  return (
    <Chart
      options={options}
      series={barChartSeries}
      type="bar"
      height={400}
      width={1800}
    />
  );
};
