// @flow
import {takeEvery, put, call} from 'redux-saga/effects';
import type {Effect} from 'redux-saga';
import {HomeConstant} from '../HomeConstant';
import {requestNewsSuccess} from '../actions/HomeActions';
import API from '../../../api';
import {
  ApiEndPoint,
  ApiMethod,
  ApiKey,
  ApiStatusCode,
} from '../../../api/ApiConstants';
import type {NewsResponse, Article} from '../../app/models/NewsModel';
import {formatNewsArticlesData} from '../../../services/DataModalService';
import Alert from '../../app/components/CustomAlert';

function* formatArticleData(articles: Array<Article>) {
  return formatNewsArticlesData(articles);
}

function* requestNewsArticles({payload}) {
  try {
    const url = `${ApiEndPoint.GET_HEADLINES}?country=us&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    if (status === ApiStatusCode.SUCCESS) {
      if (data) {
        const totalResults = data.totalResults;
        const articles = yield call(formatArticleData, data.articles);
        yield put(
          requestNewsSuccess({
            articles: articles,
            totalArticles: totalResults,
          }),
        );
      }
    }
  } catch (e) {
    Alert('Oops', 'News articles retrieving fail');
    console.log('requestNews, error: ', e);
  }
}

function* HomeSaga(): Iterable<Effect> {
  yield takeEvery(HomeConstant.NEWS_REQUEST, requestNewsArticles);
}
export default HomeSaga;
