import React, { useContext, useEffect } from "react";
import { contactContext } from "../ContactContext";
import ContactCard from "./ContactCard";

const CardList = () => {
  const { contacts, getContact } = useContext(contactContext);
  useEffect(() => {
    getContact();
  }, []);

  return (
    <div style={{ padding: "50px " }}>
      {contacts.map((item, index) => (
        <ContactCard key={index} item={item} />
      ))}
    </div>
  );
};

export default CardList;
