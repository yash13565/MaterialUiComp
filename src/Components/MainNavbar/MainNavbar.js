import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const navItems = ["Home", "About", "Contact"];

function MainNavbar() {

  return (
    <Box >
      <AppBar  sx={{backgroundColor:'#FFFFFF' }} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block"} }}
          >
            <span style={{ color: "black", fontWeight: "bolder" }}>
              Build
            </span><span style={{ color: "black", fontWeight: "400" }}> Formula </span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainNavbar;
