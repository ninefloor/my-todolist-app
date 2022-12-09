import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
import { IconButton, TextButton, TextInput } from "./styledComponents";

const CloseBtn = styled(IconButton)`
  color: #f2edeb;
  position: absolute;
  top: -38px;
  right: 0;
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
    <div className="modalBg" onClick={() => setIsEdit([false, -1, ""])}>
      <div className="formContainer" onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setIsEdit([false, -1, ""])}>
          <i className="fa-solid fa-2xl fa-xmark"></i>
        </CloseBtn>
        <TextInput
          ref={inputEl}
          value={textValue}
          placeholder="할 일을 입력하세요"
          onChange={(e) => textChangeHandler(e.target.value)}
          onKeyUp={(e) => keyUpHandler(e.key)}
        />
        <TextButton onClick={() => editHandler(isEdit[1])}>수정하기</TextButton>
      </div>
    </div>
  );
};

export default EditTodo;
