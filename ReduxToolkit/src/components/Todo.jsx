import { useDispatch } from "react-redux";
import { actions } from "../store/TodoSlice";
import "./Todo.css";

const isCheckedStyle = {
  textDecoration: "line-through",
  color: "#555",
};

export default function Todo({todo, id, isChecked}) {
  const dispatch = useDispatch()

  function handleRemoveTodo(){
    dispatch(actions.removeTodo(id))
  }
  
  function handleCheckTodo(){
    dispatch(actions.checkTodo(id))
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
      <span className="remove-todo" onClick={handleRemoveTodo}>
        &#10060;
      </span>
        </div>
    </div>
  );
}
