import { ThemeContext } from "@emotion/react";
import {
  Box,
  Button,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Feeds from "../components/Feeds";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function HomePage() {
  const [active, setActive] = useState(true);

  return (
    <Box>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#55382e",
          color: "whitesmoke",
          paddingBottom: "50px",
          paddingTop: "50px",
        }}
      >
        <Container>
          <ThemeProvider theme={theme}>
            <Typography variant="h1">Stay Creative.</Typography>
          </ThemeProvider>
        </Container>
        <Container>
          <ThemeProvider theme={theme}>
            <Typography mt={2} mb={2} variant="h6" component="p">
              Discover stories, thinking, and <br /> expertise from writers on
              any topic.
            </Typography>
          </ThemeProvider>
        </Container>
        <Container>
          {active ? (
            <Link to={"/addblog"}>
              <Button
                size="large"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "black",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                Get started
              </Button>
            </Link>
          ) : (
            <Link to={"/signup"}>
              <Button
                size="large"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "black",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                Get started
              </Button>
            </Link>
          )}
        </Container>
      </Box>
      <Feeds />
    </Box>
  );
}

export default HomePage;
