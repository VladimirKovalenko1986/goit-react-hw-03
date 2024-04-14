import css from "./App.module.css";
import Title from "../Title/Title";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../listContacts.json";
import { useState, useEffect } from "react";

export default function App() {
  const localTasksKey = "keyTasks";
  const [tasks, setTasks] = useState(() => {
    const sevedTasksLocal = window.localStorage.getItem(localTasksKey);
    return sevedTasksLocal !== null
      ? JSON.parse(sevedTasksLocal)
      : initialContacts;
  });
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const searchBoxTask = tasks.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem(localTasksKey, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={css.conteiner}>
      <Title text="Phonebook" />
      <ContactForm onAdd={addTask} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchBoxTask} onDelete={deleteTask} />
    </div>
  );
}
