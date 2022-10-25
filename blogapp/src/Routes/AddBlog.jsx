import "../App.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, FormControl, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Container } from "@mui/system";

function AddBlog() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    imageurl: "",
    heading: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = value;
    setData({
      ...value,
      ...data,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Container>
      <TextField
        onChange={handleChange}
        name="imageurl"
        label="Add Image URL"
        id="Outlined"
        variant="outlined"
        sx={{ width: "100%", marginTop: "20px", mb: "10px" }}
      />
      <TextField
        onChange={handleChange}
        name="heading"
        label="Add a heading"
        id="outlined-start-adornment"
        variant="outlined"
        sx={{ width: "100%", mb: "10px" }}
      />
      <TextField
        onChange={handleChange}
        name="summary"
        label="Add Summary"
        id="outlined-start-adornment"
        variant="outlined"
        sx={{ width: "100%", mb: "10px" }}
      />
      <ReactQuill
        theme="snow"
        placeholder="Write someting..."
        value={value}
        onChange={setValue}
      />
      <Button
        sx={{ margin: "10px", marginBottom: "20px" }}
        variant="contained"
        onClick={handleSubmit}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Container>
  );
}

export default AddBlog;
