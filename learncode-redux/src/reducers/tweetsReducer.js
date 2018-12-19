const tweetsReducer = (state = [], action) => {
  switch (action.type) {
    case "TWEETS":
      state = [
        ...state,
        action.payload
      ]
      break;
    default:
      // console.warn('tweets reducer type not exist');
  }
  return state;
};

export default tweetsReducer;