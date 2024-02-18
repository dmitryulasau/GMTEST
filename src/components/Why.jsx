import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";

export default function Why() {
  return (
    <Box
      sx={{
        maxWidth: "96rem",
        width: "100%",
        marginBottom: "8rem",
        marginTop: { lg: "8rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
          minHeight: "52.5rem",

          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            alignItems: "center",
            height: { lg: "35vh" },

            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Yaro Rg",
              color: "var(--primary-color)",
              fontSize: "2.4rem",
              fontWeight: "bold",
              letterSpacing: "0.02em",
            }}
          >
            Why choose Gomed?
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
              fontFamily: "Yaro Rg Thin",
              color: "var(--primary-color)",
              fontSize: "1.6rem",
              marginBottom: "10rem",
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            Urgent Care at Your Fingertips: <br></br>Fast, Reliable,
            Personalized
          </Typography>
        </Box>

        {/* CARDS CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            flexWrap: { sm: "wrap" },
            justifyContent: { sm: "center", md: "center", lg: "space-between" },
            gap: { xs: "12rem", lg: "0rem" },
            alignItems: { xs: "center", sm: "stretch" },
          }}
        >
          {/* EMERGENCY */}
          <Paper
            elevation={5}
            sx={{
              position: "relative",
              maxWidth: "29rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "2rem",
              padding: "3rem",
            }}
          >
            {/* IMAGE CONTAINER */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-32%", sm: "-30%" },
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src="https://res.cloudinary.com/dulasau/image/upload/v1707418252/GOMEDCZ/why_emergency_nft5l2.png"
                alt="emergency"
                width="228px"
              ></img>
            </Box>
            <Box sx={{ minHeight: "8.2rem" }}></Box>
            {/* IMAGE CONTAINER END */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Yaro Rg",
                  color: "var(--primary-color)",
                  fontSize: "1.8rem",
                  letterSpacing: "0.02em",
                }}
              >
                Speedy Healthcare
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Yaro Rg Thin",
                  color: "var(--primary-color)",
                  fontSize: "1.6rem",
                  letterSpacing: "0.02em",
                }}
              >
                Gomed values your time. Get the medical care you need, fast. No
                more waiting for urgent care.
              </Typography>
            </Box>
          </Paper>
          {/* EMERGENCY END */}

          {/* APPOINTMENT */}
          <Paper
            elevation={5}
            sx={{
              position: "relative",
              maxWidth: "29rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "2rem",
              padding: "3rem",
            }}
          >
            {/* IMAGE CONTAINER */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-27%", sm: "-30%" },
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src="https://res.cloudinary.com/dulasau/image/upload/v1707418252/GOMEDCZ/why_appointment_fg3skg.png"
                alt="appointment"
                width="228px"
              ></img>
            </Box>
            <Box sx={{ minHeight: "8.2rem" }}></Box>
            {/* IMAGE CONTAINER END */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Yaro Rg",
                  color: "var(--primary-color)",
                  fontSize: "1.8rem",
                  letterSpacing: "0.02em",
                }}
              >
                Flexible Options
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Yaro Rg Thin",
                  color: "var(--primary-color)",
                  fontSize: "1.6rem",
                  letterSpacing: "0.02em",
                }}
              >
                Pick your healthcare plan like a ride. 'Economy' for an
                appointment within 48 hours, 'Premium' for same-day
                consultation. Your health, your way.
              </Typography>
            </Box>
          </Paper>
          {/* APPOINTMENT END */}
          {/* RECOVERY */}
          <Paper
            elevation={5}
            sx={{
              position: "relative",
              maxWidth: "29rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "2rem",
              padding: "3rem",
            }}
          >
            {/* IMAGE CONTAINER */}
            <Box
              sx={{
                position: "absolute",
                top: "-30%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src="https://res.cloudinary.com/dulasau/image/upload/v1707789023/why_recovery_jqf5dp.png"
                alt="recovery"
                width="228px"
              ></img>
            </Box>
            <Box sx={{ minHeight: "8.2rem" }}></Box>
            {/* IMAGE CONTAINER END */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Yaro Rg",
                  color: "var(--primary-color)",
                  fontSize: "1.8rem",
                  letterSpacing: "0.02em",
                }}
              >
                Trusted Professionals
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Yaro Rg Thin",
                  color: "var(--primary-color)",
                  fontSize: "1.6rem",
                  letterSpacing: "0.02em",
                }}
              >
                Our network is your advantage. Only the best doctors, ready for
                quick appointments. Every visit promises quality care.
              </Typography>
            </Box>
          </Paper>
          {/* RECOVERY END */}
        </Box>
        {/* CARDS CONTAINER END */}
      </Box>
    </Box>
  );
}
