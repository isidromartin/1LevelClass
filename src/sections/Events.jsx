import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const events = [
  {
    title: "Eventos en restaurantes",
    desc: "Nuestra agencia eleva la imagen de restaurantes de lujo, atrayendo un público exclusivo, mejorando la experiencia y potenciando su visibilidad en redes y eventos especiales.",
    img: "ev4.jpg",
  },
  {
    title: "Eventos de moda y marcas de lujo",
    desc: "Nuestra agencia potencia eventos de moda al aportar un toque de elegancia y dinamismo, conectando con un público selecto y maximizando la visibilidad y prestigio de cada marca.",
    img: "ev3.jpg",
  },
  {
    title: "Eventos deportivos",
    desc: "Nuestra agencia transforma la experiencia, aportando una imagen sofisticada y dinámica que eleva la visibilidad del evento, atrae patrocinadores y fideliza a los aficionados.",
    img: "ev2.jpg",
  },
  {
    title: "Ferias y congresos de lujo",
    desc: "Nuestra agencia potencia ferias y congresos de lujo al realzar la imagen del evento, generar conexiones estratégicas y garantizar experiencias inolvidables",
    img: "ev1.jpg",
  },
];

export default function Events() {
  return (
    <Box
      sx={{
        // bgcolor: "#141414",
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
            Eventos Exclusivos
          </Typography>
          <Typography
            variant="p"
            sx={{ mb: 4, maxWidth: "800px", margin: "0 auto", opacity: 0.8 }}
          >
            Cada evento que diseñamos es una obra maestra, creada para reflejar
            elegancia, exclusividad y un nivel de detalle sin precedentes.
          </Typography>
        </motion.div>

        {/* Grid de Tarjetas de Eventos */}
        <Grid container spacing={5} justifyContent="center">
          {events.map((event, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={3}
              xl={3}
              mt={{ xs: 5, md: 4 }}
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    bgcolor: "#091C2A",
                    color: "white",
                    borderRadius: "12px",
                    border: "2px solid rgb(225, 194, 179)",
                    boxShadow: "0px 10px 20px rgba(225, 194, 179, 0.2)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 15px 25px rgba(225, 194, 179, 0.3)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={event.img}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ mt: 1, opacity: 0.8, color: "rgb(225, 194, 179)" }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, opacity: 0.8, color: "rgb(225, 194, 179)" }}
                    >
                      {event.desc}
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
