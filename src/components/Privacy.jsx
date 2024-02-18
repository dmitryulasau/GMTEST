import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function Privacy() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
          Privacy Policy data processing involves the collection, storage, and
          utilization of personal information in accordance with applicable laws
          and regulations to ensure transparency, security, and user consent.
        </Typography>
      </Box>
    </Modal>
  );
}
