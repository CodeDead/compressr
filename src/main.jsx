import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./components/App";
import MainContextProvider from "./context/MainContextProvider/index.jsx";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <Notifications />
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </MantineProvider>
  </StrictMode>,
);
