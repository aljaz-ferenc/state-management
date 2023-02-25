import "./Todo.css";

const isCheckedStyle = {
  textDecoration: "line-through",
  color: "#555",
};

export default function Todo({ todo, id, handleRemove, handleCheck, isChecked }) {

  function handleCheckTodo() {
    handleCheck(id);
  }

  function handleRemoveTodo(){
    handleRemove(id)
  }

  return (
    <div className="todo">
      <label
        style={isChecked ? isCheckedStyle : null}
        htmlFor="todo"
        className="todo-title"
      >
        {todo}
      </label>
      <div className="buttons">
      <input
        onClick={handleCheckTodo}
        id="todo"
        className="checkbox"
        type="checkbox"
        />
      <span onClick={handleRemoveTodo} className="remove-todo">
        &#10060;
      </span>
        </div>
    </div>
  );
}
