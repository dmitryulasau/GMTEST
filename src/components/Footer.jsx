import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "var(--primary-color)",
        color: "var(--white)",
        width: "100%",
        padding: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "3rem",
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: { xs: "4rem", lg: 0 },
          }}
        >
          <img
            src="https://res.cloudinary.com/dulasau/image/upload/v1707332686/GOMEDCZ/July_Gomed_white_kipxq3.png"
            alt="contact-us"
            width="124px"
          />
        </Box>
        {/* LOGO END */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "2rem", lg: "14rem" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.8rem",
              letterSpacing: "0.02em",
            }}
          >
            Terms & Conditions
          </Typography>

          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.8rem",
              letterSpacing: "0.02em",
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
      >
        <div
          style={{
            width: "100%",
            height: "0.1rem",
            backgroundColor: "var(--white)",
            borderRadius: "99rem",
          }}
        ></div>
      </Box>

      <Box
        sx={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.2rem",

              letterSpacing: "0.02em",
            }}
          >
            Anora Makhmudovna Atakhanova
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.2rem",
              letterSpacing: "0.02em",
            }}
          >
            IČO: 09794247
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.2rem",
              letterSpacing: "0.02em",
            }}
          >
            Legerova 356/48
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.2rem",

              letterSpacing: "0.02em",
            }}
          >
            12000 Praha 2
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yaro Op Thin",
              color: "var(--white)",
              fontSize: "1.2rem",

              letterSpacing: "0.02em",
            }}
          >
            Česká republika
          </Typography>
        </Box>

        <Typography
          sx={{
            marginTop: "1rem",
            fontFamily: "Yaro Op Thin",
            color: "#ABABAB",
            fontSize: "1rem",
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          Stickers designed by kerismaker from Flaticon
        </Typography>
      </Box>
    </Box>
  );
}
