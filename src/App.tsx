import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDarkMode } from "./atoms/darkMode";

import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const queryClient = new QueryClient();

function App() {
  const { darkMode } = useDarkMode();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingRight: 0,
            "@media (max-width: 639px)": {
              minHeight: 100,
              paddingLeft: 4,
              paddingRight: 4,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: !darkMode
              ? "0px 0px 8px rgb(0 0 0 / 5%)"
              : "0px 2px 16px 4px rgba(0, 0, 0, 0.1)",
            ":hover": {
              boxShadow: !darkMode
                ? "0px 4px 32px rgba(0, 0, 0, 5%)"
                : "0px 4px 32px 8px rgba(0, 0, 0, 0.2)",
            },
          },
        },
      },
      MuiCardActionArea: {
        styleOverrides: {
          focusHighlight: {
            backgroundColor: !darkMode ? "#fff" : "#2C3844",
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
      subtitle2: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 800,
      },
      h6: {
        marginBottom: 16,
        fontSize: 18,
        fontWeight: 600,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1280,
        xl: 1440,
      },
    },
  });

  theme.typography.body1 = {
    ...theme.typography.body1,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
  };

  theme.typography.h6 = {
    ...theme.typography.h6,
    fontSize: "1.125rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.375rem",
      fontWeight: 800,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: darkMode ? "#202D36" : "#fafafa" },
          img: { height: "auto", maxWidth: "100%" },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/country/:id">
              <CountryDetails />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
