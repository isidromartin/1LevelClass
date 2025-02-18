import { Box, Typography, Container, TextField, Button } from "@mui/material";

export default function Contact() {
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
      <Container maxWidth="sm">
        <Typography variant="h2" fontWeight="bold">
          Contáctanos
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Rellena el formulario y te responderemos lo antes posible.
        </Typography>

        <Box component="form" sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Nombre"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mensaje"
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Enviar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
