import {
  Alert,
  AlertTitle,
  Backdrop,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainFeed from "../components/MainFeed";
import Rightbar from "../components/Rightbar";
import { getSingleBlogApi } from "../store/singleBlog/singleBlog.action";

function Blog() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, data } = useSelector((store) => store.singleBlog);

  useEffect(() => {
    dispatch(getSingleBlogApi(id));
  }, [id]);

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
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        direction={"row"}
        spacing={2}
        justifyContent="space-between"
      >
        <MainFeed {...data.blog} />
        <Rightbar {...data.author} />
      </Stack>
    </Box>
  );
}

export default Blog;
