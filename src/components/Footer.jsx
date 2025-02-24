import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import { Instagram, Email } from "@mui/icons-material";

export default function Footer() {
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
        <Box
          sx={{
            pb: 3,
          }}
        >
          <Box
            component="img"
            src="logo.png"
            alt="1LevelClass Logo"
            sx={{ height: 100 }}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "var(--gold)", letterSpacing: "1px" }}
          >
            1LevelClass
          </Typography>
        </Box>
        <Box
          sx={{
            pb: 3,
            mb: 3,
            borderBottom: "2px solid rgba(225, 194, 179, 0.3)",
          }}
        >
          <Typography variant="h5" fontWeight="100" fontStyle="italic">
            "Belleza con proposito. Presencia con impacto"
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Columna 1: Logo y Descripción */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              1LevelClass
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                maxWidth: "300px",
                margin: "auto",
                color: "white",
              }}
            >
              Creamos eventos de lujo diseñados para clientes exigentes que
              buscan experiencias únicas.
            </Typography>
          </Grid>

          {/* Columna 2: Enlaces Rápidos */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#about"
                underline="none"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { color: "rgb(225, 194, 179)" },
                }}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="#events"
                underline="none"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { color: "rgb(225, 194, 179)" },
                }}
              >
                Eventos
              </Link>
              <Link
                href="#contact"
                underline="none"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { color: "rgb(225, 194, 179)" },
                }}
              >
                Contacto
              </Link>
            </Box>
          </Grid>

          {/* Columna 3: Redes Sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Síguenos
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                component="a"
                href="mailto:info1levelclass@gmail.com"
                target="_blank"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { color: "rgb(225, 194, 179)" },
                }}
              >
                <Email />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/1levelclass/"
                target="_blank"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { color: "rgb(225, 194, 179)" },
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Separador */}
        <Divider sx={{ bgcolor: "rgba(225, 194, 179, 0.2)", my: 4 }} />

        {/* Enlaces Legales */}
        {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "white",
              opacity: 0.8,
              "&:hover": { color: "rgb(225, 194, 179)" },
            }}
          >
            Términos y Condiciones
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "white",
              opacity: 0.8,
              "&:hover": { color: "rgb(225, 194, 179)" },
            }}
          >
            Política de Privacidad
          </Link>
        </Box> */}

        {/* Copyright */}
        <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
          © {new Date().getFullYear()} 1LevelClass. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}
