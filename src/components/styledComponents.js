import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
`;

export const IconButton = styled(Button)`
  width: 25px;
  height: 25px;
  color: #0d0d0d;
`;

export const TextButton = styled(Button)`
  width: 130px;
  height: 40px;
  color: #f2edeb;
  background-color: #0d0d0d;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.1rem;
`;

export const TextInput = styled.input.attrs((props) => ({
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

const CheckInput = styled.input.attrs((props) => ({ type: "checkbox" }))`
  display: none;
`;

const CheckLabel = styled.label`
  margin-right: 14px;
`;

export const CheckBox = ({ todo, checkedHandler }) => {
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
