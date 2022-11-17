export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CHECKED_TODO = "CHECKED_TODO";

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: { content },
  };
};
export const checkedTodo = (checked, id) => {
  return {
    type: CHECKED_TODO,
    payload: { id, checked },
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};
export const editTodo = (content, id) => {
  return {
    type: EDIT_TODO,
    payload: { content, id },
  };
};
