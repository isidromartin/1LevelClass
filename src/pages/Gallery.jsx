import { Box, Typography, Container } from "@mui/material";

export default function Gallery() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
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
          Galería
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Explora nuestra colección de eventos exclusivos en imágenes.
        </Typography>
      </Container>
    </Box>
  );
}
