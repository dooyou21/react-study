const userReducer = (state = {}, action) => {
  switch (action.type) {
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