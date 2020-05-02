// @flow
import {takeEvery, put, call} from 'redux-saga/effects';
import type {Effect} from 'redux-saga';
import {CustomNewsConstant} from '../CustomNewsConstant';
import {requestCustomNewsSuccess} from '../actions/CustomNewsActions';
import API from '../../../api';
import {
  ApiEndPoint,
  ApiMethod,
  ApiKey,
  ApiStatusCode,
} from '../../../api/ApiConstants';
import type {NewsResponse, Article} from '../../app/models/NewsModel';
import {formatNewsArticlesData} from '../../../services/DataModalService';

function* formatArticleData(articles: Array<Article>) {
  return formatNewsArticlesData(articles);
}

function* requestNewsArticles({payload}) {
  try {
    const {newsTopic} = payload;
    console.log('newsTopic >>>>>>>>>>>>>>>>>>>', newsTopic);
    const url = `${ApiEndPoint.GET_HEADLINES}?q=${newsTopic}&sortBy=popularity&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    console.log('response >>>>>>>>>>>', status);
    if (status === ApiStatusCode.SUCCESS) {
      if (data) {
        const totalResults = data.totalResults;
        const articles = yield call(formatArticleData, data.articles);
        console.log('totalResults >>>>>>>>>>>', totalResults);
        yield put(
          requestCustomNewsSuccess({
            customArticles: articles,
            customTotalArticles: totalResults,
          }),
        );
      }
    }
  } catch (e) {
    console.log('requestNews, error: ', e);
  }
}

function* CustomNewsSaga(): Iterable<Effect> {
  yield takeEvery(CustomNewsConstant.CUSTOM_NEWS_REQUEST, requestNewsArticles);
}
export default CustomNewsSaga;