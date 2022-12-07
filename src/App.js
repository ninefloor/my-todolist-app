import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import styled from "styled-components";
import { useState } from "react";


const Container = styled.ul`
  width: 800px;
  height: 600px;
  background-image: none;
  background-color: #f2edeb;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin-bottom: 18px;
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  color: #0d0d0d;
`;

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState([false, -1, '']);

  const addClickHandler = () => setIsAdd(!isAdd);
  return (
    <>
      {isAdd ? (
        <AddTodo addClickHandler={addClickHandler} />
      ) : undefined}
      {isEdit[0] ? <EditTodo isEdit={isEdit} setIsEdit={setIsEdit} /> : undefined}
      <main>
        <h1>뭐 해야 되지?</h1>
        <Container>
          <BtnContainer>
            <Button onClick={addClickHandler}>
              <i className="fa-solid fa-2xl fa-plus"></i>
            </Button>
            <Button>
              <i className="fa-solid fa-2xl fa-bars"></i>
            </Button>
          </BtnContainer>
          <TodoList
            setIsEdit={setIsEdit}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
