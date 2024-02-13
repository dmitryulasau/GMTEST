import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CTAForm from "./CTAForm";

import toast, { Toaster } from "react-hot-toast";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function Hero() {
  const isSmScreen = useMediaQuery("(max-width:600px)");
  const toasterPosition = isSmScreen ? "top-center" : "bottom-center";

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

        marginBottom: { xs: "2rem", sm: "4rem" },

        position: "relative",
      }}
    >
      <Box
      // sx={{
      //   position: "absolute",
      //   top: -12,
      //   left: "50%",
      //   transform: "translateX(-50%)",
      //   width: "100%",
      // }}
      >
        <Toaster position={toasterPosition} reverseOrder={false} />
      </Box>
      {/* HERO CONTENT CONTAINER */}
      <Box
        sx={{
          // background: "lightyellow",
          width: "144rem",

          display: "flex",
          justifyContent: { lg: "center" },
          maxHeight: { sm: "340px" },
          height: "100%",
          position: "relative",
        }}
      >
        {/* HERO IMAGE */}
        <Box
          sx={{
            // backgroundColor: "rgba(100, 20, 50, 0.25)",

            position: "absolute",

            bottom: { xs: "53%", sm: "-60px" },
            right: { xs: "30%", sm: "330px", md: 0 },

            maxWidth: {
              xs: "40%",
              sm: "22%",
              md: "32%",
              lg: "27.5%",
              xl: "33%",
            },
          }}
        >
          <img
            src="https://res.cloudinary.com/dulasau/image/upload/v1707760608/GOMEDCZ/online-consultation_c7b3lt.png"
            alt="online-consultation"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
        {/* HERO IMAGE END */}
        <Box
          sx={{
            maxWidth: "96rem",
            // background: "salmon",

            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "4rem" },
            alignItems: "center",
          }}
        >
          {/* HERO TEXT CONTAINER */}
          <Box
            sx={{
              // background: "lightgreen",

              minHeight: "34rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: { md: "center", lg: "space-between" },
              alignSelf: { sm: "flex-start", md: "center" },
              gap: { xs: "3rem", sm: "2rem", md: "3rem" },
              flex: { sm: "0 1 50%", md: "0 1 50%", lg: "0 0 50%" },
            }}
          >
            {/* HERO HEADING  */}

            <Typography
              sx={{
                fontFamily: "Yaro Rg",
                color: "var(--white)",
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  lg: "2rem",
                },
                fontWeight: "bold",
                letterSpacing: "0.1em",
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
                  lg: "225px",
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
                letterSpacing: "0.02em",
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
              right: { sm: "0", md: "33%", lg: "28%", xl: "33%" },
              transform: "translateY(-50%)",
              "@media screen and (max-width: 599px)": {
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
        </Box>
      </Box>
      {/* HERO CONTENT CONTAINER END*/}
    </Box>
  );
}
