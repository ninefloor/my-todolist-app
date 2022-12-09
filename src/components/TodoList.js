import Todo from "./Todo.js";
import { useSelector } from "react-redux";

const TodoList = ({setTodoList, setIsEdit}) => {
  const todoList = useSelector(state => state)
  return (
    <ul className="todoList">
      {todoList.map((todo, idx) => <Todo todo={todo} key={todo.id} idx={idx} setTodoList={setTodoList} setIsEdit={setIsEdit}/>)}
    </ul>
  );
};

export default TodoList;
