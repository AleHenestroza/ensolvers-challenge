import styles from "./Todo.module.scss";

const Todo = (props) => {
  const deleteHandler = () => {
    props.deleteTodo(props.todo);
  };

  return (
    <div className={styles.todo}>
      <p>{props.todo.description}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
