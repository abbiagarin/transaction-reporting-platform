import { handlersDataProps } from "./type";
import { ApexOptions } from "apexcharts";

export const handlersData: handlersDataProps[] = [
  {
    name: "Posvas",

    transactionCount: {
      successful: 40000,
      failed: 15000,
    },

    transactionValue: {
      successful: 300000000,
      failed: 1500000,
    },
  },

  {
    name: "NUS",

    transactionCount: {
      successful: 20000,
      failed: 10000,
    },

    transactionValue: {
      successful: 1500000000,
      failed: 500000,
    },
  },

  {
    name: "INTERSWITCH",

    transactionCount: {
      successful: 0,
      failed: 0,
    },

    transactionValue: {
      successful: 0,
      failed: 0,
    },
  },

  {
    name: "UPSL",

    transactionCount: {
      successful: 300,
      failed: 50,
    },

    transactionValue: {
      successful: 500000,
      failed: 50000,
    },
  },

  {
    name: "APT PAY",

    transactionCount: {
      successful: 400,
      failed: 70,
    },

    transactionValue: {
      successful: 300000,
      failed: 20000,
    },
  },

  {
    name: "MW-TAMS",

    transactionCount: {
      successful: 5000,
      failed: 370,
    },

    transactionValue: {
      successful: 3000000,
      failed: 10000,
    },
  },

  {
    name: "ISW FAILOVER",

    transactionCount: {
      successful: 1300,
      failed: 100,
    },

    transactionValue: {
      successful: 300000,
      failed: 20000,
    },
  },
];

export const lineChartOptions: ApexOptions = {
  chart: {
    width: 50,
    stacked: false,
    toolbar: {
      show: true,
      offsetY: 10,
      offsetX: -10,
      tools: {
        download: true,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
      },
    },
  },

  colors: ["#191970", "#C5C5C5"],

  dataLabels: {
    enabled: false,
  },

  markers: {
    size: 5,
  },

  legend: {
    show: true,
    showForSingleSeries: true,
    fontFamily: "Nunito Sans",
  },

  yaxis: {
    title: {
      text: "Transaction Count",

      style: {
        color: "#666666",
        fontFamily: "Nunito Sans",
        fontWeight: 400,
      },
    },
    tickAmount: 5,
    min: 0,
    max: 100000,
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
    categories: handlersData.map((handler) => handler.name),
    labels: {
      show: true,
      rotate: 0,
      style: {
        fontFamily: "Nunito Sans",
      },
    },
  },
};

export const lineChartSeries = [
  {
    name: "Succesful",
    data: handlersData.map((handler) => handler.transactionCount.successful),
  },

  {
    name: "Failed",
    data: handlersData.map((handler) => handler.transactionCount.failed),
  },
];
