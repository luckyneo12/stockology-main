import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const muiTheme = createTheme();

root.render(
  <NextUIProvider>
    {" "}
    <ReduxProvider store={store}>
      <ThemeProvider theme={muiTheme}>
        <ChakraProvider theme={theme}>
          <ColorModeScript />
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </ReduxProvider>
  </NextUIProvider>
);
