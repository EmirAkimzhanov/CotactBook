import AddContact from "./components/AddContact";
import ContactContextProvider from "./ContactContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ContactContextProvider>
        <MainRoutes />
      </ContactContextProvider>
    </>
  );
}

export default App;
