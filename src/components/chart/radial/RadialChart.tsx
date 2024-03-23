// RadialChart.js

import React from "react";
import Chart from "react-apexcharts";
import { radialChartOptions } from "./data";
import { cardAcquirerProps } from "./type";

interface RadialChartProps {
  data: cardAcquirerProps[];
}

export const RadialChart: React.FC<RadialChartProps> = ({ data }) => {
  const chartData = data.map((card) => ({
    name: card.name,
    logo: card.logo,
    data: [card.transactionRate.successful, card.transactionRate.failed],
    transactionValue: card.transactionValue,
  }));

  const seriesData = chartData.map((item) => {
    return item.data[0];
  });

  const legendData = data.map((card) => ({
    name: card.name,
    successRate: card.transactionRate.successful,
    failedRate: card.transactionRate.failed,
  }));

  const formatTotalValue = (totalSum: any) => {
    if (totalSum >= 1e6) {
      return (totalSum / 1000000).toFixed(0) + "m\nTransactions";
    }
    if (totalSum >= 1e3) {
      return (totalSum / 1000).toFixed(0) + "k\nTransactions";
    } else {
      return totalSum + "\nTransactions";
    }
  };

  return (
    <Chart
      options={{
        ...radialChartOptions,
        plotOptions: {
          radialBar: {
            ...radialChartOptions.plotOptions.radialBar,
            dataLabels: {
              ...radialChartOptions.plotOptions.radialBar.dataLabels,
              total: {
                ...radialChartOptions.plotOptions.radialBar.dataLabels.total,
                label: formatTotalValue(String(chartData[0].transactionValue)),
              },
            },
          },
        },

        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "9px",
          fontFamily: "Inter",

          onItemClick: {
            toggleDataSeries: false,
          },

          formatter: (_, opts) => {
            const index = opts.seriesIndex;
            const item = legendData[index];

            if (item) {
              return (
                `${item.successRate}% successful ` +
                `${item.failedRate}% failed`
              );
            }

            return "";
          },

          labels: {
            colors: "#666666",
          },
        },
      }}
      series={seriesData}
      labels={legendData.map((item) => item.name)}
      height={radialChartOptions.chart.height}
      type="radialBar"
    />
  );
};
