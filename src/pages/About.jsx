import { Box, Typography, Container } from "@mui/material";

export default function About() {
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
          Sobre Nosotros
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Descubre la historia de 1LevelClass y nuestra pasión por eventos
          exclusivos.
        </Typography>
      </Container>
    </Box>
  );
}
