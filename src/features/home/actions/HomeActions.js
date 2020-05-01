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
