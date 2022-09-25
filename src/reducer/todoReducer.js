const initialState = [
  {
    id: 1,
    title: "Viec 1",
    completed: true,
  },
  {
    id: 2,
    title: "Viec 2",
    completed: false,
  },
  {
    id: 3,
    title: "Viec 3",
    completed: false,
  },
  {
    id: 4,
    title: "Viec 4",
    completed: false,
  },
];
const ID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      var index = state.findIndex((todo) => todo.id === action.payload.id);
      var newArr = [...state];
      newArr.splice(index, 1);
      return [...newArr];
    case "CHANGE_COMPLETED":
      var index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = !state[index].completed;
      return [...state];
    case "ADD_TODO":
      console.log(action.title);
      var obj = {
        id: ID(),
        title: action.payload,
        completed: false,
      };
      console.log(obj);
      return [...state, obj];
    default:
      return state;
  }
};

export default todoReducer;
