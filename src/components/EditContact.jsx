import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../ContactContext";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const { contactsToEdit, saveContact } = useContext(contactContext);

  const navigate = useNavigate();
  const [editContact, setEditContact] = useState(contactsToEdit);
  console.log(editContact);
  useEffect(() => {
    setEditContact(contactsToEdit);
  }, [contactsToEdit]);

  const handleInput = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
    console.log(e.target.name);
  };

  return (
    <>
      {editContact ? (
        <Box
          style={{ display: "flex", justifyContent: "center" }}
          sx={{ display: "flex", m: 3 }}
        >
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            onChange={handleInput}
            value={editContact.name || ""}
          />
          <TextField
            id="outlined-basic"
            label="number"
            variant="outlined"
            name="number"
            onChange={handleInput}
            value={editContact.number || ""}
          />
          <TextField
            id="outlined-basic"
            label="photo"
            variant="outlined"
            name="photo"
            onChange={handleInput}
            value={editContact.photo || ""}
          />
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              saveContact(editContact);
              navigate("/");
            }}
          >
            Save
          </Button>
        </Box>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditContact;
