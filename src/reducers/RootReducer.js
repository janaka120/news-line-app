//@flow
import {combineReducers} from 'redux';

import onboardingReducer from '../features/onboarding/reducers/OnboardingReducer';
import homeReducer from '../features/home/reducers/HomeReducer';
import customNewsReducer from '../features/customNews/reducers/CustomNewsReducer';

const RootReducer = combineReducers({
  onboardingReducer,
  homeReducer,
  customNewsReducer,
});
export default RootReducer;
