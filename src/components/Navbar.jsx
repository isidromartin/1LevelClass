import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternar el menú en móviles
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolling
          ? "linear-gradient(to right, #1a1a1a, #2b2b2b)"
          : "rgba(13, 13, 13, 0.7)",
        backdropFilter: "blur(10px)",
        transition: "0.5s ease-in-out",
        borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
        boxShadow: scrolling ? "0px 4px 10px rgba(212, 175, 55, 0.2)" : "none",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#d4af37", fontWeight: "bold" }}
        >
          1LevelClass
        </Typography>

        {/* Menú para pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Sobre Nosotros
          </Button>
          <Button
            component={Link}
            to="/events"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Eventos
          </Button>
          <Button
            component={Link}
            to="/gallery"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Galería
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Contacto
          </Button>
        </Box>

        {/* Menú para móviles */}
        <IconButton
          edge="end"
          sx={{ color: "#d4af37", display: { md: "none" } }}
          onClick={toggleDrawer(true)}
          component={motion.div}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <List
            sx={{
              width: 250,
              backgroundColor: "#1a1a1a",
              height: "100vh",
              color: "#f8f5f0",
            }}
          >
            {["Inicio", "Sobre Nosotros", "Eventos", "Galería", "Contacto"].map(
              (text, index) => (
                <ListItem
                  button
                  key={text}
                  component={Link}
                  to={["/", "/about", "/events", "/gallery", "/contact"][index]}
                  onClick={toggleDrawer(false)}
                  sx={{
                    "&:hover": { backgroundColor: "#d4af37", color: "#0d0d0d" },
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
