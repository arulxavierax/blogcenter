import { Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import MainFeed from "../components/MainFeed";
import Rightbar from "../components/Rightbar";

function Blog() {
  return (
    <Box>
      <Stack divider={<Divider orientation="vertical" flexItem />} direction={"row"} spacing={2} justifyContent="space-between">
        <MainFeed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Blog;
