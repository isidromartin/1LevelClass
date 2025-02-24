import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "url('hero.png')",
      }}
    >
      {/* Contenido del Hero */}
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "transparent",
              background:
                "linear-gradient(45deg, rgb(225, 194, 179), rgba(255, 255, 255, 0.8))",
              backgroundClip: "text",
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            Creamos Experiencias Únicas
          </Typography>
          {/* <Typography
            variant="h5"
            sx={{
              mt: 2,
              color: "white",
              opacity: 0.8,
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            Eventos de lujo diseñados para quienes buscan exclusividad y
            perfección.
          </Typography> */}

          <h2>Eventos de lujo diseñados para quienes</h2>

          {/* Botón con Animación */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                background: "rgb(225, 194, 179)",
                color: "black",
                fontWeight: "bold",
                px: 5,
                py: 1.5,
                borderRadius: "30px",
                boxShadow: "0 4px 15px rgba(225, 194, 179, 0.4)",
                transition: "0.4s",
                "&:hover": { background: "rgb(200, 170, 155)" },
              }}
            >
              Descubre Más
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
