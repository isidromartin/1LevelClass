import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
        p: 3,
        overflow: "hidden",
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 80 },
            color: { value: "#d4af37" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            move: { speed: 0.5 },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      {/* Imagen de fondo con efecto Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://static.wixstatic.com/media/2005bd_c071cdeaa62743879b70c30b5dc850c2~mv2.jpg/v1/fill/w_1920,h_1080,al_b,q_85,enc_auto/2005bd_c071cdeaa62743879b70c30b5dc850c2~mv2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      ></motion.div>
      {/* Contenido del Hero */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Typography variant="h2" fontWeight="bold">
            Creamos Experiencias Inolvidables
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Eventos de lujo con atención a cada detalle.
          </Typography>
        </motion.div>

        {/* Botón con animación */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 4,
              background: "linear-gradient(45deg, #d4af37, #b88a30)",
              color: "white",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
              transition: "0.4s",
              "&:hover": {
                background: "linear-gradient(45deg, #b88a30, #8a6c1c)",
                transform: "scale(1.05)",
              },
            }}
          >
            Explorar Eventos
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
