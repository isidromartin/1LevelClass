import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .send(
//         "service_51g7hen",
//         "template_d5ygm3b",
//         formData,
//         "8mPVtDhb62eGi-7Yz"
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Mensaje enviado correctamente");
//           form.current.reset();
//         },
//         (error) => {
//           console.log("FAILED...", error);
//         }
//       );
//   };

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_51g7hen",
        "template_d5ygm3b",
        form.current,
        "8mPVtDhb62eGi-7Yz"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
          console.log(result.text);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

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
      <Container maxWidth="sm" margin="20">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ mb: 4, color: "rgb(225, 194, 179)" }}
        >
          Contacto
        </Typography>
        <Typography variant="p" sx={{ opacity: 0.8 }}>
          ¿Tienes un evento en mente? Contáctanos y hagamos que suceda.
        </Typography>

        {/* Formulario */}
        <Box sx={{ mt: 6 }}>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  label="Nombre"
                  name="name"
                  // onChange={handleChange}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    input: { color: "rgb(225, 194, 179)" },
                    "& label": { color: "rgb(225, 194, 179)" },
                    "& fieldset": { borderColor: "rgb(225, 194, 179)" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  // onChange={handleChange}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    input: { color: "rgb(225, 194, 179)" },
                    "& label": { color: "rgb(225, 194, 179)" },
                    "& fieldset": { borderColor: "rgb(225, 194, 179)" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  label="Mensaje"
                  name="message"
                  multiline
                  rows={4}
                  // onChange={handleChange}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    input: { color: "rgb(225, 194, 179)" },
                    "& label": { color: "rgb(225, 194, 179)" },
                    "& fieldset": { borderColor: "rgb(225, 194, 179)" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{
                    mt: 2,
                    background: "rgb(225, 194, 179)",
                    color: "black",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    boxShadow: "0 4px 15px rgba(225, 194, 179, 0.4)",
                    transition: "0.4s",
                    "&:hover": { background: "rgb(200, 170, 155)" },
                  }}
                >
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
