//@flow
import {combineReducers} from 'redux';

import onboardingReducer from '../features/onboarding/reducers/OnboardingReducer';
import homeReducer from '../features/home/reducers/HomeReducer';

const RootReducer = combineReducers({
  onboardingReducer,
  homeReducer,
});
export default RootReducer;
