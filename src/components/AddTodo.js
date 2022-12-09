import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { addTodo } from "../actions";
import { useDispatch } from "react-redux";
import { IconButton, TextButton, TextInput } from "./styledComponents";

const CloseBtn = styled(IconButton)`
  color: #f2edeb;
  position: absolute;
  top: -38px;
  right: 0;
`;

const AddTodo = ({ addClickHandler }) => {
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const textChangeHandler = (eVal) => {
    setTextValue(eVal);
  };

  const addTodolistHandler = (value) => {
    dispatch(addTodo(value));
    addClickHandler();
  };

  const keyUpHandler = (code) => {
    if (code === "Enter") addTodolistHandler(textValue);
  };

  return (
    <div className="modalBg" onClick={addClickHandler}>
      <div className="formContainer" onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={addClickHandler}>
          <i className="fa-solid fa-2xl fa-xmark"></i>
        </CloseBtn>
        <TextInput
          type="text"
          ref={inputEl}
          value={textValue}
          placeholder="할 일을 입력하세요"
          onChange={(e) => textChangeHandler(e.target.value)}
          onKeyUp={(e) => keyUpHandler(e.key)}
        />
        <TextButton onClick={(e) => addTodolistHandler(textValue)}>
          등록하기
        </TextButton>
      </div>
    </div>
  );
};

export default AddTodo;
