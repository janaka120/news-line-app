import {UserConstant} from '../UserConstant';

const initialState = {
  userName: '',
  fullName: '',
  password: '',
  loggedSuccess: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserConstant.PROFILE_SAVE_REQUEST_SUCCESS:
      return {...state, ...action.payload, loggedSuccess: true};
    default:
      return state;
  }
};

export default userReducer;
