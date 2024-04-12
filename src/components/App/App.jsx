import css from "./App.module.css";
import Title from "../Title/Title";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../listContacts.json";
import { useState } from "react";

export default function App() {
  const [contactsValues, setContactsValues] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const searchBoxTask = contactsValues.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.conteiner}>
      <Title text="Phonebook" />
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchBoxTask} />
    </div>
  );
}
