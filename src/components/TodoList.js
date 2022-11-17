import styled from "styled-components";
import Todo from "./Todo.js";
import { useSelector } from "react-redux";

const TodoListUl = styled.ul`
  width: 700px;
  height: 500px;
`;

const TodoList = ({setTodoList, setIsEdit}) => {
  const todoList = useSelector(state => state)
  return (
    <TodoListUl>
      {todoList.map((todo, idx) => <Todo todo={todo} key={todo.id} idx={idx} setTodoList={setTodoList} setIsEdit={setIsEdit}/>)}
    </TodoListUl>
  );
};

export default TodoList;
