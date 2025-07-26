import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.jsx";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import {  MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <MantineProvider >
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </MantineProvider>
);
