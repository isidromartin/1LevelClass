import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: "#d4af37", // Dorado
    },
    secondary: {
      main: "#1a1a1a", // Gris oscuro
    },
    background: {
      default: "#0d0d0d", // Fondo oscuro
      paper: "#1a1a1a",
    },
    text: {
      primary: "#f8f5f0", // Champagne
      secondary: "#d4af37", // Dorado
    },
  },
  typography: {
    fontFamily: "Rubik, sans-serif",
  },
});

// Estilos globales para eliminar margen y padding del body
const globalStyles = (
  <GlobalStyles
    styles={{
      "html, body": {
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        backgroundColor: "#0d0d0d", // Color de fondo global
        color: "#f8f5f0", // Color de texto global
      },
    }}
  />
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
