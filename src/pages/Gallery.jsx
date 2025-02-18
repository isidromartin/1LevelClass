import { Box, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  {
    src: "https://static.wixstatic.com/media/2005bd_7788c7cfa81a4c69aea032da17505012~mv2.jpg",
    title: "Evento Corporativo",
  },
  {
    src: "https://static.wixstatic.com/media/2005bd_4c559cd801df47ec9a28f44227a1f96f~mv2.jpg",
    title: "Boda de Lujo",
  },
  {
    src: "https://static.wixstatic.com/media/2005bd_896b1079f9594246ae975af0cca0bcb6~mv2.jpg",
    title: "Fiesta VIP",
  },
  {
    src: "https://static.wixstatic.com/media/2005bd_e330a378cadf4065be019aed79a2b27e~mv2.jpg",
    title: "Lanzamiento de Producto",
  },
];

export default function Gallery() {
  return (
    <Box>
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
            Galería
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Explora nuestra colección de eventos exclusivos en imágenes.
          </Typography>
        </Container>
      </Box>
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
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 4 }}>
            Galería de Eventos
          </Typography>

          {/* Carrusel de imágenes */}
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="swiper-container"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    {image.title}
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
}
