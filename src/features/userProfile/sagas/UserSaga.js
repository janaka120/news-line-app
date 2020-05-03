// @flow
import {takeEvery, put, call} from 'redux-saga/effects';
import type {Effect} from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

import {UserConstant} from '../UserConstant';
import {requestUserSaveSuccess} from '../actions/UserActions';
import {stopFullLoader} from '../../app/actions/AppActions';
import API from '../../../api';
import type {User} from '../../app/models/UserModel';
import Alert from '../../app/components/CustomAlert';

export const getItem = async (key: string): Promise<string> => {
  try {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return item;
    } else {
      throw '';
    }
  } catch (error) {
    // Alert('Oops', 'User profile retrieve failed');
    console.log('get item', error);
    throw error;
  }
};

export const setItem = async (key: string, value: string): Promise<void> => {
  return await AsyncStorage.setItem(key, value);
};

function* requestProfileSave({payload}) {
  try {
    const {userName, fullName, password} = payload;
    yield call(setItem, UserConstant.USER_NAME_KEY, userName);
    yield call(setItem, UserConstant.USER_FULL_NAME_KEY, fullName);
    yield call(setItem, UserConstant.USER_PASSWORD_KEY, password);
    yield put(
      requestUserSaveSuccess({
        userName,
        fullName,
        password,
      }),
    );
    yield put(stopFullLoader());
    Alert('Success', 'User profile save successfully');
  } catch (e) {
    yield put(stopFullLoader());
    Alert('Oops', 'User profile save failed');
    console.log('requestNews, error: ', e);
  }
}

function* requestProfileSavedData() {
  try {
    const userName = yield call(getItem, UserConstant.USER_NAME_KEY, userName);
    const fullName = yield call(getItem, UserConstant.USER_FULL_NAME_KEY);
    const password = yield call(getItem, UserConstant.USER_PASSWORD_KEY);
    yield put(
      requestUserSaveSuccess({
        userName,
        fullName,
        password,
      }),
    );
    yield put(stopFullLoader());
  } catch (e) {
    yield put(stopFullLoader());
    // Alert('Oops', 'User profile retrieve failed');
    console.log('requestNews, error: ', e);
  }
}

function* UserSaga(): Iterable<Effect> {
  yield takeEvery(UserConstant.PROFILE_SAVE_REQUEST, requestProfileSave);
  yield takeEvery(UserConstant.PROFILE_REQUEST_SAVED, requestProfileSavedData);
}
export default UserSaga;
