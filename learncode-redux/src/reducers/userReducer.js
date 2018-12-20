const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return {
        ...state,
        fetching: true
      }
    case "FETCH_USERS_ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case "RECEIVE_USERS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    case "CHANGE_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "CHANGE_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
    case "ERROR":
      throw new Error('tweets reducer type not exist');
    default:
      // do nothing;
  }
  return state;
};

export default userReducer;