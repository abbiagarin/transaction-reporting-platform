import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

interface MuiThemeProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(37, 136, 193, 1)",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
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

        h6: {
          fontWeight: "medium",
          textAlign: "center",
        },

        body2: {
          fontWeight: "medium",
          marginLeft: "2rem",
          textAlign: "center",
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiLoadingButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",

          "&.Mui-disabled": {
            background: "rgba(37, 136, 193, .5);",
            color: "rgb(255,255,255)",
          },

          "& .MuiButton-endIcon svg ": {
            fontSize: "2rem",
            color: "rgb(255,255,255)",
          },
        },
      },
    },

    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       padding: "2rem",
    //     },
    //   },
    // },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          cursor: "pointer",
          // backgroundColor: "rgb(25, 25, 112)",
          // color: "rgb(255,255,255)",

          // "&:active": {
          //   backgroundColor: "rgb(25, 25, 112)",
          //   color: "rgb(255,255,255)",
          // },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: "rgb(0,0,0)",
          textTransform: "capitalize",

          "&.Mui-selected": {
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(25, 25, 112)",
            borderRadius: "0.3rem",
          },
        },
      },
    },
  },
});

const MuiTheme: React.FC<MuiThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
