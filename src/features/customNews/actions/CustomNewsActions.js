import {CustomNewsConstant} from '../CustomNewsConstant';
import type {News} from '../../app/models/NewsModel';

export const requestCustomNews = (newsTopic: string) => {
  return {
    type: CustomNewsConstant.CUSTOM_NEWS_REQUEST,
    payload: {newsTopic},
  };
};

export const requestCustomNewsSuccess = (data: News) => {
  return {
    type: CustomNewsConstant.CUSTOM_NEWS_REQUEST_SUCCESS,
    payload: data,
  };
};

export const requestCustomNewsFail = () => {
  return {
    type: CustomNewsConstant.CUSTOM_NEWS_REQUEST_FAILED,
  };
};

export const pullToRefresh = () => {
  return {
    type: CustomNewsConstant.CUSTOM_NEWS_PULL_TO_REFRESH,
  };
};

export const loadMoreCustomNews = () => {
  return {
    type: CustomNewsConstant.LOAD_MORE_CUSTOM_NEWS,
  };
};

export const requestCustomNewsLoadMore = (newsTopic: string, page: number) => {
  return {
    type: CustomNewsConstant.CUSTOM_NEWS_LOAD_MORE_REQUEST,
    payload: {newsTopic, page},
  };
};

export const requestCustomNewsLoadMoreSuccess = (data: News) => {
  return {
    type: CustomNewsConstant.CUSTOM_NEWS_LOAD_MORE_REQUEST_SUCCESS,
    payload: data,
  };
};
