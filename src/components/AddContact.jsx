import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { contactContext } from "../ContactContext";

export default function AddContact() {
  const { addContact } = useContext(contactContext);
  const [person, setPerson] = useState({
    name: "",
    number: "",
    photo: "",
  });

  const handleInput = (e) => {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(obj);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            my: 0,
            mx: 1,
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          sx={{ height: 60 }}
          label="Name"
          name="name"
          variant="filled"
          onChange={handleInput}
          value={person.name || ""}
        />
        <TextField
          id="filled-basic"
          sx={{ height: 60 }}
          label="Number"
          name="number"
          variant="filled"
          onChange={handleInput}
          value={person.number || ""}
        />
        <TextField
          id="filled-basic"
          sx={{ height: 60 }}
          label="Photo"
          name="photo"
          variant="filled"
          onChange={handleInput}
          value={person.photo || ""}
        />
        <Button
          variant="outlined"
          sx={{ height: 55, color: "#c8dcef" }}
          onClick={() => {
            addContact(person);
            setPerson({ name: "", number: "", photo: "" });
          }}
        >
          ADD CONTACT
        </Button>
      </Box>
    </div>
  );
}
