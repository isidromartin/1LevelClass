import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Typography variant="h3" fontWeight="bold">
            Bienvenido a 1LevelClass
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Eventos de lujo con atención a cada detalle.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            Explorar Eventos
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
}
