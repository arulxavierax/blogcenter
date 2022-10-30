import { Box, Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { getBlogApi } from "../store/blogs/blog.action";
import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Chip,
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
    return <h3>Loading ...</h3>;
  }

  if (error) {
    return <h3>Something went wrong !</h3>;
  }

  return (
    <Box>
      {data.map((el) => (
        <Box key={el._id}>
          <Link to={`/blog/${el._id}`}>
            <Stack
              mt={10}
              direction={"row"}
              spacing={10}
              justifyContent="space-between"
            >
              <Container sx={{ display: "flex" }}>
                <Container>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h4">{el.heading}</Typography>
                    <Typography>{el.summary}</Typography>
                  </ThemeProvider>
                </Container>
                <Container>
                  <img width="50%" src={el.imageUrl} />
                </Container>
              </Container>
            </Stack>
            <Divider variant="inset" component="li" />
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Feeds;
