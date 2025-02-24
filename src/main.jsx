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
      main: "#E1C2B3", // Dorado
    },
    secondary: {
      main: "#091C2A", // Gris oscuro
    },
    background: {
      default: "#091C2A", // Fondo oscuro
      paper: "#091C2A",
    },
    text: {
      primary: "#E1C2B3", // Champagne
      secondary: "#E1C2B3", // Dorado
    },
  },
  typography: {
    fontFamily: `"Geometros", sans-serif`,

    h1: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 5vw, 3.2rem)",
      lineHeight: 1.2,
    },

    h2: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 700,
      fontSize: "clamp(2rem, 4vw, 2.5rem)",
      lineHeight: 1.3,
    },

    h3: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 600,
      fontSize: "clamp(1.7rem, 3.5vw, 2rem)",
      lineHeight: 1.4,
    },

    h4: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 600,
      fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
      lineHeight: 1.4,
    },

    h5: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 500,
      fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
      lineHeight: 1.5,
    },

    h6: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 500,
      fontSize: "clamp(1rem, 2vw, 1.3rem)",
      lineHeight: 1.6,
    },

    body1: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 400,
      fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
      lineHeight: 1.7,
    },

    body2: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 400,
      fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
      lineHeight: 1.75,
    },

    p: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 400,
      fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
      lineHeight: 1.75,
    },

    button: {
      fontFamily: `"Geometros", sans-serif`,
      fontWeight: 600,
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
    },
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
        backgroundColor: "#091C2A", // Color de fondo global
        color: "#E1C2B3", // Color de texto global
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
