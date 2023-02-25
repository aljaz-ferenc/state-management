import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";
import { actions } from "./store/TodoSlice";
import {useDispatch} from 'react-redux'

function App() {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch()

  function handleInput() {
    setInput(inputRef.current.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(actions.addTodo({
      todo: inputRef.current.value, 
      id: Math.random(),
      isChecked: false
    }))
    setInput('')
    dispatch(actions.saveLocal())
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
        <TodoList />
    </div>
  );
}

export default App;
