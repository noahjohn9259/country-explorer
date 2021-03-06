import { createTheme, Theme } from "@mui/material";

const TEXT_COLOR = "hsl(0, 0%, 100%)";
const BG_COLOR = "hsl(207, 26%, 17%)";
const PAPER_BG_COLOR = "hsl(209, 23%, 22%)";

export default (): Theme =>
  createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: PAPER_BG_COLOR,
        default: BG_COLOR,
      },
      text: {
        primary: TEXT_COLOR,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#2b3743",
            fontSize: 16,
            fontWeight: 600,
            "@media (max-width: 639px)": {
              fontWeight: 400,
              fontSize: 14,
            },
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: 80,
            "@media (min-width: 640px)": {
              paddingLeft: 0,
              paddingRight: 0,
            },
            "@media (max-width: 639px)": {
              paddingLeft: 4,
              paddingRight: 4,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            paddingLeft: 16,
            backgroundColor: PAPER_BG_COLOR,
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.07)",
            ":hover": {
              ".MuiOutlinedInput-notchedOutline": {
                boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.07)",
                borderColor: "transparent",
              },
            },
          },
          notchedOutline: {
            borderColor: "transparent",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          outlined: {
            paddingLeft: 8,
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            paddingLeft: 8,
            paddingRight: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "0px 2px 16px 4px rgba(0, 0, 0, 0.1)",
            ":hover": {
              boxShadow: "0px 4px 32px 8px rgba(0, 0, 0, 0.2)",
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 24,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            marginTop: 4,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    typography: {
      fontFamily: [
        "'Nunito Sans'",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      body1: {
        "@media (max-width: 639px)": {
          fontWeight: 400,
        },
      },
      subtitle2: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 800,
        fontSize: 30,
        "@media (max-width: 639px)": {
          fontSize: 22,
        },
      },
      h6: {
        marginBottom: 16,
        fontSize: 18,
        fontWeight: 600,
        "@media (max-width: 639px)": {
          fontSize: 16,
          fontWeight: 800,
        },
      },
      fontWeightBold: 600,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1328,
        xl: 1440,
      },
    },
  });
