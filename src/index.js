import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { CountriesProvider } from "./contexts/countries/countries.context";
import { ThemeProvider } from "./contexts/theme/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountriesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CountriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
