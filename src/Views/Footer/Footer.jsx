import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "black",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography>Copyright Santiago Gonzalez Lojo 2022</Typography>
      <IconButton
        sx={{ cursor: "pointer", color: "white" }}
        onClick={() => window.open("https://github.com/fenixlojo", "_blank")}
      >
        <GitHub />
      </IconButton>
    </Box>
  );
}

export default Footer;
