import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@slices";
import App from "@components/app";
import { ThemeProvider } from "styled-components";
import theme from "@src/theme";
import "@src/index.css";

const container = document.getElementById("root");

createRoot(container).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
