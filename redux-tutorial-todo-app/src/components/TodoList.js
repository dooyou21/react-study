import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map(todo => (<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, completed: PropTypes.bool.isRequired, text: PropTypes.string.isRequire}).isRequired)
    .isRequired,
  toggleTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList