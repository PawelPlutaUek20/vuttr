import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "light",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
