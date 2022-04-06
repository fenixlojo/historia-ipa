import React from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import documentos from "../../documentos";
function Main() {
  const [filter, setFilter] = React.useState("");
  return (
    <Box>
      <Typography variant="h3">Historia IPA Materiales</Typography>
      <TextField
        label="Buscar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ margin: "3rem 0 3rem 0" }}
      />
      {documentos
        .filter(
          (item) =>
            item.autor.toLowerCase().includes(filter.toLowerCase()) ||
            item.titulo.toLowerCase().includes(filter.toLowerCase())
        )
        .map((item, i) => (
          <Paper sx={{ margin: "2rem" }} key={i} elevation={1}>
            <Box p={2}>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  textTransform: "uppercase",
                }}
              >
                {item.titulo}
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

export default Main;
