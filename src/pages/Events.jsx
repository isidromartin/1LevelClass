import { Box, Typography, Container } from "@mui/material";

export default function Events() {
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
          Nuestros Eventos
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Organización de bodas de lujo, eventos corporativos y experiencias VIP
          personalizadas.
        </Typography>
      </Container>
    </Box>
  );
}
