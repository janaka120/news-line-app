import {AppConstant} from '../AppConstant';

const initialState = {
  fullLoader: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstant.FULL_LOADER_START:
      return {...state, fullLoader: true};
    case AppConstant.FULL_LOADER_STOP:
      return {...state, fullLoader: false};
    default:
      return state;
  }
};

export default appReducer;
