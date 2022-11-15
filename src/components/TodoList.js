import styled from "styled-components";
import Todo from "./Todo.js";

const TodoListUl = styled.ul`
  width: 700px;
  height: 500px;
`;

const TodoList = ({todoList, editClickHandler}) => {
  return (
    <TodoListUl>
      {todoList.map(todo => <Todo todo={todo} id={todo.id} editClickHandler={editClickHandler}/>)}
    </TodoListUl>
  );
};

export default TodoList;
