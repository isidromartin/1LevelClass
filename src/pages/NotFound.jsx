import { Box, Typography, Container } from "@mui/material";

export default function NotFound() {
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
          404 - Página no encontrada
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Lo sentimos, la página que buscas no existe.
        </Typography>
      </Container>
    </Box>
  );
}
