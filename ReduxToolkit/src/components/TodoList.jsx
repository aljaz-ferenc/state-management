import "./TodoList.css";
import Todo from "./Todo";
import { useSelector} from "react-redux";

export default function TodoList() {
  const store = useSelector(state => state)

  return (
    <div className="todo-list">
      {store &&
        store.map(todo => (
          <Todo id={todo.id} todo={todo.todo} key={todo.id} isChecked={todo.isChecked}  />
        ))}
    </div>
  );
}
