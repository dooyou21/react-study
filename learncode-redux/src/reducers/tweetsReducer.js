const tweetsReducer = (state = [], action) => {
  switch (action.type) {
    case "TWEETS":
      state = [
        ...state,
        action.payload
      ]
      break;
    default:
      // do nothing;
  }
  return state;
};

export default tweetsReducer;