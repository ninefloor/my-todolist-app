import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
`;

const IconButton = styled(Button)`
  width: 25px;
  height: 25px;
  color: #0d0d0d;
`;

const TextButton = styled(Button)`
  width: 130px;
  height: 40px;
  color: #f2edeb;
  background-color: #0d0d0d;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.1rem;
`;

const TextInput = styled.input.attrs((props) => ({
  type: "text",
}))`
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

// CheckBox용 styled

const CheckInput = styled.input.attrs((props) => ({ type: "checkbox" }))`
  display: none;
`;

const CheckLabel = styled.label`
  margin-right: 14px;
`;

const CheckBox = ({ todo, checkedHandler }) => {
  return (
    <>
      <CheckInput
        id={todo.id}
        type="checkbox"
        onChange={(e) => checkedHandler(e.target.checked, todo.id)}
      />
      <CheckLabel htmlFor={todo.id}>
        {todo.checked ? (
          <i className="fa-regular fa-2xl fa-square-check" />
        ) : (
          <i className="fa-regular fa-2xl fa-square"></i>
        )}
      </CheckLabel>
    </>
  );
};

const FilterUl = styled.ul`
  position: absolute;
  z-index: 3;
  right: 0;
  top: 40px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: all 0.1s ease-in;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.25);
  li {
    width: 100%;
    height: 40px;
    border-top: 3px solid #f2edeb;
    text-align: center;
    background-color: #bfbebd;
    transition: all 0.1s ease-in;
    &:hover {
      background-color: #404040;
      button {
        transition: all 0.1s ease-in;
        color: #f2edeb;
      }
    }
    &:first-child {
      border: none;
    }
    button {
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      font-weight: bold;
      border: 0;
      background: none;
      outline: none;
      cursor: pointer;

      &.active::before {
        content: "✓";
        margin-right: 3px;
        font-size: 1rem;
      }
    }
  }
`;

const Filter = ({ filter, setFilter, setIsFilter }) => {
  const clickHandler = (e) => {
    const { name } = e.target;
    setFilter(name);
    setIsFilter(false);
  };
  return (
    <FilterUl>
      <li>
        <button name="default" className={filter === "default" ? 'active' : ''} onClick={(e) => clickHandler(e)}>
          기본
        </button>
      </li>
      <li>
        <button name="checked" className={filter === "checked" ? 'active' : ''} onClick={(e) => clickHandler(e)}>
          완료
        </button>
      </li>
      <li>
        <button name="unChecked" className={filter === "unChecked" ? 'active' : ''} onClick={(e) => clickHandler(e)}>
          미완료
        </button>
      </li>
    </FilterUl>
  );
};

export { CheckBox, TextInput, TextButton, IconButton, Button, Filter };
