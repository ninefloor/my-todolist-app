import styled from "styled-components";
import Todo from "./Todo.js";

const TodoListUl = styled.ul`
  width: 700px;
  height: 500px;
`;

const TodoList = ({editClickHandler}) => {
  return (
    <TodoListUl>
      <Todo editClickHandler={editClickHandler}/>
      <Todo />
      <Todo />
    </TodoListUl>
  );
};

export default TodoList;
