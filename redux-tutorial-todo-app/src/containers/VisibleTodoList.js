import {connect} from 'react-redux'
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';
import {VisibilityFilters} from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({ // components/App.js 에서 createStore 한 것을  props 로 넘겨주는데, 그거 받아옴
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

//react-redux connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
