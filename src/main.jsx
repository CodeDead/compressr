import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import App from "./components/App";
import MainContextProvider from "./context/MainContextProvider/index.jsx";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextProvider>
      <MantineProvider>
        <Notifications />
        <App />
      </MantineProvider>
    </MainContextProvider>
  </React.StrictMode>,
);
