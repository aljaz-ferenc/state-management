import { useRef, useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')
  const inputRef = useRef();

  function handleSubmit(e){
    e.preventDefault()
    setInput('')
    setTodos(prevTodos => [...prevTodos, {todo: inputRef.current.value, id: Math.random(), isChecked: false}])
  }

  function handleInput(){
    setInput(inputRef.current.value)
  }

  function handleRemoveTodo(id){
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function handleCheckTodo(id){
    const newTodos = [...todos]
    const index = todos.findIndex(todo => todo.id === id)
    newTodos.at(index).isChecked = !newTodos.at(index).isChecked
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} ref={inputRef} className="input" type="text" />
        <button>Add Todo</button>
      </form>
      <TodoList todos={todos} handleRemove={handleRemoveTodo} handleCheck={handleCheckTodo} />
    </div>
  );
}

export default App;