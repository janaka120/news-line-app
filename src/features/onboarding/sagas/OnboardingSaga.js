import {takeEvery, put, call} from 'redux-saga/effects';
import type {Effect} from 'redux-saga';
import {OnboardingConstant} from '../OnboardingConstant';
import {addTodo} from '../actions/OnboardingActions';
import API from '../../../api';
import {
  ApiEndPoint,
  ApiMethod,
  ApiKey,
  ApiStatusCode,
} from '../../../api/ApiConstants';
import type {NewsResponse} from '../../app/models/NewsModel';

function* requestTodoItem({payload}) {
  try {
    const {id} = payload;
    const url = `${ApiEndPoint.GET_HEADLINES}?country=us&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    console.log('response >>>>>>>>>>>', status);
    if (status === ApiStatusCode.SUCCESS) {
      if (data) {
        console.log('totalResults >>>', data.totalResults);
        console.log('articles >>>', data.articles);
      }
    }
    yield put(
      addTodo({
        id: id,
      }),
    );
  } catch (e) {
    console.log('requestTodoItem, error: ', e);
  }
}

function* OnboardingSaga(): Iterable<Effect> {
  yield takeEvery(OnboardingConstant.TODO_REQUEST, requestTodoItem);
}
export default OnboardingSaga;
