import ActionTypes from '../actions/ActionTypes';

const initialState = {
  pageNo: 0,
  keyword: '',
  images: [],
};

const reducer = (state = initialState, action) => {
  let nextState = {};
  if (action.type === ActionTypes.GET_IMAGES) {
    nextState = {
      ...state,
      images: action.images,
      pageNo: action.pageNo + 1,
    };
  } else if (action.type === ActionTypes.GET_NEXT_IMAGES) {
    nextState = {
      ...state,
      images: [...state.images, ...action.images],
      pageNo: action.pageNo + 1,
    };
  } else if (action.type === ActionTypes.SEARCH_IMAGES) {
    nextState = {
      ...state,
      keyword: action.keyword,
      images: action.images,
      pageNo: action.pageNo + 1,
    };
  } else {
    nextState = state;
  }
  return nextState;
};

export default reducer;
