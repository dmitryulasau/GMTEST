import React from "react";
import Box from "@mui/material/Box";

import styles from "./CTAForm.module.css";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { alpha, styled } from "@mui/material/styles";

const CssTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    fontFamily: "Yaro Op Thin",
    color: "#787878",
    fontSize: "1.4rem",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "var(--white)",
    border: "1px solid",
    borderColor: "var(--secondary-color)",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "var(--white)",
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
      boxShadow: `var(--secondary-color) 0 0 0 2px`,
      borderColor: "var(--secondary-color)",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Yaro Op Thin",
    color: "#787878",
    fontSize: "1.4rem",
    "&.Mui-focused": {
      color: "var(--secondary-color)",
    },
  },
}));

export default function CTAForm() {
  return (
    <Box sx={{ maxWidth: "25rem" }}>
      <Paper
        elevation={20}
        sx={{
          background: "var(--blue)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",

          padding: "2rem 1.6rem",
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
          READY FOR A HEALTHIER TOMORROW?
        </Typography>

        <CssTextField
          id="email-input"
          label="Email Address"
          variant="filled"
          className={styles.inputField}
        />
        <CssTextField
          id="phone-input"
          label="Phone Number"
          variant="filled"
          className={styles.inputField}
        />
        <CssTextField
          id="insurance-input"
          label="Your Medical Insurance"
          variant="filled"
          className={styles.inputField}
        />
        <CssTextField
          id="specialist-input"
          label="Specialist You Need?"
          variant="filled"
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
            textTransform: "none",
            borderRadius: "1.2rem",
            padding: "0.3rem 1.6rem",

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
