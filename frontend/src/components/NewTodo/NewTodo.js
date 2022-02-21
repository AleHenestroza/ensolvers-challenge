import styles from "./NewTodo.module.scss";

const NewTodo = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.description.value.length > 0) {
      props.addTodo({
        description: e.target.description.value,
        done: false,
        folderId: props.folderId,
      });
      e.target.description.value = "";
    } else {
      alert("Please enter a todo description");
    }
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

export default NewTodo;
