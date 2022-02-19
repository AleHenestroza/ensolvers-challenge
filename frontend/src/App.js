import "./App.scss";
import TodoForm from "./components/NewTodo/TodoForm";
import TodoList from "./components/UI/TodoList";

const App = () => {
  const axios = require("axios");
  axios.get(`${process.env.REACT_APP_API_URL}/todos`).then((res) => {
    console.log(res.data);
  });
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn React Router", completed: false },
  ];
  return (
    <div className="app">
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
