import { createTheme, Theme } from "@mui/material";

export default (): Theme =>
  createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "hsl(207, 26%, 17%)",
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
            "@media (min-width: 640px)": {
              minHeight: 80,
              paddingLeft: 0,
              paddingRight: 0,
            },
            "@media (max-width: 639px)": {
              minHeight: 100,
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
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.07)",
            backgroundColor: "#2B3743",
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
            backgroundColor: "#2B3743",
            boxShadow: "0px 2px 16px 4px rgba(0, 0, 0, 0.1)",
            ":hover": {
              boxShadow: "0px 4px 32px 8px rgba(0, 0, 0, 0.2)",
            },
          },
        },
      },
      MuiCardActionArea: {
        styleOverrides: {
          focusHighlight: {
            backgroundColor: "#2C3844",
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
      allVariants: {
        color: "#fff",
      },
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
          fontSize: 14,
          fontWeight: 400,
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
