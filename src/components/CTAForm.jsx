import React from "react";
import Box from "@mui/material/Box";

import styles from "./CTAForm.module.css";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { alpha, styled } from "@mui/material/styles";

import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

import toast from "react-hot-toast";

const CssTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    fontFamily: "Yaro Op Thin",
    color: "#000",
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
  // INSURANCE
  const [insuranceProviders, setInsuranceProviders] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [specialists, setSpecialists] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://gomed-crud-backend-0230dd55a01f.herokuapp.com/static-data/insurance_providers"
      )
      .then((response) => {
        setInsuranceProviders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching insurance providers:", error);
      });
  }, []);

  const handleInsuranceChange = (event) => {
    setSelectedInsurance(event.target.value || "");
  };

  // PHONE INPUT

  const formatPhoneNumber = (input) => {
    const cleaned = ("" + input).replace(/\D/g, "");

    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
    return formatted;
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;

    const formattedInput = formatPhoneNumber(input);

    setPhoneNumber(formattedInput);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSpecialistChange = (event) => {
    setSpecialists(event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      phoneNumber: phoneNumber,
      insuranceProvider: selectedInsurance,
      email: email,
      language: navigator.language || navigator.userLanguage,
    };

    console.log(formData);
    axios
      .post(
        "https://gomed-crud-backend-0230dd55a01f.herokuapp.com/guests",
        formData
      )
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        setPhoneNumber("");
        setSelectedInsurance("");
        setEmail("");
        setSpecialists("");
        // Show success message (you can customize this message)
        toast.success("Thank you for joining our list!");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error submitting form:", error);
        // Optionally, you can show an error message to the user
        toast.error("Something went wrong");
      });
  };

  return (
    <Box sx={{ maxWidth: "25rem" }}>
      <div id="CTA" style={{}}></div>
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
            letterSpacing: "0.08em",
          }}
        >
          READY FOR A HEALTHIER TOMORROW?
        </Typography>

        {/* EMAIL */}
        <CssTextField
          id="email-input"
          label="Email Address"
          variant="filled"
          className={styles.inputField}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email}
          onChange={handleEmailChange}
        />

        {/* PHONE */}
        <CssTextField
          id="phone-input"
          label="Phone Number"
          variant="filled"
          className={styles.inputField}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />

        {/* INSURANCE */}
        <CssTextField
          id="insurance-input"
          select
          label="Your Medical Insurance"
          variant="filled"
          value={selectedInsurance}
          onChange={handleInsuranceChange}
          className={styles.inputField}
        >
          {insuranceProviders.map((insuranceProvider) => (
            <MenuItem
              sx={{
                fontFamily: "Yaro Rg",
                letterSpacing: "0.1em",
                color: "#787878",
              }}
              key={insuranceProviders.indexOf(insuranceProvider)}
              value={insuranceProvider}
            >
              {insuranceProvider}
            </MenuItem>
          ))}
        </CssTextField>
        <CssTextField
          id="specialist-input"
          label="Specialists You Need?"
          variant="filled"
          className={styles.inputField}
          sx={{
            fontSize: "3rem",
          }}
          value={specialists}
          onChange={handleSpecialistChange}
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
          onClick={handleSubmit}
        >
          Join our priority waitlist
        </Button>
      </Paper>
    </Box>
  );
}
