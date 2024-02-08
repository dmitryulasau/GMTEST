import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";

export default function Why() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        alignItems: "center",
        minHeight: "52.5rem",
        padding: "4rem 0",

        width: "100%",
        maxWidth: "96rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Yaro Rg",
          color: "var(--primary-color)",
          fontSize: "2.4rem",
          fontWeight: "bold",
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
        }}
      >
        Urgent Care at Your Fingertips: <br></br>Fast, Reliable, Personalized
      </Typography>

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
              top: "-30%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dulasau/image/upload/v1707323835/GOMEDCZ/why_emergency_db51t3.png"
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
              }}
            >
              Speedy Healthcare
            </Typography>
            <Typography
              sx={{
                fontFamily: "Yaro Rg Thin",
                color: "var(--primary-color)",
                fontSize: "1.6rem",
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
              top: "-30%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dulasau/image/upload/v1707323835/GOMEDCZ/why_appointment_mdpzsd.png"
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
              }}
            >
              Flexible Options
            </Typography>
            <Typography
              sx={{
                fontFamily: "Yaro Rg Thin",
                color: "var(--primary-color)",
                fontSize: "1.6rem",
              }}
            >
              Pick your healthcare plan like a ride. 'Economy' for an
              appointment within 48 hours, 'Premium' for same-day consultation.
              Your health, your way.
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
              top: "-35%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dulasau/image/upload/v1707323835/GOMEDCZ/why_recovery_iarclr.png"
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
              }}
            >
              Trusted Professionals
            </Typography>
            <Typography
              sx={{
                fontFamily: "Yaro Rg Thin",
                color: "var(--primary-color)",
                fontSize: "1.6rem",
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
  );
}
