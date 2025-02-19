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
    title: "Bodas de Lujo",
    desc: "Organizamos bodas inolvidables en los destinos más exclusivos, con una planificación impecable y servicios personalizados.",
    img: "https://static.wixstatic.com/media/2005bd_7788c7cfa81a4c69aea032da17505012~mv2.jpg",
  },
  {
    title: "Eventos Corporativos",
    desc: "Diseñamos eventos empresariales que reflejan prestigio y excelencia, con locaciones de primer nivel y servicios de alta gama.",
    img: "https://static.wixstatic.com/media/2005bd_4c559cd801df47ec9a28f44227a1f96f~mv2.jpg",
  },
  {
    title: "Fiestas Privadas",
    desc: "Desde celebraciones íntimas hasta galas impresionantes, creamos experiencias exclusivas para nuestros clientes más exigentes.",
    img: "https://static.wixstatic.com/media/2005bd_896b1079f9594246ae975af0cca0bcb6~mv2.jpg",
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
            variant="h5"
            sx={{ mb: 4, maxWidth: "800px", margin: "0 auto", opacity: 0.8 }}
          >
            Cada evento que diseñamos es una obra maestra, creada para reflejar
            elegancia, exclusividad y un nivel de detalle sin precedentes.
          </Typography>
        </motion.div>

        {/* Grid de Tarjetas de Eventos */}
        <Grid container spacing={4} justifyContent="center">
          {events.map((event, index) => (
            <Grid item xs={12} md={4} mt={5} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    bgcolor: "#1a1a1a",
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
                    <Typography variant="h6" fontWeight="bold">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
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
