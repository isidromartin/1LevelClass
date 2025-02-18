import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        color: "#f8f5f0",
        py: 4,
        textAlign: "center",
        mt: 6,
      }}
    >
      <Container>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          1LevelClass
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Eventos de lujo diseñados para clientes exigentes.
        </Typography>

        {/* Redes Sociales */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{
              color: "#f8f5f0",
              transition: "0.3s",
              "&:hover": { color: "#d4af37" },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{
              color: "#f8f5f0",
              transition: "0.3s",
              "&:hover": { color: "#d4af37" },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{
              color: "#f8f5f0",
              transition: "0.3s",
              "&:hover": { color: "#d4af37" },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{
              color: "#f8f5f0",
              transition: "0.3s",
              "&:hover": { color: "#d4af37" },
            }}
          >
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Enlaces de Footer */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 3 }}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Términos y Condiciones
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#f8f5f0", "&:hover": { color: "#d4af37" } }}
          >
            Política de Privacidad
          </Link>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
          © {new Date().getFullYear()} 1LevelClass. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}
