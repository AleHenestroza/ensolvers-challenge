import styles from "./TodoForm.module.scss";

const TodoForm = () => {
  return (
    <form className={styles.todo_form}>
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
