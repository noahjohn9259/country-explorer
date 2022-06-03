import { CssBaseline, GlobalStyles, Theme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import defaultTheme from "./themes/default";
import darkTheme from "./themes/dark";
import { STALE_TIME_DURATION } from "./constants";
import { useDarkMode } from "./atoms/darkMode";

import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME_DURATION,
    },
  },
});

function App() {
  const { darkMode } = useDarkMode();

  const theme: Theme = !darkMode ? defaultTheme() : darkTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          img: { height: "auto", maxWidth: "100%" },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Header windows={window} />
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
