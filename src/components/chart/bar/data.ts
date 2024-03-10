import { bankDataProps } from "./type";
import { ApexOptions } from "apexcharts";

export const bankData: bankDataProps[] = [
  {
    name: "Access",
    logo: "",
    transactionCount: {
      successful: 8000,
      failed: 1200,
    },
    transactionValue: {
      successful: 250000000,
      failed: 5000000,
    },
  },

  {
    name: "Eco",
    logo: "",
    transactionCount: {
      successful: 24387,
      failed: 2000,
    },
    transactionValue: {
      successful: 300000000,
      failed: 71000000,
    },
  },

  {
    name: "Fidelity",
    logo: "",
    transactionCount: {
      successful: 7387,
      failed: 840,
    },
    transactionValue: {
      successful: 140000000,
      failed: 1000000,
    },
  },

  {
    name: "First Bank",
    logo: "",
    transactionCount: {
      successful: 17387,
      failed: 1840,
    },
    transactionValue: {
      successful: 150000000,
      failed: 41000000,
    },
  },

  {
    name: "FCMB",
    logo: "",
    transactionCount: {
      successful: 37387,
      failed: 11840,
    },
    transactionValue: {
      successful: 90000000,
      failed: 1000000000,
    },
  },

  {
    name: "HB",
    logo: "",
    transactionCount: {
      successful: 3000,
      failed: 200,
    },
    transactionValue: {
      successful: 300000,
      failed: 22000,
    },
  },

  {
    name: "Keystone",
    logo: "",
    transactionCount: {
      successful: 9500,
      failed: 2200,
    },
    transactionValue: {
      successful: 50000000,
      failed: 220000,
    },
  },

  {
    name: "Polaris",
    logo: "",
    transactionCount: {
      successful: 15500,
      failed: 5200,
    },
    transactionValue: {
      successful: 60000000,
      failed: 320000,
    },
  },

  {
    name: "Stanbic",
    logo: "",
    transactionCount: {
      successful: 21000,
      failed: 2100,
    },
    transactionValue: {
      successful: 100000000,
      failed: 8000000,
    },
  },

  {
    name: "Union",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 7100,
    },
    transactionValue: {
      successful: 111000000,
      failed: 5000000,
    },
  },

  {
    name: "UBA",
    logo: "",
    transactionCount: {
      successful: 31000,
      failed: 11000,
    },
    transactionValue: {
      successful: 790000000,
      failed: 1800000,
    },
  },

  {
    name: "Wema",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 1100,
    },
    transactionValue: {
      successful: 60000000,
      failed: 5000000,
    },
  },
  {
    name: "Zenith",
    logo: "",
    transactionCount: {
      successful: 35000,
      failed: 9000,
    },
    transactionValue: {
      successful: 900000000,
      failed: 10000000,
    },
  },
  {
    name: "Sterling",
    logo: "",
    transactionCount: {
      successful: 10000,
      failed: 3100,
    },
    transactionValue: {
      successful: 80000000,
      failed: 2000000,
    },
  },
  {
    name: "GTB",
    logo: "",
    transactionCount: {
      successful: 15000,
      failed: 3100,
    },
    transactionValue: {
      successful: 200000000,
      failed: 18200000,
    },
  },
  {
    name: "Wema",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 1100,
    },
    transactionValue: {
      successful: 60000000,
      failed: 5000000,
    },
  },
  {
    name: "Wema",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 1100,
    },
    transactionValue: {
      successful: 60000000,
      failed: 5000000,
    },
  },
  {
    name: "Wema",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 1100,
    },
    transactionValue: {
      successful: 60000000,
      failed: 5000000,
    },
  },
  {
    name: "Wema",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 1100,
    },
    transactionValue: {
      successful: 60000000,
      failed: 5000000,
    },
  },
  {
    name: "Wema",
    logo: "",
    transactionCount: {
      successful: 11000,
      failed: 1100,
    },
    transactionValue: {
      successful: 60000000,
      failed: 5000000,
    },
  },
];

export const barChartOptions: ApexOptions = {
  chart: {
    width: 50,
    stacked: false,
    toolbar: {
      show: true,
      offsetY: 10,
      offsetX: -10,
      tools: {
        download: true,
      },
    },
  },

  colors: ["#191970", "#C5C5C5"],

  plotOptions: {
    bar: {
      horizontal: false,
    },
  },

  dataLabels: {
    enabled: false,
  },

  legend: {
    show: true,
    showForSingleSeries: true,
    fontFamily: "Inter",
  },

  yaxis: {
    title: {
      text: "Transaction Count",

      style: {
        color: "#666666",
        fontFamily: "Inter",
        fontWeight: 400,
      },
    },
    tickAmount: 5,
    min: 0,
    max: 50000,
    labels: {
      formatter: function (value: number) {
        const interval = 10;
        value = Math.round(value / interval) * interval;

        const roundedValue = value.toString();

        return roundedValue <= "0"
          ? `${roundedValue}`
          : `${roundedValue.substring(0, roundedValue.length - 3)}K`;
      },
    },
  },

  tooltip: {
    y: {
      formatter: function (value: number) {
        return value.toString();
      },
    },
  },

  xaxis: {
    type: "category",
    categories: bankData.map((bank) => bank.name),
    labels: {
      show: true,
      rotate: 0,
      style: {
        fontFamily: "Inter",
      },
    },
  },
};

export const barChartSeries = [
  {
    name: "Succesful",
    data: bankData.map((bank) => bank.transactionCount.successful),
  },

  {
    name: "Failed",
    data: bankData.map((bank) => bank.transactionCount.failed),
  },
];
