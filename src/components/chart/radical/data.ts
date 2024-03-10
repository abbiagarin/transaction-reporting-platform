import { cardAcquirerProps } from "./type";
import masterCard from "../../../assets/masterCard.png";
import visaCard from "../../../assets/visaCard.png";
import verveCard from "../../../assets/verveCard.png";

export const cardAquirerScheme: cardAcquirerProps[] = [
  {
    name: "mastercard",
    logo: masterCard,
    transactionValue: 45000,
    transactionRate: {
      successful: 85,
      failed: 15,
    },
  },

  {
    name: "visa",
    logo: visaCard,
    transactionValue: 17000,
    transactionRate: {
      successful: 90,
      failed: 10,
    },
  },

  {
    name: "verve",
    logo: verveCard,
    transactionValue: 12000,
    transactionRate: {
      successful: 65,
      failed: 35,
    },
  },
];

export const accessCardAquirerScheme: cardAcquirerProps[] = [
  {
    name: "mastercard",
    logo: masterCard,
    transactionValue: 45000,
    transactionRate: {
      successful: 85,
      failed: 15,
    },
  },

  {
    name: "visa",
    logo: visaCard,
    transactionValue: 17000,
    transactionRate: {
      successful: 90,
      failed: 10,
    },
  },

  {
    name: "verve",
    logo: verveCard,
    transactionValue: 12000,
    transactionRate: {
      successful: 65,
      failed: 35,
    },
  },
];

// radialData.js
export const radialChartData = cardAquirerScheme.map((card) => {
  return {
    name: card.name,
    logo: card.logo,
    data: [card.transactionRate.successful, card.transactionRate.successful],
  };
  // console.log(card.logo);
});

// radialChartOptions.js
export const radialChartOptions = {
  chart: {
    height: 200,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
      },
      dataLabels: {
        name: {
          fontSize: "6px",
          fontFamily: "Inter",
        },
        value: {
          show: false,
        },

        total: {
          show: true,
          fontSize: "10px",
          fontFamily: "Inter",
          fontWeight: 300,
        },
      },
    },
  },

  labels: ["successful"],

  tooltip: {
    enabled: true,
    fillSeriesColor: false,

    y: {
      formatter: function (value: any) {
        return value + "%";
      },

      title: {
        formatter: function (seriesName: any) {
          return "";
        },
      },
    },
  },

  colors: ["#191970", "#C5C5C5"],

  stroke: {
    lineCap: undefined,
  },
};
