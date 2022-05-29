import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Country from "./pages/Country";
import "./App.css";

function App() {
  const theme = createTheme({
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
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/country/:id">
            <Country />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
