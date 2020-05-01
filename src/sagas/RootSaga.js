// @flow
import {all} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import OnboardingSagas from '../features/onboarding/sagas/OnboardingSaga';
import HomeSaga from '../features/home/sagas/HomeSaga';

export default function* rootSaga(): Saga<void> {
  yield all([OnboardingSagas(), HomeSaga()]);
}
