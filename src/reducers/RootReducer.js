//@flow
import {combineReducers} from 'redux';

import homeReducer from '../features/home/reducers/HomeReducer';
import customNewsReducer from '../features/customNews/reducers/CustomNewsReducer';
import userReducer from '../features/userProfile/reducers/UserReducer';
import appReducer from '../features/app/reducers/AppReducer';

const RootReducer = combineReducers({
  homeReducer,
  customNewsReducer,
  userReducer,
  appReducer,
});
export default RootReducer;
