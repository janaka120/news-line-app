import {HomeConstant} from '../HomeConstant';
import type {News} from '../../app/models/NewsModel';

export const requestNews = () => {
  return {
    type: HomeConstant.NEWS_REQUEST,
  };
};

export const requestNewsSuccess = (data: News) => {
  return {
    type: HomeConstant.NEWS_REQUEST_SUCCESS,
    payload: data,
  };
};

export const requestNewsFail = () => {
  return {
    type: HomeConstant.NEWS_REQUEST_FAILED,
  };
};

export const pullToRefresh = () => {
  return {
    type: HomeConstant.NEWS_PULL_TO_REFRESH,
  };
};

export const loadMoreNews = () => {
  return {
    type: HomeConstant.LOAD_MORE_NEWS,
  };
};

export const requestNewsLoadMore = (page: number) => {
  return {
    type: HomeConstant.NEWS_LOAD_MORE_REQUEST,
    payload: {page},
  };
};

export const requestNewsLoadMoreSuccess = (data: News) => {
  return {
    type: HomeConstant.NEWS_LOAD_MORE_REQUEST_SUCCESS,
    payload: data,
  };
};
