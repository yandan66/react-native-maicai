import * as ACTIONS_TYPE from '../actions/constant';
let initialState = {
  isFetching: false,
  categoryDetail: {},
  error: ''
}

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case ACTIONS_TYPE.REQUEST_GETCATEGORYDETAIL:
      return Object.assign({}, state, {
        categoryDetail: action.preload,
        date: action.date,
        isFetching: action.isFetching
      });
    case ACTIONS_TYPE.REQUEST_FAIL:
      return Object.assign({}, state, {
        error: action.preload,
        date: action.date,
        isFetching: action.isFetching
      });
    default:
      return state;
  }
}

export default CategoriesReducer;