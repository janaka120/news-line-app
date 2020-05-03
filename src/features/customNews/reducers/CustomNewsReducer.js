import {CustomNewsConstant} from '../CustomNewsConstant';

const initialState = {
  customArticles: [],
  customTotalArticles: 0,
  isListRefreshing: false,
  isListLoading: false,
  page: 1,
};

const customNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CustomNewsConstant.CUSTOM_NEWS_REQUEST_SUCCESS:
      return {...state, ...action.payload, isListRefreshing: false, page: 1};
    case CustomNewsConstant.CUSTOM_NEWS_PULL_TO_REFRESH:
      return {...state, isListRefreshing: true, page: 1};
    case CustomNewsConstant.CUSTOM_NEWS_REQUEST_FAILED:
      return {...state, isListRefreshing: false};
    case CustomNewsConstant.LOAD_MORE_CUSTOM_NEWS:
      return {...state, isListLoading: true};
    case CustomNewsConstant.CUSTOM_NEWS_LOAD_MORE_REQUEST_SUCCESS:
      return {
        ...state,
        customArticles: [
          ...state.customArticles,
          ...action.payload.customArticles,
        ],
        customTotalArticles: action.payload.customTotalArticles,
        isListLoading: false,
        page: state.page + 1,
        isListRefreshing: false,
      };
    default:
      return state;
  }
};

export default customNewsReducer;
