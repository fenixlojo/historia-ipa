import React from "react";
import { Box, Grid, Typography, Divider, Button, Paper } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function Books({ show }) {
  return (
    <Box>
      {show.map((item, i) => (
        <Paper sx={{ margin: "2rem" }} key={i} elevation={3}>
          <Box p={2}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                textTransform: "uppercase",
              }}
            >
              {item.titulo.replace("_", " ")}
            </Typography>
            <Divider
              sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Typography>Autor/es: {item.autor}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(to right bottom, #2b1bb5, #1cc2ff)",
                  }}
                  startIcon={<RemoveRedEyeIcon />}
                  onClick={() => window.open(item.url, "_blank")}
                  disabled={!item.url || item.url === ""}
                >
                  Ver pdf
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

export default Books;
