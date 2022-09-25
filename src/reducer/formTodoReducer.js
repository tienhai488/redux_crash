const initialState = "";

const formTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return action.payload;
    default:
      return state;
  }
};

export default formTodoReducer;
