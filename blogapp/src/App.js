// import logo from "./logo.svg";
import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
        <AllRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
