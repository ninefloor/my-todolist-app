import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";

const Background = styled.div`
  width: 100%;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(13, 13, 13, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.ul`
  width: 550px;
  height: 160px;
  background-color: #f2edeb;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
`;
const CloseBtn = styled(Button)`
  width: 25px;
  height: 25px;
  color: #f2edeb;
  position: absolute;
  top: -38px;
  right: 0;
`;
const SubmitBtn = styled(Button)`
  width: 130px;
  height: 40px;
  color: #f2edeb;
  background-color: #0d0d0d;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  box-shadow: inset 2px 2px 3px 0 rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 1.3rem;
  background-color: #bfbebd;
  border-radius: 10px;
  padding-left: 8px;
  font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-weight: 300;
  }
`;

const EditTodo = ({ isEdit, setIsEdit }) => {
  const [textValue, setTextValue] = useState(isEdit[2]);
  const dispatch = useDispatch();

  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const textChangeHandler = (eVal) => {
    setTextValue(eVal);
  };

  const editHandler = (id) => {
    dispatch(editTodo(textValue, id));
    setIsEdit([false, -1, ""]);
  };

  const keyUpHandler = (code) => {
    if (code === "Enter") editHandler(isEdit[1]);
  };

  return (
    <Background onClick={() => setIsEdit([false, -1, ""])}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setIsEdit([false, -1, ""])}>
          <i className="fa-solid fa-2xl fa-xmark"></i>
        </CloseBtn>
        <Input
          type="text"
          ref={inputEl}
          value={textValue}
          placeholder="할 일을 입력하세요"
          onChange={(e) => textChangeHandler(e.target.value)}
          onKeyUp={(e) => keyUpHandler(e.key)}
        />
        <SubmitBtn onClick={() => editHandler(isEdit[1])}>수정하기</SubmitBtn>
      </Container>
    </Background>
  );
};

export default EditTodo;
