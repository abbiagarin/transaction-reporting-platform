import React from "react";
import { createTheme, ThemeProvider, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.lightBlue[800],
    },
  },
  typography: {
    fontFamily: ["Nunito Sans"],
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(225, 225, 225, .3)",
          label: {
            fontWeight: "medium",
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "rgb(166,178,200)",
          fontSize: "2rem",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {},

        h4: {
          fontWeight: "bold",
        },

        body2: {
          fontWeight: "medium",
          marginLeft: "2rem",
          textAlign: "center",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      },
    },
  },
});

const MuiTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
