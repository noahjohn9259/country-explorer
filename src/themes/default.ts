import { createTheme, Theme } from "@mui/material";

const FONT_SIZE = 16;

const TEXT_COLOR = "hsl(200, 15%, 8%)";
const BG_COLOR = "#fafafa";
const PAPER_BG_COLOR = "#fff";

export default (): Theme =>
  createTheme({
    palette: {
      mode: "light",
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
            boxShadow: "0px 0px 8px rgb(0 0 0 / 5%)",
            ":hover": {
              boxShadow: "0px 4px 32px rgba(0, 0, 0, 5%)",
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
      fontSize: FONT_SIZE,
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
        fontSize: 16,
        fontWeight: 600,
        "@media (max-width: 639px)": {
          fontWeight: 400,
          fontSize: 14,
        },
      },
      subtitle2: {
        fontSize: 16,
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
