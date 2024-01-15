import Navbar from "./../Navbar/Navbar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import "./page.scss";

function AddPerson() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text">Add Person</div>
        <div className="inputs-btn">
          <TextField
            style={{ backgroundColor: "red" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            id="standard-basic"
            label="About"
            variant="standard"
          />

          <TextField
            onChange={(e) => {
              setImage(e.target.value);
            }}
            id="standard-basic"
            label="imageURL"
            variant="standard"
          />
          <Button
            onClick={() => {
              let obj = {
                id: uuidv4(),
                name: name,
                about: about,
                image: image,
              };
              axios.post("http://localhost:6060/person", obj);
              console.log(obj);
            }}
            variant="contained"
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddPerson;
