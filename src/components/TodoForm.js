import React, { useRef } from "react";
import { connect } from "react-redux";
import * as action from "../actions";

const TodoForm = ({ value, onChangValue, onAddTodo }) => {
  const inputRef = useRef();
  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChangValue(e.target.value)}
        />
        <input
          type="submit"
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            onAddTodo(value);
            onChangValue("");
          }}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangValue: (value) => {
      dispatch(action.changeValueForm(value));
    },
    onAddTodo: (title) => {
      dispatch(action.addTodo(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
