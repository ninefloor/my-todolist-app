import { useState } from "react";
import styled from "styled-components";

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
  &:hover > button{
    display: block;
  }
`;

const Label = styled.label`
  margin-right: 14px;
`

const TodoText = styled.p`
  width: 550px;
  font-size: 1.5rem;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  display: none;
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  color: ${(props) => (props.isChecked ? "#f2edeb" : "#0d0d0d")};
  transition: all 0.3s;
`

const Todo = ({editClickHandler, todo}) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkedHandler = (checked) => {
    setIsChecked(checked);
  };
  return (
    <List isChecked={isChecked}>
      <Input
        id={todo.id}
        type="checkbox"
        onChange={(e) => checkedHandler(e.target.checked)}
      />
      <Label htmlFor={todo.id}>
        {isChecked ? (
          <i class="fa-regular fa-2xl fa-square-check" />
        ) : (
          <i class="fa-regular fa-2xl fa-square"></i>
        )}
      </Label>
        <TodoText isChecked={isChecked}>{todo.content}</TodoText>
        <Button onClick={editClickHandler} isChecked={isChecked}><i class="fa-solid fa-xl fa-pen"></i></Button>
        <Button isChecked={isChecked}><i class="fa-solid fa-xl fa-trash"></i></Button>
    </List>
  );
};

export default Todo;
