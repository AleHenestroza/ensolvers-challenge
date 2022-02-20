import NewTodo from "../NewTodo/NewTodo";
import TodoList from "../TodoList/TodoList";
import { useState, useEffect } from "react";
import styles from "./TodoContainer.module.scss";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);

  // GET ToDos from the API and then render the ToDoList component after the data is fetched
  const getTodos = () => {
    const fetchedTodos = [];
    require("axios")
      .get(`${process.env.REACT_APP_API_URL}/todos/${props.folder.id}`)
      .then((response) => {
        response.data.forEach((todo) => {
          fetchedTodos.push(todo);
        });
      })
      .then(() => {
        setTodos(fetchedTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  // POST a ToDo to the API. The API will create a new ToDo and return it.
  const addTodo = (todo) => {
    require("axios")
      .post(`${process.env.REACT_APP_API_URL}/todos`, todo)
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE a ToDo from the API. The API will delete the ToDo and return it.
  const deleteTodo = (todo) => {
    require("axios")
      .delete(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`)
      .then((response) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // PUT a ToDo to the API. The API will update the ToDo and return it.
  const updateTodo = (todo) => {
    require("axios")
      .put(`${process.env.REACT_APP_API_URL}/todos`, todo)
      .then((response) => {
        setTodos(
          todos.map((t) => {
            if (t.id === todo.id) {
              return response.data;
            } else {
              return t;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.todo_list}>
      <NewTodo folderId={props.folder.id} addTodo={addTodo} />
      <div className={styles.todo_list__header}>
        <p className={styles.todo_list__header__title}>
          Folder &gt; {props.folder.name}
        </p>
        <p
          className={styles.todo_list__header__return}
          onClick={props.deselectFolder}
        >
          Go back
        </p>
      </div>
      {todos.length > 0 && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
};

export default TodoContainer;
