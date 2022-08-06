import { LineAxisOutlined } from "@mui/icons-material";
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

export const contactContext = createContext();

const INIT_STATE = {
  contacts: [],
  contactsToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "EDIT_CONTACTS":
      return { ...state, contactsToEdit: action.payload };
    default:
      return state;
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = async (newContact) => {
    await axios.post(`http://localhost:8000/contacts`, newContact);
    getContact();
  };

  const getContact = async () => {
    let { data } = await axios(`http://localhost:8000/contacts`);
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };
  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    getContact();
  };

  const saveContact = async (newContact) => {
    await axios.patch(
      `http://localhost:8000/contacts/${newContact.id}`,
      newContact
    );
    getContact();
  };

  const editContact = async (id) => {
    let { data } = await axios(`http://localhost:8000/contacts/${id}`);
    let action = {
      type: "EDIT_CONTACTS",
      payload: data,
    };
    dispatch(action);
  };

  return (
    <contactContext.Provider
      value={{
        addContact: addContact,
        getContact: getContact,
        contacts: state.contacts,
        deleteContact: deleteContact,
        editContact: editContact,
        saveContact: saveContact,
        contactsToEdit: state.contactsToEdit,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
export default ContactContextProvider;
