import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function MainFeed({ date, imageUrl, summary, heading, desc }) {
  return (
    <Box flex={8} p={2}>
      <Container>
        <Card sx={{ maxWidth: "100%" }}>
          <CardContent>
            <CardHeader subheader={date} />
            <Typography gutterBottom variant="h5" component="div">
              {heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
            <CardMedia
              component="img"
              sx={{ mt: 5 }}
              height="100%"
              image={imageUrl}
              alt={heading}
            />
          </CardContent>
          <CardContent>
            <Typography paragraph>{desc}</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default MainFeed;
