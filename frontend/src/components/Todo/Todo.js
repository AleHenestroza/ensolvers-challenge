import { useState, useEffect } from "react";
import styles from "./Todo.module.scss";

const Todo = (props) => {
  const [description, setDescription] = useState(props.todo.description);
  const [isDone, setIsDone] = useState(props.todo.done);
  const [timer, setTimer] = useState(null);

  // Update the description of the todo after the user has stopped typing
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      props.updateTodo({
        id: props.todo.id,
        description: description,
        done: isDone,
        folderId: props.todo.folderId,
      });
    }, 1000);
    setTimer(timer);
  }, [description]);

  const inputChanged = (e) => {
    setDescription(e.target.value);
  };

  const completeTodo = (e) => {
    setIsDone(e.target.checked);
    updateTodo({
      id: props.todo.id,
      description: description,
      done: e.target.checked,
      folderId: props.todo.folderId,
    });
  };

  const updateTodo = (todo) => {
    props.updateTodo(todo);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.todo__checkbox}
        type="checkbox"
        checked={isDone}
        onChange={completeTodo}
      />
      <input
        className={styles.todo__description}
        type="text"
        value={description}
        onChange={inputChanged}
      />
      <span className={styles.todo__delete} onClick={deleteTodo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 8v16h18v-16h-18zm5 12c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm4-15.375l-.409 1.958-19.591-4.099.409-1.958 5.528 1.099c.881.185 1.82-.742 2.004-1.625l5.204 1.086c-.184.882.307 2.107 1.189 2.291l5.666 1.248z" />
        </svg>
      </span>
    </li>
  );
};

export default Todo;
