import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import Books from "./components/Books";
import documentos from "../../documentos";

function Main() {
  const [filter, setFilter] = React.useState("");
  const [show, setShow] = React.useState([]);

  React.useEffect(() => {
    setShow(
      documentos.filter(
        (item) =>
          item.autor.toLowerCase().includes(filter.toLowerCase()) ||
          item.titulo.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter]);
  
  return (
    <Box sx={{ minHeight: "1000px" }}>
      <TextField
        label="Buscar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ margin: "3rem 0 3rem 0" }}
      />
      {show.length === 0 && (
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            textTransform: "uppercase",
          }}
        >
          No hay coincidencias con la busqueda
        </Typography>
      )}
      <Books show={show} />
    </Box>
  );
}

export default Main;
