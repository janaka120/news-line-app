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

function * formatArticleData(articles: Array<Article>) {
  return articles.map((a, i) => {
    return {
      uuid: i.toString(),
      source: a.source ? a.source : '',
      author: a.author ? a.author : '',
      title: a.title ? a.title : '',
      description: a.description ? a.description : '',
      url: a.url ? a.url : '',
      urlToImage: a.urlToImage ? a.urlToImage : '',
      publishedAt: a.publishedAt ? a.publishedAt : '',
      content: a.content ? a.content : '',
    };
  });
}

function* requestNewsArticles({payload}) {
  try {
    const url = `${ApiEndPoint.GET_HEADLINES}?country=us&apiKey=${ApiKey}`;
    const {status, data}: NewsResponse = yield call(API(url, ApiMethod.GET));
    console.log('response >>>>>>>>>>>', status);
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
    console.log('requestNews, error: ', e);
  }
}

function* HomeSaga(): Iterable<Effect> {
  yield takeEvery(HomeConstant.NEWS_REQUEST, requestNewsArticles);
}
export default HomeSaga;
