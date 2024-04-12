import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onFilter }) {
  const sortId = useId();

  return (
    <div className={css.conteiner}>
      <label htmlFor={sortId}>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        id={sortId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
