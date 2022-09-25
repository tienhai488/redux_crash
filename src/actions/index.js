export const deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};
export const changeCompleted = (todo) => {
  return {
    type: "CHANGE_COMPLETED",
    payload: todo,
  };
};
export const addTodo = (title) => {
  return {
    type: "ADD_TODO",
    payload: title,
  };
};
export const changeValueForm = (value) => {
  return {
    type: "CHANGE_VALUE",
    payload: value,
  };
};
