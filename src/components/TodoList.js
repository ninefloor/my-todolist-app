import styled from "styled-components";
import Todo from "./Todo.js";

const TodoListUl = styled.ul`
  width: 700px;
  height: 500px;
`;

const TodoList = ({setTodoList, todoList, setIsEdit}) => {
  return (
    <TodoListUl>
      {todoList.map((todo, idx) => <Todo todo={todo} id={todo.id} idx={idx} setTodoList={setTodoList} setIsEdit={setIsEdit}/>)}
    </TodoListUl>
  );
};

export default TodoList;
