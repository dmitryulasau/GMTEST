import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ContactUs() {
  return (
    <Box
      sx={{
        background: "var(--bg-light)",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 4rem",
        gap: "2rem",
      }}
    >
      <Box>
        <img
          src="https://res.cloudinary.com/dulasau/image/upload/v1707418251/GOMEDCZ/contact_hgedzu.png"
          alt="contact-us"
          style={{ maxWidth: "137px" }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "Yaro Rg Thin",
          color: "var(--primary-color)",
          fontSize: "2.4rem",
          padding: "1rem",
          textAlign: "center",
          letterSpacing: "0.02em",
        }}
      >
        Have any questions? Contact us!
      </Typography>

      <div
        style={{
          width: "10rem",
          height: "0.3rem",
          backgroundColor: "var(--secondary-color)",
          borderRadius: "99rem",
        }}
      ></div>

      <Typography
        sx={{
          marginTop: "3rem",
          fontFamily: "Yaro Rg Thin",
          color: "var(--primary-color)",
          fontSize: "1.6rem",
          padding: "1rem",
          textAlign: "center",
          marginBottom: "8rem",
          letterSpacing: "0.02em",
        }}
      >
        Reach out to us directly at{" "}
        <span>
          <a
            href="mailto:info@gomed.cz"
            style={{ color: "var(--secondary-color)", cursor: "pointer" }}
          >
            info@gomed.cz
          </a>
        </span>
        {/* , <br></br>or drop your message in our contact form. */}
      </Typography>
    </Box>
  );
}
