export const addTodo = text => ({
  type: 'ADD_TODO',
  id: Math.round(Math.random(Date.now()) * 1000000),
  text
});

export const setVisibilityFilter = filter => ({type: 'SET_VISIBILITY_FILTER', filter});

export const toggleTodo = id => ({type: 'TOGGLE_TODO', id});
export const fetchTodo = () => ({type: 'FETCH_TODO'});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
