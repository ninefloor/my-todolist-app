import { ADD_TODO, EDIT_TODO, CHECKED_TODO, DELETE_TODO } from "../actions";
import initialState from "./initialState";
import { v4 as uuidv4 } from "uuid";

const todoReducer = (
  state = JSON.parse(localStorage.getItem("data")) || initialState,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuidv4(),
          checked: false,
          content: action.payload.content,
        },
      ];
    case EDIT_TODO:
      return state.map((el) => {
        if (el.id === action.payload.id) el.content = action.payload.content;
        return el;
      });
    case CHECKED_TODO:
      return state.map((el) => {
        if (el.id === action.payload.id) el.checked = action.payload.checked;
        return el;
      });
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
