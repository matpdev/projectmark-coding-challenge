import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import "./styles/global.css";
import { PlanProvider } from "./controller/planController";
import Header from "./components/header/header";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <PlanProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <App />
    </ThemeProvider>
  </PlanProvider>
);
