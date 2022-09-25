import { combineReducers } from "redux";
import formTodoReducer from "./formTodoReducer";
import todoReducer from "./todoReducer";

const reducer = combineReducers({
  todos: todoReducer,
  value: formTodoReducer,
});

export default reducer;
