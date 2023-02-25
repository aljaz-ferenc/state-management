import "./TodoList.css";
import { TodoContext } from "../App";
import Todo from "./Todo";

import { useContext } from "react";

export default function TodoList() {
  const context = useContext(TodoContext);

  return (
    <div className="todo-list">
      {context.todos &&
        context.todos.map(todo => (
          <Todo id={todo.id} todo={todo.todo} key={todo.id} isChecked={todo.isChecked}  />
        ))}
    </div>
  );
}
