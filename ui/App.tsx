import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  AppContextProvider,
  Applications,
  applicationsClient,
  theme,
  Timestamp,
} from "weave-gitops";

export default function App() {
  return (
    <div>
      My app
      <ThemeProvider theme={theme}>
        <Timestamp time={new Date().toISOString()} />

        <h3>My custom App!!</h3>
        <div>
          <Router>
            <AppContextProvider applicationsClient={applicationsClient}>
              <Applications />
            </AppContextProvider>
          </Router>
        </div>
      </ThemeProvider>
    </div>
  );
}
