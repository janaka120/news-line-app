// @flow
import {takeEvery, put, call} from 'redux-saga/effects';
import type {Effect} from 'redux-saga';
import {CustomNewsConstant} from '../CustomNewsConstant';
import {
  requestCustomNewsSuccess,
  requestCustomNewsLoadMoreSuccess,
  requestCustomNewsFail,
} from '../actions/CustomNewsActions';
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
  if (articles.length > 0) {
    return formatNewsArticlesData(articles);
  } else {
    return [];
  }
}

function* requestNewsArticles({payload}) {
  try {
    const {newsTopic} = payload;
    const url = `${ApiEndPoint.GET_HEADLINES}?q=${newsTopic}&sortBy=popularity&pageSize=${CustomNewsConstant.CUSTOM_NEWS_ARTICLES_PAGE_SIZE}&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    if (status === ApiStatusCode.SUCCESS) {
      if (data) {
        const totalResults = data.totalResults;
        const articles = yield call(formatArticleData, data.articles);
        yield put(
          requestCustomNewsSuccess({
            customArticles: articles,
            customTotalArticles: totalResults,
          }),
        );
      }
    } else {
      yield put(requestCustomNewsFail());
    }
  } catch (e) {
    yield put(requestCustomNewsFail());
    Alert('Oops', 'News articles retrieving fail');
    console.log('requestNews, error: ', e);
  }
}

function* requestCustomNewsArticlesLoadMore({payload}) {
  try {
    const {page, newsTopic} = payload;
    const url = `${ApiEndPoint.GET_HEADLINES}?q=${newsTopic}&sortBy=popularity&page=${page}&pageSize=${CustomNewsConstant.CUSTOM_NEWS_ARTICLES_PAGE_SIZE}&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    if (status === ApiStatusCode.SUCCESS) {
      if (data) {
        const totalResults = data.totalResults;
        const articles = yield call(formatArticleData, data.articles);
        yield put(
          requestCustomNewsLoadMoreSuccess({
            customArticles: articles,
            customTotalArticles: totalResults,
          }),
        );
      }
    } else {
      yield put(requestCustomNewsFail());
    }
  } catch (e) {
    Alert('Oops', 'News articles retrieving fail');
    yield put(requestCustomNewsFail());
    console.log('requestNews, error: ', e);
  }
}

function* CustomNewsSaga(): Iterable<Effect> {
  yield takeEvery(CustomNewsConstant.CUSTOM_NEWS_REQUEST, requestNewsArticles);
  yield takeEvery(
    CustomNewsConstant.CUSTOM_NEWS_LOAD_MORE_REQUEST,
    requestCustomNewsArticlesLoadMore,
  );
}
export default CustomNewsSaga;
