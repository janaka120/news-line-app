// @flow
import {takeEvery, put, call} from 'redux-saga/effects';
import type {Effect} from 'redux-saga';
import {HomeConstant} from '../HomeConstant';
import {
  requestNewsSuccess,
  requestNewsLoadMoreSuccess,
  requestNewsFail,
} from '../actions/HomeActions';
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
    const url = `${ApiEndPoint.GET_HEADLINES}?country=us&pageSize=${HomeConstant.NEWS_ARTICLES_PAGE_SIZE}&apiKey=${ApiKey}`;
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
    } else {
      yield put(requestNewsFail());
    }
  } catch (e) {
    Alert('Oops', 'News articles retrieving fail');
    yield put(requestNewsFail());
    console.log('requestNews, error: ', e);
  }
}

function* requestNewsArticlesLoadMore({payload}) {
  try {
    const {page} = payload;
    const url = `${ApiEndPoint.GET_HEADLINES}?country=us&page=${page}&pageSize=${HomeConstant.NEWS_ARTICLES_PAGE_SIZE}&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    if (status === ApiStatusCode.SUCCESS) {
      if (data) {
        const totalResults = data.totalResults;
        const articles = yield call(formatArticleData, data.articles);
        yield put(
          requestNewsLoadMoreSuccess({
            articles: articles,
            totalArticles: totalResults,
          }),
        );
      }
    } else {
      yield put(requestNewsFail());
    }
  } catch (e) {
    Alert('Oops', 'News articles retrieving fail');
    yield put(requestNewsFail());
    console.log('requestNews, error: ', e);
  }
}

function* HomeSaga(): Iterable<Effect> {
  yield takeEvery(HomeConstant.NEWS_REQUEST, requestNewsArticles);
  yield takeEvery(
    HomeConstant.NEWS_LOAD_MORE_REQUEST,
    requestNewsArticlesLoadMore,
  );
}
export default HomeSaga;
