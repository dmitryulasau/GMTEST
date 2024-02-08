import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Join() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        padding: "4rem 4rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Yaro Rg",
          color: "var(--primary-color)",
          fontSize: "2.4rem",
          fontWeight: "bold",
          textAlign: "center",
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
        }}
      >
        Join Our Waitlist Now <span style={{ color: "red" }}>DELETE</span>
      </Typography>
    </Box>
  );
}
