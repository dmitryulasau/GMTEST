import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CTAForm from "./CTAForm";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "var(--primary-color)",
        minHeight: "46rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "4rem",

        marginBottom: "8rem",
      }}
    >
      {/* HERO CONTENT CONTAINER */}
      <Box
        sx={{
          // background: "lightyellow",
          width: "144rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "20rem" },
            maxWidth: "96rem",
            width: "100%",
            // background: "lightblue",

            position: "relative",
          }}
        >
          {/* HERO TEXT CONTAINER */}
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              gap: "3rem",
              flex: { md: "0 1 38%", lg: "0 0 50%" },
              // background: "lightgreen",
            }}
          >
            {/* HERO HEADING  */}
            <Typography
              sx={{
                fontFamily: "Yaro Rg",
                color: "var(--white)",
                fontSize: {
                  xs: "1.6rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  lg: "2rem",
                },
                fontWeight: "bold",
              }}
            >
              Experience prompt healthcare with
            </Typography>
            {/* HERO HEADING END */}

            {/* LOGO */}
            <Box
              sx={{
                maxWidth: {
                  xs: "140px",
                  sm: "180px",
                  md: "220px",
                  lg: "325px",
                },
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
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.4rem",
                  md: "1.2rem",
                  lg: "1.8rem",
                },
              }}
            >
              Say goodbye to the long, anxiety-filled waits for medical
              appointments. <br></br>With Gomed, we assure you a confirmed
              doctor's appointment within a maximum of three days.
            </Typography>
            {/* HERO DESCRIPTION END */}
          </Box>
          {/* HERO TEXT CONTAINER END */}

          {/* FORM */}
          <Box
            sx={{
              alignSelf: "center",
              position: "absolute",
              top: "60%",
              right: { md: "32%", lg: "24.5%", xl: "24%" },
              transform: "translateY(-50%)",
              "@media screen and (max-width: 899px)": {
                position: "relative",
                top: "unset",
                right: "unset",
                transform: "unset",
              },
            }}
          >
            <CTAForm />
          </Box>
          {/* FORM END */}

          {/* HERO IMAGE */}
          <Box
            sx={{
              position: "absolute",
              bottom: {
                xs: "48.2%",
                sm: "-12.5%",
                md: "-54.5%",
                lg: "-29.7%",
                xl: "-32.5%",
              },
              right: { xs: "13%", md: "-2.5%", lg: "-13%", xl: "-28%" },
              maxWidth: {
                xs: "220px",
                sm: "220px",
                md: "290px",
                lg: "370px",
                xl: "512px",
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dulasau/image/upload/v1707402156/GOMEDCZ/online-consultation_c7b3lt.png"
              alt="online-consultation"
              style={{ width: "100%" }}
            />
          </Box>
          {/* HERO IMAGE END */}
        </Box>
      </Box>
      {/* HERO CONTENT CONTAINER END*/}
    </Box>
  );
}
