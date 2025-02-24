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
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#091C2A",
        borderBottom: `2px solid var(--gold)`,
        boxShadow: `0px 4px 15px rgba(255, 255, 255, 0.3)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#E1C2B3", fontWeight: "bold" }}
        >
          1LevelClass
        </Typography>

        {/* Menú en Pantallas Grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button
            component={ScrollLink}
            to="home"
            smooth
            duration={800}
            sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
          >
            Inicio
          </Button>
          <Button
            component={ScrollLink}
            to="about"
            smooth
            duration={800}
            sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
          >
            Sobre Nosotros
          </Button>
          <Button
            component={ScrollLink}
            to="events"
            smooth
            duration={800}
            sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
          >
            Eventos
          </Button>
          {/* <Button
            component={ScrollLink}
            to="gallery"
            smooth
            duration={800}
            sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
          >
            Galería
          </Button> */}
          <Button
            component={ScrollLink}
            to="contact"
            smooth
            duration={800}
            sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
          >
            Contacto
          </Button>
        </Box>

        {/* Menú para Pantallas Pequeñas (Mobile) */}
        <IconButton
          edge="end"
          sx={{ color: "#E1C2B3", display: { md: "none" } }}
          onClick={toggleDrawer(true)}
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
            {[
              { text: "Inicio", to: "home" },
              { text: "Sobre Nosotros", to: "about" },
              { text: "Eventos", to: "events" },
              { text: "Galería", to: "gallery" },
              { text: "Contacto", to: "contact" },
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                component={ScrollLink}
                to={item.to}
                smooth
                duration={800}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": { backgroundColor: "#E1C2B3", color: "#0d0d0d" },
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
