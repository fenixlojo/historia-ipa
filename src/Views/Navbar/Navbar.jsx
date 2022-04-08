import React from "react";
import { Box, Typography, AppBar } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        sx={{
          background: "linear-gradient(to right bottom, #2b1bb5, #1cc2ff)",
        }}
        position="static"
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "start", margin: "0.25rem 0 0.25rem 2rem" }}
          color="inherit"
          component="div"
        >
          Materiales de historia
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Navbar;
