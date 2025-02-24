import { Box, Container, Typography } from "@mui/material";

export default function VideoSection() {
  return (
    <Box
      id="video"
      sx={{
        py: 6,
        textAlign: "center",
        backgroundColor: "#091C2A",
        color: "rgb(225, 194, 179)",
        px: 3,
        position: "relative",
        borderTop: "2px solid rgba(225, 194, 179, 0.3)",
      }}
    >
      <Container>
        {/* <Typography variant="h2" fontWeight="bold" sx={{ mb: 5 }}>
          Video
        </Typography> */}

        <Box
          component="video"
          src="film2.mp4"
          controls
          autoPlay
          muted
          loop
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "12px",
            boxShadow: "0px 4px 15px rgba(225, 194, 179, 0.3)",
          }}
        />
      </Container>
    </Box>
  );
}
