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

import toast, { Toaster } from "react-hot-toast";

import Joi from "joi"; // Import JOI for validation

import Checkbox from "@mui/material/Checkbox";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),
  phoneNumber: Joi.string()
    .pattern(new RegExp("^\\d{3} \\d{3} \\d{3}$"))
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Phone should be 9 digits",
      "any.required": "Phone number is required",
    }),
  insuranceProvider: Joi.string().required().messages({
    "string.empty": "Please choose insurance",
    "any.required": "Please select your medical insurance",
  }),
  specialists: Joi.array()
    .min(1) // At least one specialist must be selected
    .items(Joi.string()) // Each item in the array must be a string
    .required()
    .messages({
      "array.min": "Please choose specialist",
      "array.base": "Please choose specialist",
      "array.required": "Please choose specialist",
      "any.required": "Please choose specialist",
    }),
  language: Joi.string().required(),
});

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
  "& .MuiFormHelperText-root": {
    color: "var(--error-color)",
    fontSize: "1.1rem",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    // Override error text color
    color: "var(--error-color)", // Change this to the color you desire
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "var(--error-color)",
  },
  "& .MuiFilledInput-root.Mui-error": {
    borderColor: "var(--error-color)",
    boxShadow: `var(--error-color) 0 0 0 2px`,
  },
}));

export default function CTAForm() {
  const [insuranceProviders, setInsuranceProviders] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    insuranceProvider: "",
    specialists: [],
    language: navigator.language || navigator.userLanguage,
  });
  const [errors, setErrors] = useState({});

  // GET INSURANCE
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

  // GET SPECIALISTS
  useEffect(() => {
    axios
      .get(
        "https://gomed-crud-backend-0230dd55a01f.herokuapp.com/static-data/specialists_eng"
      )
      .then((response) => {
        console.log(response.data);
        setSpecialists(response.data);
      })
      .catch((error) => {
        console.error("Error fetching specialists:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (name === "specialists") {
      // If the selected value is an array, directly set it, otherwise convert it to an array
      const updatedSpecialists = Array.isArray(value) ? value : [value];
      setFormData({
        ...formData,
        [name]: updatedSpecialists,
      });
    } else if (name === "phoneNumber") {
      formattedValue = formattedValue.replace(/\D/g, "");
      formattedValue = formattedValue.substring(0, 9); // Limit to 9 characters (assuming the format is '111 111 111')
      formattedValue = formattedValue.replace(
        /(\d{3})(\d{3})(\d{3})/,
        "$1 $2 $3"
      ); // Add spaces
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    }
  };

  const handleSubmit = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.context.key] = detail.message;
      });
      setErrors(validationErrors);
      console.log("STILL ERRORS", error); // This line indicates errors are still present
    } else {
      console.log(formData);
      axios
        .post(
          "https://gomed-crud-backend-0230dd55a01f.herokuapp.com/guests",
          formData
        )
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          setFormData({
            email: "",
            phoneNumber: "",
            insuranceProvider: "",
            specialists: [],
            language: "",
          });
          setErrors({});
          toast.success("Thank you for joining our list!", {
            id: "join-list-toast",
          });
        })
        .catch((error) => {
          // Handle errors
          console.error("Error submitting form:", error);
          // Optionally, you can show an error message to the user
          toast.error("Something went wrong", {
            id: "error-toast",
          });
        });
    }
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
          justifyContent: "space-between",
          flexDirection: "column",

          padding: "2rem 1.6rem",
          borderRadius: "1.5rem",
          height: "510px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <Toaster position="top-center" reverseOrder={false} />
        </Box>
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
          name="email"
          label="Email Address"
          variant="filled"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            width: "100%",
          }}
        />

        {/* PHONE */}
        <CssTextField
          name="phoneNumber"
          label="Phone Number"
          variant="filled"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          sx={{ width: "100%" }}
        />

        {/* INSURANCE */}
        <CssTextField
          name="insuranceProvider"
          select
          label="Your Medical Insurance"
          variant="filled"
          value={formData.insuranceProvider}
          onChange={handleInputChange}
          error={!!errors.insuranceProvider}
          helperText={errors.insuranceProvider}
          sx={{ width: "100%" }}
        >
          {insuranceProviders.map((insuranceProvider, index) => (
            <MenuItem
              sx={{
                fontFamily: "Yaro Rg",
                letterSpacing: "0.1em",
                color: "#787878",
              }}
              key={index}
              value={insuranceProvider}
            >
              {insuranceProvider}
            </MenuItem>
          ))}
        </CssTextField>

        {/* SPECIALIST */}
        <CssTextField
          name="specialists"
          select
          label="Specialists You Need?"
          variant="filled"
          value={formData.specialists}
          onChange={handleInputChange}
          error={!!errors.specialists}
          helperText={errors.specialists}
          SelectProps={{
            multiple: true,
            renderValue: (selected) => {
              return selected
                .map((selectedSpecialist) => {
                  return (
                    selectedSpecialist.charAt(0).toUpperCase() +
                    selectedSpecialist.slice(1)
                  );
                })
                .join(", ");
            },
          }}
          sx={{ width: "100%" }}
        >
          {specialists.map((specialist, index) => (
            <MenuItem
              key={index}
              value={specialist}
              sx={{
                fontFamily: "Yaro Rg",
                letterSpacing: "0.1em",
                color: "#787878",
              }}
            >
              <Checkbox checked={formData.specialists.includes(specialist)} />
              {specialist.length > 20
                ? `${(
                    specialist.charAt(0).toUpperCase() + specialist.slice(1)
                  ).substring(0, 20)}...`
                : specialist.charAt(0).toUpperCase() + specialist.slice(1)}
            </MenuItem>
          ))}
        </CssTextField>
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
