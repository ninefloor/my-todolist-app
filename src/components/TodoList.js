import Todo from "./Todo.js";
import { useSelector } from "react-redux";

const TodoList = ({ setTodoList, setIsEdit, filter }) => {
  const todoList = useSelector((state) => state);
  return (
    <ul className="todoList">
      {todoList
        .filter((todo) => {
          switch(filter){
            case 'default':
              return true;
            case 'checked':
              return todo.checked;
            case 'unChecked':
              return !todo.checked;
            default:
              return true;
          }
        })
        .map((todo, idx) => (
          <Todo
            todo={todo}
            key={todo.id}
            idx={idx}
            setTodoList={setTodoList}
            setIsEdit={setIsEdit}
          />
        ))}
    </ul>
  );
};

export default TodoList;
