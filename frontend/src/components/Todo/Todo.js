import styles from "./Todo.module.scss";

const Todo = (props) => {
  return (
    <div className={styles.todo}>
      <p>{props.todo.text}</p>
      <p>{props.todo.completed}</p>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
