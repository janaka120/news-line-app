import {CustomNewsConstant} from '../CustomNewsConstant';

const initialState = {
  customArticles: [],
  customTotalArticles: 0,
};

const customNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CustomNewsConstant.CUSTOM_NEWS_REQUEST_SUCCESS:
      console.log('action.payload >>>', action.payload);
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default customNewsReducer;
