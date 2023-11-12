import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(37, 136, 193, 1)",
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
            fontWeight: "light",
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
          color: "rgb(166,178,200)",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: "medium",
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

          "&.Mui-disabled": {
            background: "rgba(37, 136, 193, .5);",
            color: "rgb(255,255,255)",
          },
        },
      },
    },

    MuiLoadingButton: {
      styleOverrides: {
        root: {
          ".MuiButton-endIcon>*:nth-of-type(1)": {
            fontSize: "2rem",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

const MuiTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
