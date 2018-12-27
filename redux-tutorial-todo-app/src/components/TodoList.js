import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTodo = props
      .toggleTodo
      .bind(this);
    props.fetchTodo();
  }

  render() {
    return (
      <ul>
        {this
          .props
          .todos
          .map(todo => (<Todo key={todo.id} {...todo} onClick={() => this.toggleTodo(todo.id)}/>))}
      </ul>
    )
  }
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