import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import { IconButton } from "./components/styledComponents";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState([false, -1, ""]);
  const todoList = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);

  const addClickHandler = () => setIsAdd(!isAdd);
  return (
    <>
      {isAdd ? <AddTodo addClickHandler={addClickHandler} /> : undefined}
      {isEdit[0] ? (
        <EditTodo isEdit={isEdit} setIsEdit={setIsEdit} />
      ) : undefined}
      <main>
        <h1>뭐 해야 되지?</h1>
        <div className="container">
          <div className="btnContainer">
            <IconButton onClick={addClickHandler}>
              <i className="fa-solid fa-2xl fa-plus"></i>
            </IconButton>
            <IconButton>
              <i className="fa-solid fa-2xl fa-bars"></i>
            </IconButton>
          </div>
          <TodoList setIsEdit={setIsEdit} />
        </div>
      </main>
    </>
  );
}

export default App;
