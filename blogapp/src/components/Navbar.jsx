import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logoutApi } from "../store/auth/auth.action";

const StyledToolBar = styled(Toolbar)({
  width: "90%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
}));

function Navbar({ setMode, mode }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const isAuth = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(logoutApi());
    setOpen(false);
    setMode("light");
    localStorage.removeItem("token");
    navigate("/signin");
  };
  // #33393d ,0b172a
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#55382e", padding: "10px" }}
    >
      <StyledToolBar>
        <Link to="/">
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            BlogCenter
          </Typography>
          <EmojiObjectsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Link>
        {isAuth ? (
          <Icons>
            <DarkModeIcon
              fontSize="large"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            />
            <Link to={"/addblog"}>
              <AddCircleOutlinedIcon fontSize="large"></AddCircleOutlinedIcon>
            </Link>
            <AccountCircleIcon
              onClick={(e) => setOpen(true)}
              fontSize="large"
            />
          </Icons>
        ) : (
          <Icons>
            {/* <DarkModeIcon fontSize="large"/> */}
            <Link to={"/signin"}>
              <Button
                sx={{ display: { xs: "none", sm: "block" } }}
                style={{ color: "white", borderColor: "white" }}
                variant="outlined"
              >
                Sign In
              </Button>
              <Button
                sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
                variant="text"
                startIcon={<LoginOutlinedIcon />}
              ></Button>
            </Link>
            <Link to={"/signup"}>
              <Button
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
          </Icons>
        )}
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <Button onClick={handleSignout} startIcon={<LogoutOutlinedIcon />}>
          Logout
        </Button>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
