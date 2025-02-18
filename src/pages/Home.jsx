import { Box, Typography, Button } from "@mui/material";

export default function Home() {
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
      <Typography variant="h2" fontWeight="bold">
        Bienvenido a 1LevelClass
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Eventos de lujo con atención a cada detalle.
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
        Explorar Eventos
      </Button>
    </Box>
  );
}
