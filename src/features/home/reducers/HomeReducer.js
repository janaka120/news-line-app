import {HomeConstant} from '../HomeConstant';

const initialState = {
  articles: [],
  totalArticles: 0,
  isListRefreshing: false,
  isListLoading: false,
  page: 1,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeConstant.NEWS_REQUEST_SUCCESS:
      return {...state, ...action.payload, isListRefreshing: false, page: 1};
    case HomeConstant.NEWS_PULL_TO_REFRESH:
      return {...state, isListRefreshing: true};
    case HomeConstant.NEWS_REQUEST_FAILED:
      return {...state, isListRefreshing: false, isListLoading: false};
    case HomeConstant.LOAD_MORE_NEWS:
      return {...state, isListLoading: true};
    case HomeConstant.NEWS_LOAD_MORE_REQUEST_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        isListLoading: false,
        page: state.page + 1,
        totalArticles: action.payload.totalArticles,
      };
    default:
      return state;
  }
};

export default homeReducer;
