import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Message from "./components/Message/Message";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <Message />}
    </>
  );
}

export default App;
