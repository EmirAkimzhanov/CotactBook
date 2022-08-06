import React from "react";
import AddContact from "./components/AddContact";
import CardList from "./components/CardList";
import ContactContextProvider from "./ContactContext";

const Home = () => {
  return (
    <div>
      <AddContact />
      <CardList />
    </div>
  );
};

export default Home;
