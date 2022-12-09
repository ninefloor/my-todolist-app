import styled from "styled-components";
import { useDispatch } from "react-redux";
import { checkedTodo, deleteTodo } from "../actions";
import { CheckBox, IconButton } from "./styledComponents";

const List = styled.li`
  width: 700px;
  height: 60px;
  border-radius: 8px;
  background-color: ${(props) => (props.isChecked ? "#404040" : "#bfbebd")};
  margin-bottom: 5px;
  padding-left: 21px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  color: ${(props) => (props.isChecked ? "#f2edeb" : "#0d0d0d")};
  transition: all 0.4s;
  &:hover > button {
    opacity: 1;
  }
`;

const TodoText = styled.p`
  width: 550px;
  font-size: 1.5rem;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

const Button = styled(IconButton)`
  margin-right: 16px;
  color: ${(props) => (props.isChecked ? "#f2edeb" : "#0d0d0d")};
  transition: all 0.3s;
  opacity: 0;
`;

const Todo = ({ setIsEdit, todo }) => {
  const dispatch = useDispatch();
  const checkedHandler = (checked, id) => {
    dispatch(checkedTodo(checked, id));
  };
  const editHandler = (id) => {
    setIsEdit([true, id, todo.content]);
  };
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <List isChecked={todo.checked}>
      <CheckBox todo={todo} checkedHandler={checkedHandler} />
      <TodoText isChecked={todo.checked}>{todo.content}</TodoText>
      <Button onClick={() => editHandler(todo.id)} isChecked={todo.checked}>
        <i className="fa-solid fa-xl fa-pen"></i>
      </Button>
      <Button onClick={() => deleteHandler(todo.id)} isChecked={todo.checked}>
        <i className="fa-solid fa-xl fa-trash"></i>
      </Button>
    </List>
  );
};

export default Todo;
