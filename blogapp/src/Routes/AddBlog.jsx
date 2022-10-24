import "../App.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, FormControl, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";

function AddBlog() {
  const [value, setValue] = useState("");

  return (
    <Container>
      <TextField
        label="Add Image URL"
        id="outlined-start-adornment"
        sx={{ width: "100%", marginTop: "50px", mb: "10px" }}
      />
      <TextField
        label="Add Summary"
        id="outlined-start-adornment"
        sx={{ width: "100%", mb: "10px" }}
      />
      <TextField
        label="Add a heading"
        id="outlined-start-adornment"
        sx={{ width: "100%", mb: "10px" }}
      />
      <ReactQuill
        theme="snow"
        placeholder="Write someting..."
        value={value}
        onChange={setValue}
      />
      <Button
        style={{ color: "black", borderColor: "black", margin: "10px" }}
        variant="outlined"
      >
        {<AddIcon />} Add
      </Button>
    </Container>
  );
}

export default AddBlog;
