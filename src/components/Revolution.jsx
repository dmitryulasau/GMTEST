import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Revolution() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "2rem", lg: "20rem" },
        alignItems: "center",

        padding: "4rem",

        width: "100%",
        maxWidth: "96rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          gap: "1rem",
          order: { xs: 1, lg: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Yaro Rg",
            color: "var(--secondary-color)",
            fontSize: "1.6rem",
          }}
        >
          #HEALTHCAREREVOLUTION
        </Typography>
        <Typography
          sx={{
            fontFamily: "Yaro Rg",
            color: "var(--primary-color)",
            fontSize: "3.6rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Gomed. Your Health, Accelerated.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Yaro Rg Thin",
            color: "var(--primary-color)",
            fontSize: "1.6rem",
          }}
        >
          Step into a new chapter of healthcare. Join our waitlist today and be
          among the first to embrace a service that values your health as much
          as your time.
        </Typography>
      </Box>
      {/* IMAGE APP */}
      <Box>
        <img
          src="https://res.cloudinary.com/dulasau/image/upload/v1707323835/GOMEDCZ/revolution_app_imzrut.png"
          alt="gomed-app"
        />
      </Box>
    </Box>
  );
}
