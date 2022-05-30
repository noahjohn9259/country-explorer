import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDarkMode } from "./atoms/darkMode";

import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const { darkMode } = useDarkMode();
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
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
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1328,
        xl: 1536,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: darkMode ? "#202D36" : "#fafafa" },
          img: { height: "auto", maxWidth: "100%" },
        }}
      />
      <Router>
        <Switch>
          <Route path="/country/:id">
            <CountryDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
