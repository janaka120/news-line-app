import {HomeConstant} from '../HomeConstant';

const initialState = {
  articles: [],
  totalArticles: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeConstant.NEWS_REQUEST_SUCCESS:
      // console.log('action.payload >>>', action.payload);
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default homeReducer;
