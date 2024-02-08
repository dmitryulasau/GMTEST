import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  const scrollToWhy = () => {
    const whyElement = document.getElementById("why");
    if (whyElement) {
      whyElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "var(--primary-color)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",

        position: "relative",
        minHeight: "46rem",

        padding: { xs: "2rem 4rem 22rem 4rem", lg: "4rem 12rem" },
      }}
    >
      {/* HERO TEXT CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          flex: "0 0 50%",
        }}
      >
        {/* HERO HEADING  */}
        <Typography
          sx={{
            fontFamily: "Yaro Rg",
            color: "var(--white)",
            fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
            fontWeight: "bold",
          }}
        >
          Experience prompt healthcare with
        </Typography>
        {/* HERO HEADING END */}

        {/* LOGO */}
        <Box
          sx={{
            maxWidth: { xs: "160px", sm: "200px", md: "280px", lg: "325px" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dulasau/image/upload/v1707332686/GOMEDCZ/July_Gomed_white_kipxq3.png"
            alt="gomed-logo"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        {/* LOGO END */}

        {/* HERO DESCRIPTION */}
        <Typography
          sx={{
            fontFamily: "Yaro Rg",
            color: "var(--white)",
            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
          }}
        >
          Say goodbye to the long, anxiety-filled waits for medical
          appointments. With Gomed, we assure you a confirmed doctor's
          appointment within a maximum of three days.
        </Typography>
        {/* HERO DESCRIPTION END */}

        {/* HERO BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "3rem",
          }}
        >
          <Button
            onClick={scrollToForm}
            sx={{
              fontFamily: "Yaro Rg",
              color: "var(--white)",
              fontSize: "1.6rem",
              fontWeight: "bold",
              background: "var(--secondary-color)",
              "&:hover": {
                background: "#9dd9f4",
                color: "var(--primary-color)",
              },
            }}
            variant="contained"
          >
            Join waitlist
          </Button>
          <Button
            onClick={scrollToWhy}
            sx={{
              fontFamily: "Yaro Rg",
              color: "var(--primary-color)",
              fontSize: "1.6rem",
              fontWeight: "bold",
              background: "var(--white)",
              "&:hover": {
                background: "#9dd9f4",
              },
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </Box>
        {/* HERO BUTTONS END */}
      </Box>
      {/* HERO TEXT CONTAINER END */}

      {/* HERO IMAGE */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -15, sm: -15, md: -32, lg: -35 },
          right: { sm: 20, md: 20, lg: 120 },
          maxWidth: { xs: "200px", sm: "190px", md: "450px", lg: "512px" },
        }}
      >
        <img
          src="https://res.cloudinary.com/dulasau/image/upload/v1707354005/GOMEDCZ/online-consultation_byx19u.png"
          alt="online-consultation"
          style={{ width: "100%" }}
        />
      </Box>
      {/* HERO IMAGE END */}
    </Box>
  );
}
