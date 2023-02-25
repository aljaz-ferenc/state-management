import { useContext } from "react";
import { TodoContext } from "../App";
import "./Todo.css";

const isCheckedStyle = {
  textDecoration: "line-through",
  color: "#555",
};

export default function Todo({todo, id, isChecked}) {
  const context = useContext(TodoContext)

  function handleRemove(){
    context.removeTodo(id)
  }

  function handleCheckTodo(){
    context.checkTodo(id)
  }

  return (
    <div className="todo">
      <label
        htmlFor="todo"
        className="todo-title"
        style={isChecked ? isCheckedStyle : null}
      >
        {todo}
      </label>
      <div className="buttons">
      <input
        id="todo"
        className="checkbox"
        type="checkbox"
        onClick={handleCheckTodo}
        />
      <span onClick={handleRemove} className="remove-todo">
        &#10060;
      </span>
        </div>
    </div>
  );
}
