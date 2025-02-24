import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { Element } from "react-scroll";
import Hero from "./components/Hero";
import About from "./sections/About";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import VideoSection from "./sections/VideSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: 8 }}>
        <Element name="home" id="home">
          <Hero />
        </Element>
        <Box sx={{ pb: 10 }}>
          <Element name="about" id="about">
            <About />
          </Element>
        </Box>
        <Box sx={{ pt: 10, pb: 10 }}>
          <Element name="events" id="events">
            <Events />
          </Element>
        </Box>
        <Element name="video">
          <VideoSection />
        </Element>
        <Element name="contact" id="contact">
          <Contact />
        </Element>
      </Box>
      <Footer />
    </>
  );
}
