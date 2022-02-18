import styles from "./TodoForm.module.scss";

const TodoForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hola");
  };

  return (
    <form className={styles.todo_form} onSubmit={submitHandler}>
      <input
        className={styles.todo_form__input}
        type="text"
        placeholder="Add ToDo"
      />
      <input
        className={styles.todo_form__submit}
        type="submit"
        value="Add ToDo"
      />
    </form>
  );
};

export default TodoForm;
