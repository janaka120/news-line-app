import {CustomNewsConstant} from '../CustomNewsConstant';
import type {News} from '../../app/models/NewsModel';

export const requestCustomNews = (newsTopic) => {
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
