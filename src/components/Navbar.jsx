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
  Link,
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
    // <AppBar
    //   position="fixed"
    //   sx={{
    //     background: "#091C2A",
    //     borderBottom: `2px solid var(--gold)`,
    //     boxShadow: `0px 4px 15px rgba(255, 255, 255, 0.3)`,
    //     backdropFilter: "blur(10px)",
    //   }}
    // >
    //   <Toolbar>
    //     <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //       <Link
    //         href="/"
    //         underline="none"
    //         sx={{ color: "#E1C2B3", fontWeight: "bold" }}
    //       >
    //         <img
    //           src="logo.png"
    //           alt="1LevelClass"
    //           style={{
    //             width: "10%",
    //             maxWidth: "500px",
    //             borderRadius: "12px",
    //           }}
    //         />
    //       </Link>
    //     </Typography>

    //     {/* Menú en Pantallas Grandes */}
    //     <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
    //       <Button sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}>
    //         <Link
    //           href="#home"
    //           underline="none"
    //           sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
    //         >
    //           Inicio
    //         </Link>
    //       </Button>
    //       <Button sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}>
    //         <Link
    //           href="#about"
    //           underline="none"
    //           sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
    //         >
    //           Sobre Nosotros
    //         </Link>
    //       </Button>
    //       <Button sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}>
    //         <Link
    //           href="#events"
    //           underline="none"
    //           sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
    //         >
    //           Eventos
    //         </Link>
    //       </Button>
    //       <Button sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}>
    //         <Link
    //           href="#contact"
    //           underline="none"
    //           sx={{ color: "#f8f5f0", "&:hover": { color: "#E1C2B3" } }}
    //         >
    //           Contacto
    //         </Link>
    //       </Button>
    //     </Box>

    //     {/* Menú para Pantallas Pequeñas (Mobile) */}
    //     <IconButton
    //       edge="end"
    //       sx={{ color: "#E1C2B3", display: { md: "none" } }}
    //       onClick={toggleDrawer(true)}
    //     >
    //       <MenuIcon />
    //     </IconButton>

    //     <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
    //       <List
    //         sx={{
    //           width: 250,
    //           backgroundColor: "#1a1a1a",
    //           height: "100vh",
    //           color: "#f8f5f0",
    //         }}
    //       >
    //         {[
    //           { text: "Inicio", to: "home" },
    //           { text: "Sobre Nosotros", to: "about" },
    //           { text: "Eventos", to: "events" },
    //           { text: "Galería", to: "gallery" },
    //           { text: "Contacto", to: "contact" },
    //         ].map((item, index) => (
    //           <Box key={index}>
    //             <ScrollLink to={item.to} smooth duration={800} offset={-70}>
    //               <ListItem
    //                 button
    //                 onClick={toggleDrawer(false)}
    //                 sx={{
    //                   "&:hover": {
    //                     backgroundColor: "#E1C2B3",
    //                     color: "#0d0d0d",
    //                   },
    //                   padding: "10px 20px",
    //                   fontWeight: "bold",
    //                 }}
    //               >
    //                 <ListItemText primary={item.text} />
    //               </ListItem>
    //             </ScrollLink>
    //           </Box>
    //         ))}
    //       </List>
    //     </Drawer>
    //   </Toolbar>
    // </AppBar>

    <AppBar
      position="fixed"
      sx={{
        background: "#091C2A",
        borderBottom: `2px solid var(--gold)`,
        boxShadow: `0px 4px 15px rgba(255, 255, 255, 0.3)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        {/* Contenedor del Logo y Nombre */}
        {/* <img
          src="logo.png"
          alt="1LevelClass"
          style={{
            width: "10%",
            maxWidth: "500px",
            borderRadius: "12px",
          }}
        /> */}
        <Link
          href="/"
          underline="none"
          sx={{ color: "#E1C2B3", fontWeight: "bold" }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              component="img"
              src="logo.png"
              alt="1LevelClass Logo"
              sx={{ height: 50 }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "var(--gold)", letterSpacing: "1px" }}
            >
              1LevelClass
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
