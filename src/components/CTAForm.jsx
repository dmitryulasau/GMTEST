import React from "react";
import Box from "@mui/material/Box";

import styles from "./CTAForm.module.css";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function CTAForm() {
  return (
    <Box
      sx={{
        padding: "4rem",
      }}
    >
      <div
        style={{ textAlign: "center", fontSize: "2rem", background: "salmon" }}
      >
        FORM IN PROGRESS
      </div>
      <Paper
        elevation={3}
        sx={{
          minHeight: "40%",
          background: "var(--primary-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          padding: "4rem",
          borderRadius: "1.5rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Yaro Rg",
            color: "var(--white)",
            fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
            fontWeight: "bold",
            textAlign: "center",
            padding: "0 4rem",
          }}
        >
          FORM FOR A BETTER TOMORROW IN HEALTH
        </Typography>

        <TextField
          id="email-input"
          label="Email Address"
          variant="outlined"
          color="secondary"
          className={styles.inputField}
        />
        <TextField
          id="phone-input"
          label="Phone Number"
          variant="outlined"
          color="secondary"
          className={styles.inputField}
        />
        <TextField
          id="insurance-input"
          label="Your Medical Insurance"
          variant="outlined"
          color="secondary"
          className={styles.inputField}
        />
        <TextField
          id="specialist-input"
          label="Specialist You Need?"
          variant="outlined"
          color="secondary"
          className={styles.inputField}
          sx={{
            fontSize: "3rem",
          }}
        />
        <Button
          sx={{
            fontFamily: "Yaro Rg",
            color: "var(--white)",
            fontSize: "1.6rem",
            fontWeight: "bold",
            background: "var(--secondary-color)",
            "&:hover": {
              background: "#9dd9f4",
              color: "var(--primary-color)",
            },
          }}
          variant="contained"
        >
          Join our priority waitlist
        </Button>
      </Paper>
    </Box>
  );
}
