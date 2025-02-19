import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { Element } from "react-scroll";
import Hero from "./components/Hero";
import About from "./sections/About";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: 8 }}>
        <Element name="home">
          <Hero />
        </Element>
        <Box sx={{ pt: 10, pb: 10 }}>
          <Element name="about">
            <About />
          </Element>
        </Box>
        <Box sx={{ pt: 10, pb: 10 }}>
          <Element name="events">
            <Events />
          </Element>
        </Box>
        {/* <Element name="gallery">
          <Gallery />
        </Element> */}
        <Element name="contact">
          <Contact />
        </Element>
      </Box>
      <Footer />
    </>
  );
}
