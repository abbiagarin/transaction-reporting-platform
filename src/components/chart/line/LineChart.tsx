import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { handlersData, lineChartOptions, lineChartSeries } from "./data";

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

export const LineChart: React.FC = () => {
  const [options, setOptions] = useState(lineChartOptions);

  useEffect(() => {
    const cumulativeSum = handlersData.map((handler) => ({
      name: handler.name,
      totalSum:
        handler.transactionValue.successful + handler.transactionValue.failed,
    }));

    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: cumulativeSum.map((handler) => [
          `${handler.name}`,
          `${formatTotalSum(handler.totalSum)}`,
        ]),
      },
    }));
  }, []);

  return (
    <Chart
      options={options}
      series={lineChartSeries}
      type="line"
      height={400}
      width={1200}
    />
  );
};
