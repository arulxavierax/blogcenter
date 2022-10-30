import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function MainFeed({ date, imageUrl, summary, heading, desc }) {
  return (
    <Box flex={8} p={2}>
      <Container>
        <p>{date}</p>
        <h1>{heading}</h1>
        <h3 style={{ textAlign: "justify" }}>{summary}</h3>
        <img src={imageUrl} />
        <Typography variant="h6" component={"p"}>
          {desc}
        </Typography>
      </Container>
    </Box>
  );
}

export default MainFeed;
