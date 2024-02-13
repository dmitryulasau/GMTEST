import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Join() {
  const handleScroll = (page) => {
    const targetId = "home";
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        padding: "4rem 4rem",
        marginBottom: "8rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Yaro Rg",
          color: "var(--primary-color)",
          fontSize: "2.4rem",
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: "0.02em",
        }}
      >
        Ready to Prioritize Your Health and Time?
      </Typography>
      <Typography
        sx={{
          fontFamily: "Yaro Rg",
          color: "var(--secondary-color)",
          fontSize: "2.4rem",
          fontWeight: "bold",
          textDecoration: "underline",
          cursor: "pointer",
          letterSpacing: "0.02em",
        }}
      >
        <a onClick={() => handleScroll("Home")}>Join Our Waitlist Now</a>
      </Typography>
    </Box>
  );
}
