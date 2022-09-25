import React from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import * as action from "../actions";

const Todos = ({ todos, onDeleteTodo, onChangeCompleted }) => {
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li className={todo.completed ? "completed" : ""} key={todo.id}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onChangeCompleted(todo)}
            />
            <button onClick={() => onDeleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTodo: (todo) => {
      dispatch(action.deleteTodo(todo));
    },
    onChangeCompleted: (todo) => {
      dispatch(action.changeCompleted(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
