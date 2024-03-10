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
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans",
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

        h5: {
          fontWeight: "medium",
        },

        body2: {
          fontWeight: "medium",
          marginLeft: "2rem",
          textAlign: "center",
        },

        body1: {
          fontFamily: "Inter",
          fontWeight: "medium",
        },

        caption: {
          fontFamily: "Inter",
          fontWeight: "light",
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
          fontFamily: "Nunito Sans",
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
          fontFamily: "Inter",
          fontWeight: 400,
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

    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "2px",
          backgroundColor: "#F5F5F5",
          border: "1px solid #9D9D9D",
        },
      },
    },

    MuiTableCell: {
      defaultProps: {
        sx: {
          fontFamily: "Inter",
          color: "rgb(102,102,102)",
          fontSize: "9px",
          borderBottom: "none",
          p: 1.5,
          textAlign: "center",
        },
      },
    },
  },
});

const MuiTheme: React.FC<MuiThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
