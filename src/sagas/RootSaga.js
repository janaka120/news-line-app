// @flow
import {all} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import HomeSaga from '../features/home/sagas/HomeSaga';
import CustomNewsSaga from '../features/customNews/sagas/CustomNewsSaga';
import UserSaga from '../features/userProfile/sagas/UserSaga';

export default function* rootSaga(): Saga<void> {
  yield all([HomeSaga(), CustomNewsSaga(), UserSaga()]);
}
