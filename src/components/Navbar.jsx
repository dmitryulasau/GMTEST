import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ["Home", "Patient's Journey", "About Us", "Contact Us"];

  const handleScroll = (page) => {
    const targetIds = {
      "Patient's Journey": "why",
      "Contact Us": "contact",
      "About Us": "revolution",
    };

    const targetId = targetIds[page] || page.toLowerCase().replace(/ /g, "-");
    const element = document.getElementById(targetId);

    if (element) {
      // Check if it's iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      // If it's iOS, scroll on document.body, otherwise scroll on the element
      if (isIOS) {
        document.body.style.scrollBehavior = "smooth"; // Enable smooth scrolling for iOS
        document.body.scrollTop = element.offsetTop;
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
      handleCloseNavMenu();
    }
  };
  return (
    <AppBar
      position="sticky"
      sx={{ background: "var(--white)", maxWidth: "1440px" }}
    >
      <Container sx={{}}>
        <Toolbar disableGutters>
          {/* DESKTOP LOGO */}
          <Box
            component="a"
            href="" //TODO
            sx={{
              flex: "0 0 30%",
              justifyContent: "flex-start",
              alignItems: "center",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src="https://res.cloudinary.com/dulasau/image/upload/v1707163170/GOMEDCZ/gomed_logo_bg6hgl.png"
              alt="Gomed logo"
            />
          </Box>
          {/* DESKTOP LOGO END*/}

          {/* MOBILE MENU */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "var(--black)", fontSize: "2.2rem" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleScroll(page)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "var(--black)",
                      fontSize: "2rem",
                      fontFamily: "Yaro Rg Thin",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* MOBILE MENU END */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="" //TODO
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dulasau/image/upload/v1707163170/GOMEDCZ/gomed_logo_bg6hgl.png"
              alt="Gomed logo"
            />
          </Typography>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              flexGrow: 1,

              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleScroll(page)}
                sx={{
                  my: 2,
                  fontSize: "1.8rem",
                  fontFamily: "Yaro Rg Thin",
                  textTransform: "capitalize",
                  color: "var(--black)",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* DESKTOP MENU END */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
