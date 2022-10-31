import { Box, Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { getBlogApi } from "../store/blogs/blog.action";
import { ThemeProvider } from "@emotion/react";
import {
  Alert,
  AlertTitle,
  Avatar,
  Backdrop,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  createTheme,
  Divider,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Feeds() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.blogs);

  useEffect(() => {
    dispatch(getBlogApi());
  }, []);

  if (loading) {
    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress disableShrink />
          {/* <CircularProgress color="inherit" /> */}
        </Backdrop>
      </>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ p: 10, margin: 10 }}>
        <AlertTitle>Error</AlertTitle>
        Something went wrong — <strong>check it out!</strong>
      </Alert>
    );
  }

  return (
    <Box>
      {data.map((el) => (
        <Box key={el._id}>
          <Link to={`/blog/${el._id}`}>
            <Container sx={{ mt: 5 }}>
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={el.imageUrl}
                    alt={el.heading}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {el.summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Container>
            <Divider variant="inset" component="li" />
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Feeds;
