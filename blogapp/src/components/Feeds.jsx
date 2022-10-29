import { Box, Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { getBlogApi } from "../store/blogs/blog.action";

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
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent="space-between"
      ></Stack>
    </Box>
  );
}

export default Feeds;
