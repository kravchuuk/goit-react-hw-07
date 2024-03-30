import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}
