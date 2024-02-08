import "./App.css";
import CTAForm from "./components/CTAForm.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Why from "./components/Why.jsx";
import Revolution from "./components/Revolution.jsx";
import Join from "./components/Join.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0rem !important",
        }}
      >
        <div id="home" style={{}}></div>
        <Navbar />
        {/* MAIN CONTENT */}
        <Box
          maxWidth="144rem"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 !imprtant",
          }}
        >
          <Hero />
          <div id="why" style={{ height: "56px" }}></div>
          <Why />
          <div id="revolution" style={{ height: "56px" }}></div>
          <Revolution />
          <Join />
          <div id="form" style={{ height: "96px" }}></div>
          <CTAForm />
          <div id="contact"></div>
          <ContactUs />
          <Footer />
        </Box>
        {/* MAIN CONTENT END*/}
      </Container>
    </>
  );
}

export default App;
