import "./App.css";
import TodoList from "./components/TodoList";
import { createContext, useState } from "react";
import { useRef } from "react";

export const TodoContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  //context - todos, remove/check functions
  const contextValue = {
    todos: [...todos], 
    removeTodo(id) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    checkTodo(id){
      const newTodos = [...todos]
      const index = todos.findIndex(todo => todo.id === id)
      newTodos.at(index).isChecked = !newTodos.at(index).isChecked
      setTodos(newTodos)
    },
  };


  function handleInput() {
    setInput(inputRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { todo: inputRef.current.value, id: Math.random(), isChecked: false},
    ]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          ref={inputRef}
          onChange={handleInput}
          className="input"
          type="text"
        />
        <button>Add Todo</button>
      </form>
      <TodoContext.Provider value={contextValue}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
