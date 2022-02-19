import "./App.scss";
import TodoForm from "./components/NewTodo/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  // GET ToDos from the API and then render the ToDoList component after the data is fetched
  const getTodos = () => {
    const fetchedTodos = [];
    require("axios")
      .get(`${process.env.REACT_APP_API_URL}/todos`)
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
    <div className="app">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodo} />
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

export default App;
