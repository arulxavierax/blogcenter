import { Avatar, Box } from "@mui/material";
import React from "react";

function Rightbar({ name, email }) {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Avatar src="/broken-image.jpg" width="100%" />
      <h2>{name}</h2>
    </Box>
  );
}

export default Rightbar;
