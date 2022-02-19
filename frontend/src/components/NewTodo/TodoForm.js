import styles from "./TodoForm.module.scss";

const TodoForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodo({
      description: e.target.description.value,
      completed: false,
    });
  };

  return (
    <form className={styles.todo_form} onSubmit={submitHandler}>
      <input
        className={styles.todo_form__input}
        type="text"
        name="description"
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
