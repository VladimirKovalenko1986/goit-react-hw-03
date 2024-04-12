import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={css.conteiner}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact data={item} />
        </li>
      ))}
    </ul>
  );
}
