import css from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <>
      <form className={css.form}>
        <label htmlFor="">Name</label>
        <input className={css.input} type="text" />
        <label htmlFor="">Number</label>
        <input className={css.input} type="number" />
        <div className={css.conteiner}>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </div>
      </form>
    </>
  );
}
