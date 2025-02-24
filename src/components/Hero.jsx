import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="home"
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
            1LevelClass
          </Typography>

          <Typography
            variant="h4"
            sx={{ m: 4, opacity: 0.8, fontStyle: "italic" }}
          >
            Not just a pretty face, but the talent and dedication to elevate
            your brand to the next level.
          </Typography>

          {/* Botón con Animación */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
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
