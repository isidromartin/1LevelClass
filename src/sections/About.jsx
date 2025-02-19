import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function About() {
  return (
    <Box
      // sx={{
      //   minHeight: "100vh",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   textAlign: "center",
      //   color: "white",
      //   p: 6,
      // }}
      sx={{
        color: "rgb(225, 194, 179)",
        py: 6,
        px: 3,
        textAlign: "center",
        position: "relative",
        borderTop: "2px solid rgba(225, 194, 179, 0.3)",
      }}
    >
      <Container>
        {/* Título con Animación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ mb: 4, color: "rgb(225, 194, 179)" }}
          >
            Sobre Nosotros
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, maxWidth: "800px", margin: "0 auto", opacity: 0.8 }}
          >
            En 1LevelClass, redefinimos el lujo a través de eventos exclusivos
            diseñados para un público selecto que busca experiencias
            inolvidables. Nuestro equipo de expertos en planificación se encarga
            de cada detalle con la máxima perfección.
          </Typography>
        </motion.div>

        {/* Grid de Información */}
        <Grid container spacing={4} mt={4} justifyContent="center">
          {[
            {
              title: "Eventos Exclusivos",
              desc: "Cada evento que organizamos es una obra de arte, diseñado para reflejar lujo y distinción.",
              icon: (
                <EmojiEventsIcon
                  sx={{ fontSize: 50, color: "rgb(225, 194, 179)" }}
                />
              ),
            },
            {
              title: "Ubicaciones de Ensueño",
              desc: "Desde castillos históricos hasta islas privadas, encontramos el lugar perfecto para cada ocasión.",
              icon: (
                <LocationOnIcon
                  sx={{ fontSize: 50, color: "rgb(225, 194, 179)" }}
                />
              ),
            },
            {
              title: "Atención Personalizada",
              desc: "Ofrecemos un servicio de concierge 24/7 para garantizar que cada detalle sea impecable.",
              icon: (
                <SupportAgentIcon
                  sx={{ fontSize: 50, color: "rgb(225, 194, 179)" }}
                />
              ),
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    bgcolor: "#1a1a1a",
                    color: "white",
                    p: 2,
                    borderRadius: "10px",
                    textAlign: "center",
                    border: "2px solid rgb(225, 194, 179)",
                    boxShadow: "0px 10px 20px rgba(225, 194, 179, 0.2)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 15px 25px rgba(225, 194, 179, 0.3)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h4">{item.icon}</Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
