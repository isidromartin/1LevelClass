import { Box, Container, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
        p: 3,
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight="bold">
          Creamos Experiencias Inolvidables
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Eventos de lujo con atención a cada detalle.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
          Descubre Nuestros Eventos
        </Button>
      </Container>
    </Box>
  );
}
