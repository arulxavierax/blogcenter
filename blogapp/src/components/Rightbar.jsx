import { Box } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
