import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

// MODAL STYLE
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: { xs: "35rem", sm: "45rem" },
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            Privacy Policy
          </Typography>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: "Yaro Op Thin",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Privacy Policy Gomed
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontFamily: "Yaro Op Thin", fontSize: "1.6rem" }}
              >
                Privacy Policy data processing involves the collection, storage,
                and utilization of personal information in accordance with
                applicable laws and regulations to ensure transparency,
                security, and user consent.
              </Typography>
            </Box>
          </Modal>
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
