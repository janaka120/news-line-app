//@flow
import {combineReducers} from 'redux';

import onboardingReducer from '../features/onboarding/reducers/OnboardingReducer';
import homeReducer from '../features/home/reducers/HomeReducer';
import customNewsReducer from '../features/customNews/reducers/CustomNewsReducer';
import userReducer from '../features/userProfile/reducers/UserReducer';

const RootReducer = combineReducers({
  onboardingReducer,
  homeReducer,
  customNewsReducer,
  userReducer,
});
export default RootReducer;
